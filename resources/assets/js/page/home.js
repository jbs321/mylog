import React from 'react';
import {connect} from 'react-redux';
import CustomToolbar from '../components/CustomToolbar';
import UserLogPanel from '../components/UserLogPanel';

class HomePage extends React.Component {
    render() {
        return (
            <div className={"container-fluid"} style={{padding: 0}}>
                <CustomToolbar/>
                <UserLogPanel/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(HomePage);