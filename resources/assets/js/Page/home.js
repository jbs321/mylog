import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div className={"container"}>
                <Link to={'/log'}>Log Page</Link>
            </div>
        );
    }
}

export default HomePage;