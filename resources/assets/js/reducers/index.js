import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import userReducer from './User';
import authReducer from './Auth';
import loginReducer from './Login';
import userLogReducer from './UserLog';
import postsReducer from './Post';

const rootReducer = combineReducers({
    form: formReducer,
    posts: postsReducer,
    user: userReducer,
    isAuth: authReducer,
    login: loginReducer,
    userLogs: userLogReducer
});

export default rootReducer;