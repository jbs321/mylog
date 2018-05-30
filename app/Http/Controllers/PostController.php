<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Requests\PostRequest;
use App\Post;
use App\User;
use Faker\Provider\Image;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use function PHPSTORM_META\type;

class PostController extends Controller
{
    public function findAllByUser()
    {
        /** @var User $user */
        $user       = Auth::user();
        $posts      = $user->posts()->with(Category::PLURAL);
        $pagination = $posts->paginate(5);

        return new JsonResponse($pagination);
    }

    public function findByPost(Post $post)
    {
        return new JsonResponse($post);
    }

    public function store(Request $request)
    {
        dd(gettype($request->get('categories')), $request->get('categories'));
        $user = Auth::user();
        $post = new Post();
        $post->fill($request->all());
        $post->user_id = $user->id;
        $post->save();

        //handle Category relationship
        if (isset($request->categories)) {
            $categories = $request->categories;

            $categories = array_map(function (string $category) use ($post, $user) {
                $cat                           = new Category();
                $cat[Category::FIELD__POST_ID] = $post->id;
                $cat[Category::FIELD__USER_ID] = $user->id;
                $cat[Category::FIELD__CONTENT] = $category;

                return $cat;
            }, $categories);

            $post->categories()->saveMany($categories);
        }

        //handle File Upload
        if($request->hasFile("photo")) {
            $image      = $request->file('photo');
//            $fileName   = time() . '.' . $image->getClientOriginalExtension();

            $img = Image::make($image->getRealPath());

            $img->resize(120, 120, function ($constraint) {
                $constraint->aspectRatio();
            });

            $img->stream(); // <-- Key point

            Storage::disk('local')->put("images/{$user->id}/{$post->id}/photo", $img, 'public');
        }

        $post->categories;

        return new JsonResponse($post);
    }

    public function update(PostRequest $request, Post $post)
    {
        $user = Auth::user();
        $post->fill($request->all());
        $post->save();

        if (isset($request->categories)) {
            $categories = $request->categories;

            $post->categories()->delete();

            $categories = array_map(function (string $category) use ($post, $user) {
                $cat                           = new Category();
                $cat[Category::FIELD__POST_ID] = $post->id;
                $cat[Category::FIELD__USER_ID] = $user->id;
                $cat[Category::FIELD__CONTENT] = $category;

                return $cat;
            }, $categories);

            $post->categories()->saveMany($categories);
        }

        $post->categories;


        return new JsonResponse($post);
    }

    public function destroy(Post $post)
    {
        $post->categories()->delete();
        $post->delete();

        return new JsonResponse($post);
    }
}

