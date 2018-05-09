import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

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

    onExpandChange(newExpandedState) {
        console.log(newExpandedState);
    }

    render() {
        const {title, subTitle, text, logId} = this.props;

        return (
            <Card style={{padding: 10, margin: 10}}
                  onExpandChange={this.onExpandChange.bind(this)}>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange} expandable={true} style={{position: "absolute"}}>
                        <MenuItem value={1} primaryText="Never"/>
                        <MenuItem value={2} primaryText="Every Night"/>
                        <MenuItem value={3} primaryText="Weeknights"/>
                        <MenuItem value={4} primaryText="Weekends"/>
                        <MenuItem value={5} primaryText="Weekly"/>
                    </DropDownMenu>
                <CardHeader
                    id={logId}
                    title={title}
                    subtitle={subTitle}
                    showExpandableButton={true}

                >
                </CardHeader>
                <CardText>
                    {text}
                </CardText>
            </Card>
        );
    }
}