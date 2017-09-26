import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from '../components/Post.jsx';
import * as ajax from '../helpers/ajax.jsx';

class PostsSection extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        ajax.getPosts();
        ajax.getTags();
    }

    render() {
        let posts = this.props.posts.map(post => {
            return (
                <Post
                    key={post.id}
                    heading={post.heading}
                    imageUrl={post.imageUrl}
                    tagsIds={post.tagsIds}
                    shortDesc={post.shortDesc}
                />
            )
        });

        return (
            <section className="section posts">
                {posts}
            </section>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        posts: store.postsState.filteredPosts
    }
};

export default connect(mapStateToProps)(PostsSection);