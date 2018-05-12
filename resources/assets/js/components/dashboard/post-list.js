import React from 'react'
import {connect} from 'react-redux'
import _ from "lodash";
import Post from './post';
import {findAllByUser} from '../../actions/Post'


class PostList extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.state.post_text = "";

        this.trackScrolling = this.trackScrolling.bind(this);
    }

    componentDidMount() {
        this.props.findAllByUser();

        //Scroll event for loading more post like facebook
        document.addEventListener('scroll', this.trackScrolling);
    }

    render() {
        const {posts} = this.props;
        let ul = [];

        _.each(posts, (post, idx) => {
            ul.unshift(
                <Post postId={post.id}
                      content={post.content}
                      key={idx}
                      subTitle={post.updated_at}/>
            );
        });

        return ul;
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    trackScrolling() {
        const wrappedElement = document.getElementById('dashboard-container');

        if (this.isBottom(wrappedElement)) {
            console.log('load next 5');
            document.removeEventListener('scroll', this.trackScrolling);
        }
    };
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {findAllByUser})(PostList);