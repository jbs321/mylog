import axios from "axios/index";
let qs = require('qs');

/**
 * Action Keys
 */
export const GET_USER_POSTS = 'get_user_log';
export const POST_CREATE_POST = 'post_create_post';

export function findAllByUser() {
    const request = axios({
        method: "GET",
        url: `/api/user/posts`,
    });

    return {
        type: GET_USER_POSTS,
        payload: request
    }
}

export function createUserPost(post) {
    const request = axios({
        method: "PUT",
        url: `/api/post/store`,
        data: qs.stringify({
            content: post
        }),
    });

    return {
        type: POST_CREATE_POST,
        payload: request
    }
}