import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from "./Page/home";
import LogPage from "./Page/log";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="page-container">
                    <Switch>
                        <Route path="/log" component={LogPage}/>
                        <Route component={HomePage}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(App);