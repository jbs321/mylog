import React from 'react'
import {connect} from 'react-redux'
import _ from "lodash";
import Post from './post';
import {findAllByUser, findNextPagination} from '../../actions/Post'

/**
 * In order to remove event listener onScroll
 * document.removeEventListener('scroll', this.onScroll);
 */
class PostList extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.state.post_text = "";

        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        this.props.findAllByUser();

        //Scroll event for loading more post like facebook
        document.addEventListener('scroll', this.onScroll);
    }

    render() {
        const {posts} = this.props;
        let ul = [];

        posts.forEach((pagination) => {
            _.each(pagination.data, (post, idx) => {
                ul.unshift(
                    <Post postId={post.id}
                          content={post.content}
                          key={post.id}
                          subTitle={post.updated_at}/>
                );
            });
        });


        return ul;
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    onScroll() {
        const {posts} = this.props;
        const wrappedElement = document.getElementById('dashboard-container');

        if (this.isBottom(wrappedElement)) {
            this.props.findNextPagination(posts[posts.length -1 ]);
        }
    };
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {findAllByUser, findNextPagination})(PostList);