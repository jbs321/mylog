import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from "./page/home";
import LoginContainer from "./form/LoginContainer";
import Welcome from "./page/welcome";
import State from './tools/state';
import {fetchAuth} from './actions/Auth'

class App extends React.Component {
    componentDidMount() {
        this.props.fetchAuth();
    }
    render() {
        const {isAuth} = this.props;
        return (
            <div className="app">
                    <Switch>
                        <Route path="/login" component={LoginContainer}/>
                        <Route exact path="/" render={() => isAuth ? <HomePage/> : <Welcome/>}/>
                    </Switch>
                    <State/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {fetchAuth})(App);