import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import {connect} from "react-redux";
import {fetchUserDetails} from "../actions/User";
import { Link } from 'react-router-dom'

class CustomToolbar extends React.Component {
    renderButtons() {
        if (this.props.name != undefined) {
            return (
                <div style={{margin: "auto 20px"}}>
                    <span>Welcome {this.props.name}</span>
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <NavigationExpandMoreIcon />
                            </IconButton>
                        }
                    >
                        <MenuItem primaryText="Profile" />
                        <MenuItem primaryText="Dashboard" />
                    </IconMenu>
                    </div>
            )
        }

        return (
            <div>
                <Link to="/login"><RaisedButton label="Login" primary={true}/></Link>
                <RaisedButton label="Register" primary={true} style={{marginLeft:5}}/>
            </div>
        );
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
                    {this.renderButtons()}
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

function mapStateToProps({user}) {
    return user ? user : {};
}

export default connect(mapStateToProps, {fetchUserDetails})(CustomToolbar);