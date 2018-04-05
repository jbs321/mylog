import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from "./page/home";
import LoginContainer from "./form/LoginContainer";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                    <Switch>
                        <Route path="/login" component={LoginContainer}/>
                        <Route component={HomePage}/>
                    </Switch>
            </div>
        );
    }
}

export default connect(null, null)(App);