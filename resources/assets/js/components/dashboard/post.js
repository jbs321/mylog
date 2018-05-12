import React from 'react';
import {connect} from 'react-redux'
import {Card, CardHeader, CardText} from 'material-ui/Card';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import TextField from 'material-ui/TextField';
import {deletePost, updatePost} from '../../actions/Post'

class Post extends React.Component {
    constructor() {
        super();

        this.state = {};
        this.state.content = "";
        this.state.isEditable = false;

        this.onEdit = this.onEdit.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const {content} = this.props;

        this.setState({
            content: content,
            isEditable: false
        });
    }

    renderText() {
        console.log(this);
        const {content} = this.state;

        if (this.state.isEditable) {
            const {postId} = this.props;

            return (
                <div>
                    <TextField
                        name={`post-${postId}`}
                        id={`post-${postId}`}
                        style={{width: "100%"}}
                        value={this.state.content}
                        multiLine={true}
                        onChange={this.handleChange}
                    />

                    <FlatButton label="Save" onClick={this.onSave}/>
                    <FlatButton label="Cancel" onClick={() => {this.setState({isEditable: false})}}/>
                </div>
            );
        }

        return content;
    }

    handleChange(evt) {
        this.setState({content: evt.target.value});
    }

    onEdit() {
        let {content} = this.state;

        this.setState({
            content: content,
            isEditable: true
        });
    }

    onDelete() {
        const {deletePost, postId} = this.props;

        deletePost(postId);
    }

    onSave() {
        const {postId, updatePost} = this.props;

        updatePost(postId, {
            content: this.state.content
        });

        this.setState({isEditable: false});
    }

    render() {
        const {title, subTitle, postId} = this.props;

        return (
            <Card style={{padding: 10, margin: 10, position: "relative"}}>
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    style={{position: "absolute", right: 0, top: 0, zIndex: 10}}
                >
                    <MenuItem primaryText="Edit" onClick={this.onEdit}/>
                    <MenuItem primaryText="Delete" onClick={this.onDelete}/>
                </IconMenu>

                <CardHeader
                    id={postId}
                    title={title}
                    subtitle={subTitle}
                >
                </CardHeader>
                <CardText>
                    {this.renderText()}
                </CardText>
            </Card>
        );
    }
}

export default connect(null, {deletePost, updatePost})(Post);