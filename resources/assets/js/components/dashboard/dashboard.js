import React from 'react';
import DashboardController from './dashboard-controller';
import PostList from './post-list';

class Dashboard extends React.Component {
    render() {
        return (
            <div id={"dashboard-container"}
                 className={"col-xs-12 offset-md-1 col-md-10 offset-lg-3 col-lg-6"}
                 style={{padding: 10}}>
                <DashboardController/>
                <PostList/>
            </div>
        );
    }
}

export default Dashboard;