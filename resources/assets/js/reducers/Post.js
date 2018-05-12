import _ from 'lodash';
import {DELETE_CREATE_POST, GET_USER_POSTS, POST_CREATE_POST, UPDATE_POST} from '../actions/Post';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_USER_POSTS:
            if (action.payload.data) {
                let sorted = _.sortBy(action.payload.data.data, 'updated_at').reverse();
                let mapped = _.keyBy(sorted, 'id');
                return mapped;
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
