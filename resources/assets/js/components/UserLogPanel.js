import React from 'react';
import {connect} from "react-redux";
import {getUserLog, createUserLog} from '../actions/UserLog'
import CustomCard from '../presentation/CustomCard';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import _ from 'lodash';

class UserLogPanel extends React.Component {

    constructor() {
        super();
        this.state = {};
        this.state.post_text = "";

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.getUserLog();
    }

    render() {
        return (
            <div className={"col-lg-6"} style={{padding: 10, margin: "auto"}}>
                {this.renderController()}
                {this.renderLogs()}
            </div>
        );
    }

    renderController() {
        return (
            <div>
                <Card>
                    <CardHeader title="Log"/>
                    <CardText>
                        <TextField
                            name={"post_text"}
                            id={"post_text"}
                            rows={2}
                            style={{width: "100%"}}
                            value={this.state.post_text}
                            rowsMax={4}
                            onChange={this.handleChange}
                            multiLine={true}/>
                    </CardText>
                    <CardActions>
                        <FlatButton label="Post" onClick={this.handleClick.bind(this)}/>
                    </CardActions>
                </Card>
            </div>
        );
    }

    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value});
    }

    handleClick() {
        if (this.state.post_text == undefined
            || this.state.post_text == "") {
            return null;
        }
        this.props.createUserLog(this.state.post_text, (data) => {
            this.setState({post_text: ""});
        });
    }

    renderLogs() {
        const {userLogs} = this.props;

        let ul = [];

        if (userLogs == undefined) {
            return ul;
        }


        _.each(userLogs, (log, idx) => {
            const labels = log.labels.map((label) => {
                return label.description;
            });

            let subTitle = labels.join(",");

            ul.push(
                <CustomCard title={log.created_at} text={log.description} key={idx} subTitle={subTitle}/>
            );
        });

        return ul;
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {getUserLog, createUserLog})(UserLogPanel)