<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    const FIELD__USER_ID = "user_id";
    const FIELD__CONTENT = "content";
    const FIELD__CREATED_AT = "created_at";
    const FIELD__UPDATED_AT = "updated_at";


    protected $table = 'posts';

    protected $fillable = [
        self::FIELD__USER_ID,
        self::FIELD__CONTENT,
    ];

    /**
     * @return User
     */
    public function user()
    {
        $this->hasOne('App\User');
    }
}
