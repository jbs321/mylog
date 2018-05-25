import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';

export default class Placeholder extends React.Component {
    render() {
        return (
            <div className="timeline-wrapper col-xs-12 offset-sm-1 col-sm-10" style={{padding: 0, marginTop: 10, marginBottom: 10}}>
                <div className="timeline-item">
                    <div className="animated-background">
                        <div className="background-masker header-top"></div>
                        <div className="background-masker header-left"></div>
                        <div className="background-masker header-right"></div>
                        <div className="background-masker header-bottom"></div>
                        <div className="background-masker subheader-left"></div>
                        <div className="background-masker subheader-right"></div>
                        <div className="background-masker subheader-bottom"></div>
                        <div className="background-masker content-top"></div>
                        <div className="background-masker content-first-end"></div>
                        <div className="background-masker content-second-line"></div>
                        <div className="background-masker content-second-end"></div>
                        <div className="background-masker content-third-line"></div>
                        <div className="background-masker content-third-end"></div>
                    </div>
                </div>
            </div>
        );
    }
}