import React from 'react'
import {connect} from 'react-redux'
import _ from "lodash";
import CustomCard from '../../presentation/CustomCard'
import {findAllByUser} from '../../actions/Post'


class PostList extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.state.post_text = "";
    }

    componentDidMount() {
        this.props.findAllByUser();
    }

    render() {
        const {posts} = this.props;
        let ul = [];

        _.each(posts, (post, idx) => {
            ul.push(
                <CustomCard logId={post.id}
                            text={post.content}
                            key={idx}
                            subTitle={post.created_at}/>
            );
        });

        return ul;
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {findAllByUser})(PostList);