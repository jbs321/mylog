import React from 'react'
import {connect} from 'react-redux'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {createUserPost} from '../../actions/Post';
import OpenIconSpeedDial from './OpenIconSpeedDial';
import PostCategoryChipArray from "./PostCategoryChipArray";
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles';

const styles = {
    paperClass: {
        padding: 10,
        margin: 15,
    },
};

class DashboardController extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.state.post_text = "";
        this.state.post_category = "";
        this.state.is_category_visable = false;
        this.state.chips = [];

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderPlaceholder = this.renderPlaceholder.bind(this);
        this.onEnter = this.onEnter.bind(this);
        this.onDeleteCategory = this.onDeleteCategory.bind(this);
        this.renderChipsArray = this.renderChipsArray.bind(this);
        this.handleSpeedDial = this.handleSpeedDial.bind(this);
    }

    renderPlaceholder() {
        const {user: {name}} = this.props;
        let ph = "What's on your mind";

        if (name !== undefined) {
            ph += `, ${_.upperFirst(name)}`;
        }

        return ph;
    }

    onEnter(e) {
        let val = e.target.value;

        if (e.key !== 'Enter') {
            return;
        }

        let {chips} = this.state;
        chips.push(val);

        this.setState({
            chips: chips,
            post_category: "",
        });
    }

    onDeleteCategory(elem, chip) {
        let {chips} = this.state;
        chips = _.pull(chips, chip);

        this.setState({chips: chips});
    }

    renderChipsArray() {
        const {chips} = this.state;

        if (chips === undefined || chips.length === 0 ) return null;

        return <PostCategoryChipArray chips={chips} onDelete={this.onDeleteCategory}/>;
    }

    handleSpeedDial() {
        const {is_category_visable} = this.state;
        this.setState({is_category_visable: !is_category_visable});
    }

    render() {
        const {post_text, post_category, is_category_visable} = this.state;
        const {classes: {paperClass}} = this.props;

        const paper = (is_category_visable) ? <Paper className={paperClass}>
            <CardText>
            <TextField
        placeholder={"Categories: e.g. Food, Hobby, Thought, Reminder"}
        name={"post_category"}
        fullWidth
        id={"post_category"}
        label="Search field"
        onKeyPress={this.onEnter}
        value={post_category}
        onChange={this.handleChange}
        type="search"
        margin="normal"/>

            {this.renderChipsArray()}

    </CardText>
    </Paper>: null;

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
                            onChange={this.handleChange}
                            multiLine={true}/>
                    </CardText>


                    {paper}

                    <CardActions>
                        <FlatButton  label="Post" onClick={this.handleClick}/>
                        <OpenIconSpeedDial onSelect={this.handleSpeedDial}/>
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

DashboardController.propTypes = {
    classes: PropTypes.object,
};

export default connect(mapStateToProps, {createUserPost})(withStyles(styles)(DashboardController));