import {combineReducers} from 'redux';


const rootReducer = combineReducers({
    logs: (state = {}, action) => {
        return state;
    }
});

export default rootReducer;