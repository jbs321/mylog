import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class CustomCard extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){

    }

    render() {
        const {title, subTitle, text, id} = this.props;

        return (
            <Card style={{padding: 10, margin: 10}}>
                <CardHeader
                    id={id}
                    title={title}
                    subtitle={subTitle}
                />
                <CardActions>
                    <FlatButton label="Delete"/>
                </CardActions>
                <CardText>
                    {text}
                </CardText>
            </Card>
        );
    }
}