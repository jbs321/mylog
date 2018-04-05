import React from 'react';
import {connect} from 'react-redux';
import {fetchUserDetails} from '../actions/User';
import {fetchAuth} from '../actions/Auth';
import {fetchSugarChart} from '../actions/Sugar';
import CustomToolbar from "../components/CustomToolbar";
import axios from "axios/index";
import LineChart from '../chartjs/line';


export const BG_SRC = "https://www.ibm.com/blogs/business-analytics/wp-content/uploads/2017/02/data-analytics-too-much-data.jpg";


class HomePage extends React.Component {
    componentDidMount() {
        this.props.fetchUserDetails();
        this.props.fetchAuth((authToken) => {
            //set token globally
            axios.defaults.headers.common['Authorization'] = authToken;
        });

        this.props.fetchSugarChart();

    }

    render() {
        let {sugar} = this.props;

        sugar = sugar.slice(0, 10);

        let data = sugar.map(log => {
            return log.sugarLevel;
        });

        let labels = sugar.map(log => {
            return log.created_at.substr(0, 10);
        });

        console.log(data, labels);

        return (
            <div className={"container-fluid"} style={{width: "100%", padding: 0, margin: 0}}>
                <section>
                    <CustomToolbar/>
                </section>

                <section>
                    <LineChart
                        labels={labels}
                        data={data}
                        label={"Sugar Levels"}/>
                </section>
            </div>
        );
    }
}

function mapStateToProps({sugar}) {
    return {sugar};
}

export default connect(mapStateToProps, {fetchUserDetails, fetchAuth, fetchSugarChart})(HomePage);