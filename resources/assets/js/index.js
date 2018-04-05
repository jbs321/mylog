import React from 'react';
import ReactDOM from 'react-dom';

import {Router} from 'react-router-dom';

import App from "./App";

import {MuiThemeProvider} from 'material-ui/styles';

import {Provider} from 'react-redux';
import reducers from './reducers';

import axios from "axios";

import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';

import history from './History.jsx';

/**
 * Set global setting for Axios
 * https://github.com/mzabriskie/axios
 */
axios.defaults.baseURL = process.env.ENV.API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <MuiThemeProvider>
            <Router history={history}>
                <App/>
            </Router>
        </MuiThemeProvider>
    </Provider>, document.getElementById('root'));