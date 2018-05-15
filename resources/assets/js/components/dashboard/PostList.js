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
        const {list} = this.props;
        return list.map((post) => {
            return <Post postId={post.id}
                         content={post.content}
                         key={post.id}
                         subTitle={post.updated_at}/>
        });
    }
}

export default PostList;