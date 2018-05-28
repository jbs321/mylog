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
import PropTypes from 'prop-types';
import CategoryController from './CategoryController';

class Post extends React.Component {
    constructor() {
        super();

        this.state = {};
        this.state.content = "";
        this.state.categories = [];
        this.state.isEditable = false;

        this.onEdit = this.onEdit.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const {content, categories} = this.props;

        this.setState({
            content: content,
            categories: categories.map((cat) => cat.content),
            isEditable: false,
        });
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
        const {deletePost, id} = this.props;

        deletePost(id);
    }

    onSave() {
        const {id, updatePost} = this.props;
        const {categories} = this.state;

        console.log(categories);

        updatePost(id, {
            content: this.state.content,
            categories: categories,
        });

        this.setState({isEditable: false});
    }

    renderText() {
        const {id} = this.props;
        const {content, isEditable, categories} = this.state;

        if (!isEditable) {
            return content;
        }

        return (
            <div>
                <TextField
                    name={`post-${id}`}
                    id={`post-${id}`}
                    style={{width: "100%"}}
                    value={this.state.content}
                    multiLine={true}
                    onChange={this.handleChange}
                />

                <CategoryController chips={categories}
                                    onCreate={(categories) => this.setState({categories: categories})}/>

                <FlatButton label="Save" onClick={this.onSave}/>
                <FlatButton label="Cancel" onClick={() => {
                    this.setState({isEditable: false})
                }}/>
            </div>
        );
    }

    render() {
        const {title, subTitle, id, animationDelay, withAnimation} = this.props;
        const animationClass = withAnimation ? `animated slideInDown ${animationDelay}` : "";

        const cardClass = [
            "col-xs-12",
            "offset-sm-1",
            "col-sm-10",
            animationClass
        ];

        return (
            <Card className={cardClass.join(" ")} style={{marginTop: 10, marginBottom: 10}}>
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    style={{position: "absolute", right: 0, top: 0, zIndex: 10}}
                >
                    <MenuItem primaryText="Edit" onClick={this.onEdit}/>
                    <MenuItem primaryText="Delete" onClick={this.onDelete}/>
                </IconMenu>

                <CardHeader id={id} title={title} subtitle={subTitle}/>

                <CardText>
                    {this.renderText()}
                </CardText>
            </Card>
        );
    }
}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
};

export default connect(null, {deletePost, updatePost})(Post);