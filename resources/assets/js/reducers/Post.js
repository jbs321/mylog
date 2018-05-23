import _ from 'lodash';
import Pagination from '../dataset/pagination';
import {
    DELETE_CREATE_POST,
    GET_USER_POSTS,
    POST_CREATE_POST,
    UPDATE_POST,
    GET_NEXT_POSTS
} from '../actions/Post';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_USER_POSTS:
            if (action.payload.data) {
                const {data} = action.payload;
                return {
                    current_page: data.current_page,
                    list: _.keyBy(data.data, 'id'),
                    pages: {
                        [data.current_page]: new Pagination(data)
                    }
                }
            }

            break;

        case GET_NEXT_POSTS:
            if (action.payload.data) {
                const {data} = action.payload;
                let newState = _.assign({}, state);

                newState.current_page = data.current_page;
                newState.list = _.assign(newState.list, _.keyBy(data.data, 'id'));
                newState.pages = _.assign({[data.current_page]: new Pagination(data)}, newState.pages);

                return newState;
            }

            break;
        case POST_CREATE_POST:
            if (action.payload.data) {
                const {data} = action.payload;
                let newState = _.assign({}, state);
                newState.list =  _.assign({[data.id]: data}, newState.list);

                return newState;
            }

            break;

            case DELETE_CREATE_POST:
                if (action.payload) {
                    let id = action.payload;
                    let newState = _.assign({}, state);

                    _.unset(newState.list, id);

                    return newState;
                }
                break;

            case UPDATE_POST:
                if (action.payload) {
                    let newState = _.assign({}, state);

                    return newState;
                }
                break;
    }

    return state;
}
