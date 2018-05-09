<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    const FIELD__POST_ID = "post_id";
    const FIELD__USER_ID = "user_id";
    const FIELD__CONTENT = "content";

    protected $table = 'categories';

    protected $fillable = [
        self::FIELD__CONTENT,
        self::FIELD__USER_ID,
        self::FIELD__POST_ID,
    ];

    public function post()
    {
        $this->hasOne('App\Post');
    }

    public function user()
    {
        $this->hasOne('App\User');
    }
}
