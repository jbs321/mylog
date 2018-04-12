import React from 'react';
import {connect} from 'react-redux';
import {fetchAuth} from "../actions/Auth";
import LoginContainer from "../form/LoginContainer";
import {Switch, Route} from 'react-router-dom';
import Welcome from "../page/welcome";

class AuthBoundary extends React.Component {
    componentDidMount() {
        this.props.fetchAuth();
    }

    render() {
        const {isAuth} = this.props;

        if (!isAuth) {
            return (
                <Switch>
                    <Route path="/login" component={LoginContainer}/>
                    <Route exact path="/" component={Welcome}/>
                </Switch>
            );
        }

        return this.props.children;
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {fetchAuth})(AuthBoundary);