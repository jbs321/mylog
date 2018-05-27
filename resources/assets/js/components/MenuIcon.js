import React from 'react'
import IconMenu from 'material-ui/IconMenu'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import {connect} from "react-redux"
import _ from "lodash"


export const style = {display: "table-cell", verticalAlign: "middle"}

class MenuIcon extends React.Component {

    renderWelcomeMsg() {
        let {user: {name}} = this.props;

        if (name === undefined) {
            name = "Welcome";
        }

        return <div style={style}>Welcome {_.upperFirst(name)}</div>
    }

    static renderMenuBtn() {
        return <div style={style}>
            <IconMenu
                iconButtonElement={
                    <IconButton touch={true}>
                        <NavigationExpandMoreIcon/>
                    </IconButton>
                }>

                <MenuItem primaryText="Profile"/>
            </IconMenu>
        </div>
    }

    render() {
        return (
            <div className={"menu-icon"} style={{display: "table"}}>
                <div className={"menu-icon-row"} style={{display: "table-row"}}>
                    {this.renderWelcomeMsg()}
                    {MenuIcon.renderMenuBtn()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, null)(MenuIcon)