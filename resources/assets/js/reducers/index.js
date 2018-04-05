import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import userReducer from './User';
import authReducer from './Auth';
import loginReducer from './Login';
import sugarReducer from './Sugar';

const rootReducer = combineReducers({
    form: formReducer,
    user: userReducer,
    isAuth: authReducer,
    login: loginReducer,
    sugar: sugarReducer
});

export default rootReducer;