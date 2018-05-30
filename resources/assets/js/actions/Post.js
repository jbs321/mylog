import axios from "axios/index";
import Pagination, {NEXT_PAGE_URL, CURRENT_PAGE, LAST_PAGE} from "../dataset/pagination";

let qs = require('qs');

/**
 * Action Keys
 */
export const GET_USER_POSTS = 'get_user_posts';
export const GET_NEXT_POSTS = 'get_next_posts';
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

export function findNextPagination(pagination, cb) {
    if (pagination !== undefined
        && !pagination instanceof Pagination) {
        throw new Error('Wrong Type for parameter');
    }

    const request = axios({
        method: "GET",
        url: pagination.next_page_url,
    });

    request.then((result) => cb(result));

    return {
        type: GET_NEXT_POSTS,
        payload: request
    }
}

export function createUserPost(post, cb) {
    const formData = new FormData();
    const {content, categories, photo} = post;

    console.log(categories);

    formData.append('photo', photo, photo.name);
    formData.append('content', content);
    formData.append('categories', categories);


    let config = {
        headers: {'Content-Type': 'multipart/form-data'},
        onUploadProgress: function (progressEvent) {
            let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log(percentCompleted);
        }
    };

    // const request = axios.post("/api/post/store", formData, config);

    const request = axios({
        method: "POST",
        url: `/api/post/store`,
        data: formData,
    });

    request.then((result) => cb(result));

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
        payload: request
    }
}

export function updatePost(id, data) {
    const request = axios({
        method: "POST",
        url: `/api/posts/${id}`,
        data: qs.stringify(data)
    });

    return {
        type: UPDATE_POST,
        payload: request
    }
}