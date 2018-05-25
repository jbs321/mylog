import React from 'react'
import {connect} from 'react-redux'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {createUserPost} from '../../actions/Post';
import OpenIconSpeedDial from './OpenIconSpeedDial';


class DashboardController extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.state.post_text = "";

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div>
                <Card>
                    <CardText>
                        <TextField
                            name={"post_text"}
                            id={"post_text"}
                            style={{width: "100%"}}
                            value={this.state.post_text}
                            rowsMax={4}
                            hintText="Say Something..."
                            onChange={this.handleChange}
                            multiLine={true}/>
                    </CardText>

                    <CardActions>
                        <FlatButton label="Post" onClick={this.handleClick}/>

                        <OpenIconSpeedDial/>
                    </CardActions>
                </Card>
            </div>
        );
    }

    handleClick() {
        if (this.state.post_text == undefined
            || this.state.post_text == "") {
            return null;
        }

        this.props.createUserPost(this.state.post_text, (data) => {
            this.setState({post_text: ""});
        });
    }

    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value});
    }
}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {createUserPost})(DashboardController);