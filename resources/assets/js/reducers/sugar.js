import {FETCH_SUGAR_CHART} from '../actions/Sugar';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_SUGAR_CHART:
            return action.payload.data;
        default:
            return state;
    }
}