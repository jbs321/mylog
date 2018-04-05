import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MenuIcon from './MenuIcon';
import {connect} from "react-redux";
import {fetchUserDetails} from '../actions/User'

class CustomToolbar extends React.Component {
    componentDidMount() {
        this.props.fetchUserDetails();
    }

    render() {
        return (
            <Toolbar>
                <ToolbarGroup>
                    <ToolbarTitle text="MyLog"/>
                    <FontIcon className="muidocs-icon-custom-sort"/>
                    <ToolbarSeparator/>
                </ToolbarGroup>

                <ToolbarGroup>
                    <MenuIcon/>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {fetchUserDetails})(CustomToolbar);