import axios from "axios/index";

let qs = require('qs');

/**
 * Action Keys
 */
export const GET_USER_POSTS = 'get_user_log';
export const POST_CREATE_POST = 'post_create_post';
export const DELETE_CREATE_POST = 'delete_create_post';
export const UPDATE_POST = 'update_post';

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

export function deletePost(postId) {
    const request = axios({
        method: "DELETE",
        url: `/api/posts/${postId}/delete`
    });

    return {
        type: DELETE_CREATE_POST,
        payload: postId
    }
}

export function updatePost(postId, data) {
    const request = axios({
        method: "POST",
        url: `/api/posts/${postId}`,
        data: qs.stringify(data)
    });

    return {
        type: UPDATE_POST,
        payload: request
    }
}