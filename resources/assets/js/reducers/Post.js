import _ from 'lodash';
import Pagination from '../dataset/pagination';
import {
    DELETE_CREATE_POST,
    GET_USER_POSTS,
    POST_CREATE_POST,
    UPDATE_POST,
    GET_NEXT_POSTS
} from '../actions/Post';

export default function (state = [], action) {
    switch (action.type) {
        case GET_USER_POSTS:
            if (action.payload.data) {
                return [
                    new Pagination(action.payload.data)
                ];
            }

            break;

        case GET_NEXT_POSTS:
            if (action.payload.data) {
                let newState = _.assign([], state);
                newState.push(new Pagination(action.payload.data))
                return newState;
            }

            break;
        case POST_CREATE_POST:
            if (action.payload.data) {
                let assign = _.assign({[action.payload.data.id]: action.payload.data}, state);
                let sorted = _.sortBy(assign, 'updated_at').reverse();
                let mapped = _.keyBy(sorted, 'id');

                return mapped;
            }

            break;

        case DELETE_CREATE_POST:
            if (action.payload) {
                let postId = action.payload;
                let newState = _.assign({}, state);
                console.log(postId);
                _.unset(newState, postId);

                return newState;
            }
            break;

        case UPDATE_POST:
            if (action.payload) {
                let postId = action.payload;
                let newState = _.assign({}, state);
                console.log(postId);
                _.unset(newState, postId);

                return newState;
            }
            break;
    }

    return state;
}
