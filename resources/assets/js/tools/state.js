import React from 'react';
import {connect} from 'react-redux';

export const style = {
    border: "1px solid black"
};

class State extends React.Component {
    renderProps() {
        let listItems = [];
        let items = JSON.stringify(this.props);

        items = items.slice(1, -1);
        items = items.split(",");

        if (items.length == 0) {
            return null;
        }

        for (let key in items) {
            let pair = items[key].split(":");
            listItems[key] = <tr key={key}>
                <td style={{padding: 5}}><b>{pair[0]}:</b></td>
                <td style={{padding: 5}}>{pair[1]}</td>
            </tr>;
        }

        return (
            <table style={style}>
                <thead>
                <tr>
                    <th>Key</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                {listItems}
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <div style={{width: 300, maxHeight:500,overflowY:"scroll", position: "fixed", bottom: 5, left: 5}}>
                {this.renderProps()}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(State);