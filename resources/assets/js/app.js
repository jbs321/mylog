import React from 'react';
import State from './tools/state';
import Routes from './Routes';
import AuthBoundary from './components/AuthBoundary';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <AuthBoundary>
                    <Routes/>
                </AuthBoundary>
                <State/>
            </div>
        );
    }
}
