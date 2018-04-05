import axios from 'axios';

export const AUTHENTICATE = "authenticate";
export const IS_AUTHENTICATE = "is_authenticate";

let qs = require('qs');

const {
    APP_URL,
    REACT_AUTH_CONFIG_CLIENT_ID,
    REACT_AUTH_CONFIG_CLIENT_SECRET
} = process.env.ENV;

export function authenticate(email, password, cb) {
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

    request.then(result => {
        cb(result.data);
    });

    return {
        type: AUTHENTICATE,
        payload: request
    }
}

export function fetchAuth(cb) {
    let token_type   = localStorage.getItem('token_type');
    let access_token = localStorage.getItem('access_token');
    let token        = token_type + " " + access_token;

    if (token !== undefined) {
        cb(token_type + " " + access_token);

        return {
            type: IS_AUTHENTICATE,
            payload: true
        }
    }


    return {
        type: IS_AUTHENTICATE,
        payload: false
    }
}