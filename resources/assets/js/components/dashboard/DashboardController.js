import React from 'react'
import {connect} from 'react-redux'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {createUserPost} from '../../actions/Post';
import CategoryController from "./CategoryController";
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import LabelIcon from '@material-ui/icons/Label';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
    paperClass: {
        padding: 10,
        margin: 15,
    },
    editBtn: {
        float: "right"
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
});

class DashboardController extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.state.chips = [];
        this.state.post_text = "";
        this.state.imagePreviewUrl = "";
        this.state.selectedFile = null;
        this.state.displayCategory = false;

        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.renderPlaceholder = this.renderPlaceholder.bind(this);
        this.toggleCategories = this.toggleCategories.bind(this);
        this.fileChangedHandler = this.fileChangedHandler.bind(this);
        this.renderMedia = this.renderMedia.bind(this);
    }

    renderPlaceholder() {
        const {user: {name}} = this.props;
        let ph = "What's on your mind";

        if (name !== undefined) {
            ph += `, ${_.upperFirst(name)}`;
        }

        return ph;
    }

    toggleCategories() {
        const {displayCategory} = this.state;
        this.setState({
            displayCategory: !displayCategory
        });
    }


    handleClick() {
        const {post_text, chips, selectedFile} = this.state;

        if (post_text === undefined || post_text === "") {
            return null;
        }

        let that = this;

        this.props.createUserPost({
            content: post_text,
            categories: chips,
            photo: selectedFile,
        }, (data) => {
            that.setState({
                chips: [],
                post_text: "",
                displayCategory: false,
            });
        });
    }

    handleInputChange(evt) {
        this.setState({[evt.target.name]: evt.target.value});
    }

    fileChangedHandler(event) {
        let reader = new FileReader();
        const file = event.target.files[0];
        let that = this;

        if (file === undefined) {
            throw new Error("File missing");
        }

        this.setState({
            selectedFile: file,
            imagePreviewUrl: URL.createObjectURL(file)
        });
    }

    renderMedia() {
        const {imagePreviewUrl} = this.state;
        const {classes} = this.props;

        if (imagePreviewUrl === "") {
            return null;
        }

        return (
            <CardMedia
                className={classes.media}
                image={imagePreviewUrl}
                title="Title"
            />
        );
    }

    render() {
        const {classes} = this.props;
        const {post_text, displayCategory} = this.state;

        const postCategoriesController = (displayCategory)
            ? <CategoryController onCreate={(chips) => {
                this.setState({
                    chips: chips
                });
            }}/> : null;

        return (
            <div>
                <Card>
                    <CardText>
                        <TextField
                            name={"post_text"}
                            id={"post_text"}
                            style={{width: "100%"}}
                            value={post_text}
                            rowsMax={4}
                            hintText={this.renderPlaceholder()}
                            onChange={this.handleInputChange}
                            multiLine={true}/>
                    </CardText>

                    <CardText>
                        {postCategoriesController}
                    </CardText>

                    {this.renderMedia()}

                    <CardActions>
                        <FlatButton label="Post" onClick={this.handleClick}/>

                        <IconButton color="primary" aria-label="Add Category" onClick={this.toggleCategories}>
                            <LabelIcon/>
                        </IconButton>


                        <input accept="image/*" className={classes.input} id="icon-button-file"
                               onChange={this.fileChangedHandler} type="file"/>
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" className={classes.button} component="span">
                                <PhotoCamera/>
                            </IconButton>
                        </label>
                    </CardActions>
                </Card>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return state;
}

DashboardController.propTypes = {
    classes: PropTypes.object,
};

export default connect(mapStateToProps, {createUserPost})(withStyles(styles)(DashboardController));