import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {authenticate} from '../actions/Auth';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'

let qs = require('qs');

const style = {
    margin: 12,
};

class LoginContainer extends React.Component {
    renderField(field) {
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ""}`;

        return (
            <div className={className}>
                <TextField
                    hintText={field.label}
                    {...field.input}
                    className="field login-field"
                    floatingLabelText={field.label}/>

                <div className="text-help">{touched ? error : ""}</div>
            </div>
        );
    }

    render() {
        const {handleSubmit} = this.props;
        const className = (this.props.className !== undefined) ? this.props.className : "";
        return (
            <div className={"login-container " + className} style={this.props.style}>
                <div className={"login-form " + className} style={this.props.style}>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field
                            name="email"
                            label="Email"
                            component={this.renderField}
                        />

                        <Field
                            name="password"
                            label="Password"
                            component={this.renderField}
                        />

                        <RaisedButton type="submit" label="Login" primary={true} style={style}/>
                        <RaisedButton label="Register" secondary={true} style={style}/>
                    </form>
                </div>

                <Link to={"/"}>home</Link>
            </div>
        );
    }

    onSubmit(data) {
        this.props.authenticate(data.email, data.password, (result) => {
            let expiresIn = JSON.stringify((result.expires_in * 1000) + new Date().getTime());
            localStorage.setItem('token_type', result.token_type);
            localStorage.setItem('expires_in', expiresIn);
            localStorage.setItem('access_token', result.access_token);
            localStorage.setItem('refresh_token', result.refresh_token);

            axios.defaults.headers.common['Authorization'] = result.token_type + " " + result.access_token;

            this.props.history.push('/');//ddd
        });
    }
}

function validate(values) {
    const errors = {};

    if (!values.email) {
        errors.email = 'Missing Email';
    }

    if (!values.password) {
        errors.password = 'Missing Password';
    }

    if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email))) {
        errors.email = 'Please provide a correct email format user@example.com';
    }

    return errors;
}

function mapStateToProps(state) {
    return state;
}

export default reduxForm({
    validate,
    form: 'LoginForm'
})(
    connect(mapStateToProps, {authenticate})(LoginContainer)
);
