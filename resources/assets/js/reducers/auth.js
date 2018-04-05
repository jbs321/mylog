import {AUTHENTICATE, IS_AUTHENTICATE} from '../actions/Auth';

export default function (state = null, action) {
    switch (action.type) {
        case AUTHENTICATE:
            return (action.payload) ? action.payload.data : false;
        case IS_AUTHENTICATE:
            return action.payload;
        default:
            return state;
    }
}