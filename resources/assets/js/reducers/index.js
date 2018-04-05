import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import userReducer from './user';
import authReducer from './auth';
import sugarReducer from './sugar';

const rootReducer = combineReducers({
    form: formReducer,
    user: userReducer,
    isAuth: authReducer,
    auth: authReducer,
    sugar: sugarReducer
});

export default rootReducer;