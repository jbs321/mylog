<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Post;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function findAllByUser()
    {
        $user       = Auth::user();
        $posts      = $user->posts();
        $pagination = $posts->paginate(5);

        return new JsonResponse($pagination);
    }

    public function findByPost(Post $post)
    {
        return new JsonResponse($post);
    }

    public function store(PostRequest $request)
    {
        $user = Auth::user();
        $post = new Post();
        $post->fill($request->all());
        $post->user_id = $user->id;
        $post->save();

        return new JsonResponse($post);
    }

    public function update(PostRequest $request, Post $post)
    {
        $post->fill($request->all());
        $post->save();
        return new JsonResponse($post);
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return new JsonResponse($post);
    }
}

