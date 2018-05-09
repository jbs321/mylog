import _ from 'lodash';
import {GET_USER_POSTS, POST_CREATE_POST} from '../actions/Post';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_USER_POSTS:
            if (action.payload.data) {
                return _.sortBy(_.keyBy(action.payload.data.data, 'id'), 'created_at').reverse();
            }

            return state;

        case POST_CREATE_POST:
            if (action.payload.data) {
                let assign = _.assign({[action.payload.data.id]: action.payload.data},state);
                let mapped = _.keyBy(assign, 'id');
                let sorted = _.sortBy(mapped, 'created_at').reverse();

                return sorted;
            }
            break;
        default:
            return state;
    }
}
