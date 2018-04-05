import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import {connect} from "react-redux";

class MenuIcon extends React.Component {
    render() {
        const {name} = this.props.user;

        if (name == undefined) {
            return <div>Loading...</div>;
        }

        const style = {display: "table-cell", verticalAlign: "middle"};

        return (
            <div className={"menu-icon"} style={{display: "table"}}>
                <div className={"menu-icon-row"} style={{display: "table-row"}}>
                    <div style={style}>Welcome {name}</div>
                    <div style={style}>
                        <IconMenu
                            iconButtonElement={
                                <IconButton touch={true}>
                                    <NavigationExpandMoreIcon/>
                                </IconButton>
                            }>

                            <MenuItem primaryText="Profile"/>
                            <MenuItem primaryText="Messages"/>
                            <MenuItem primaryText="Dashboard"/>
                        </IconMenu>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(MenuIcon);