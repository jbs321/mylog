import _ from 'lodash';
import {CREATE_USER_LOG, DELETE_USER_LOG, GET_USER_LOG} from '../actions/UserLog';

export default function (state = {}, action) {
    switch (action.type) {
        case CREATE_USER_LOG:
            if (action.payload) {
                let newState = _.sortBy(_.assign({[action.payload.data.id]: action.payload.data}, state), 'created_at').reverse();
                return newState;
            }

            return state;
        case GET_USER_LOG:
            return (action.payload) ? _.sortBy(_.keyBy(action.payload.data, 'id'), [(log) => {return log.created_at}]).reverse() : state;

        case DELETE_USER_LOG:
            _.unset(state, action.payload)
            return state;

        default: //dsadas
            return state;
    }
}