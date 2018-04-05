import React from 'react';
import {connect} from 'react-redux';
import CustomToolbar from '../components/CustomToolbar';
import SugarStatistics from '../components/SugarStatistics';

class HomePage extends React.Component {
    render() {
        return (
            <div className={"container-fluid"} style={{padding: 0}}>
                <CustomToolbar/>
                <SugarStatistics/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(HomePage);