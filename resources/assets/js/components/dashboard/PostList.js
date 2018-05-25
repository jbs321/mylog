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

        if(posts === undefined || posts.length === 0) {
            return null;
        }


        let iteration = Object.keys(posts).length;

        console.log("new iteration " + iteration);
        _.each(posts, (post) => {
            console.log(iteration);
            list.unshift(
                <Post key={post.id} {...post} animationDelay={`delay-${iteration}`}/>
            );


            iteration -= 1;
        });

        return list;
    }
}

export default PostList;