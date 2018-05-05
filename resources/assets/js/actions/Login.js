import axios from 'axios';

export const LOGIN = "login";
export const LOGOUT = "logout";
export const REGISTER = "register";

let qs = require('qs');

const {
    APP_URL,
    REACT_AUTH_CONFIG_CLIENT_ID,
    REACT_AUTH_CONFIG_CLIENT_SECRET
} = process.env.ENV;

export function login(email, password, cb) {
    const scope = '';

    let postData = {
        grant_type: 'password',
        password: password,
        client_id: REACT_AUTH_CONFIG_CLIENT_ID,
        client_secret: REACT_AUTH_CONFIG_CLIENT_SECRET,
        username: email,
        scope: scope,
    };

    const request = axios({
        method: "POST",
        url: "oauth/token",
        baseURL: APP_URL,
        data: qs.stringify(postData),
    });

    request.then(response => {
        let result = response.data;
        let expiresIn = JSON.stringify((result.expires_in * 1000) + new Date().getTime());
        localStorage.setItem('token_type', result.token_type);
        localStorage.setItem('expires_in', expiresIn);
        localStorage.setItem('access_token', result.access_token);
        localStorage.setItem('refresh_token', result.refresh_token);

        axios.defaults.headers.common['Authorization'] = result.token_type + " " + result.access_token;

        cb();
    });

    return {
        type: LOGIN,
        payload: request
    }
}

export function logout(cb) {
    localStorage.setItem('token_type', "");
    localStorage.setItem('expires_in', "");
    localStorage.setItem('access_token', "");
    localStorage.setItem('refresh_token', "");
    axios.defaults.headers.common['Authorization'] = "";

    cb();

    return {
        type: LOGOUT,
        payload: request
    }
}

export function register() {
    const scope = '';

    let postData = {
        grant_type: 'password',
        password: password,
        client_id: REACT_AUTH_CONFIG_CLIENT_ID,
        client_secret: REACT_AUTH_CONFIG_CLIENT_SECRET,
        username: email,
        scope: scope,
    };

    const request = axios({
        method: "POST",
        url: "api/",
        baseURL: APP_URL,
        data: qs.stringify(postData),
    });

    request.then(response => {
        let result = response.data;
        let expiresIn = JSON.stringify((result.expires_in * 1000) + new Date().getTime());
        localStorage.setItem('token_type', result.token_type);
        localStorage.setItem('expires_in', expiresIn);
        localStorage.setItem('access_token', result.access_token);
        localStorage.setItem('refresh_token', result.refresh_token);

        axios.defaults.headers.common['Authorization'] = result.token_type + " " + result.access_token;

        cb();
    });

    return {
        type: REGISTER,
        payload: request
    }
}