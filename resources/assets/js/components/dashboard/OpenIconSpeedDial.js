import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import ContentCopyIcon from '@material-ui/icons/ContentCopy';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/ModeEdit';
// import AddIcon from '@material-ui/icons/AddToQueue';
import AddIcon from '@material-ui/icons/Label';

const styles = theme => ({
    root: {
        height: 380,
    },
    speedDial: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    },
});

const actions = [
    // {icon: <ContentCopyIcon/>, name: 'Copy'},
    // {icon: <SaveIcon/>, name: 'Save'},
    // {icon: <PrintIcon/>, name: 'Print'},
    // {icon: <ShareIcon/>, name: 'Share'},
    {icon: <DeleteIcon/>, name: 'Delete'},
    {icon: <AddIcon/>, name: 'Add'},
];

class OpenIconSpeedDial extends React.Component {
    constructor() {
        super();

        this.state = {
            open: false,
            hidden: false,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClick() {
        this.setState({
            open: !this.state.open,
        });
    };

    handleOpen() {
        if (!this.state.hidden) {
            this.setState({
                open: true,
            });
        }
    };

    handleClose() {
        this.setState({
            open: false,
        });
    };

    render() {
        const {classes} = this.props;
        const {hidden, open} = this.state;
        /*<div className={classes.root}>*/

        return (
            <div>
                <SpeedDial
                    ariaLabel="SpeedDial openIcon example"
                    className={classes.speedDial}
                    hidden={hidden}
                    icon={<SpeedDialIcon openIcon={<EditIcon/>}/>}
                    onBlur={this.handleClose}
                    onClick={this.handleClick}
                    onClose={this.handleClose}
                    onFocus={this.handleOpen}
                    onMouseEnter={this.handleOpen}
                    onMouseLeave={this.handleClose}
                    open={open}
                >
                    {actions.map(action => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={this.handleClick}
                        />
                    ))}
                </SpeedDial>
            </div>
        )
            ;
    }
}

OpenIconSpeedDial.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OpenIconSpeedDial);
