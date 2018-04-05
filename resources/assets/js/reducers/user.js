import {FETCH_USER_PROFILE} from '../actions/User';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_USER_PROFILE:
            return (action.payload) ? action.payload.data : false;
        default:
            return state;
    }
}