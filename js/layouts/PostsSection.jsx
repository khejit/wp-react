import React, {Component} from 'react';
import {connect} from 'react-redux';
require('es6-promise').polyfill();
import axios from 'axios';
import store from '../store.jsx';
import Post from '../components/Post.jsx';
import * as constants from '../constants.jsx';

class PostsSection extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        let posts = axios.get(constants.postsRoute)
            .then(response => {
                return response.data.map(post => {
                    return {
                        id: post.id,
                        heading: post.title.rendered,
                        shortDesc: post.acf.short_desc,
                        imageUrl: post.acf.photo,
                        tags: post.tags
                    }
                });
            })
            .then(posts => {
                store.dispatch({
                    type: 'SET_POSTS',
                    posts
                })
            });
    }

    render() {
        let posts = this.props.posts.map(post => {
            return (
                <Post
                    key={post.id}
                    heading={post.heading}
                    imageUrl={post.imageUrl}
                    idTags={post.tags}
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