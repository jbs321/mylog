import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

export default class CustomCard extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.state.expanded = true;

        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(event, toggle) {
        this.setState({expanded: !toggle});
    };

    render() {
        const {title, subTitle, text, logId} = this.props;

        return (
            <Card style={{padding: 10, margin: 10}}>
                <CardHeader
                    id={logId}
                    title={title}
                    subtitle={subTitle}
                />
                <CardText>
                    {text}
                </CardText>

                <CardActions>
                    <FlatButton label="Delete" onClick={() => this.props.handleDelete(logId)}/>
                    <FlatButton label="Edit" onClick={() => this.props.handleEdit(logId)}/>
                    <Toggle
                        toggled={this.state.expanded}
                        onToggle={this.handleToggle}
                        labelPosition="right"
                        label="This toggle controls the expanded state of the component."
                    />
                </CardActions>
            </Card>
        );
    }
}