import React from 'react'
import Post from './Post';

/**
 * In order to remove event listener onScroll
 * document.removeEventListener('scroll', this.onScroll);
 *
 * Scroll event for loading more post like facebook
 * document.addEventListener('scroll', this.onScroll);
 */
class PostList extends React.Component {
    render() {
        let list      = [];
        const {posts} = this.props;

        if(posts === undefined) {
            return null;
        }

        _.each(posts, (post) => {
            list.unshift(
                <Post key={post.id} {...post}/>
            );
        });

        return list;
    }
}

export default PostList;