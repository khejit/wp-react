import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import store from '../store.jsx';
import classNames from 'classnames';
import Post from '../components/Post.jsx';
import * as ajax from '../helpers/ajax.jsx';

class PostsSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tagsRetrieved: false
        };

        this.setActivePost = this.setActivePost.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        ajax.getPosts();
        ajax.getTags()
            .then(
                this.setState({
                    tagsRetrieved: true
                })
            );

        this.thisElement = ReactDOM.findDOMNode(this);
    }

    handleClick(postId, el){
        this.setActivePost(postId, el);

        let data = {
            top: el.offsetTop,
            height: this.thisElement.offsetHeight
        };
        this.props.sendData(data);
    };

    setActivePost(id, target){
        store.dispatch({
            type: 'SET_ACTIVE_POST',
            activePost: id,
            activeTarget: target
        });

        store.dispatch({
            type: 'SET_ACTIVE_VISIBLE'
        })
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
                    onClick={this.handleClick.bind(null, post.id)}
                    shouldUpdateTags={this.state.tagsRetrieved}
                />
            )
        }),
        classes = this.props.classes ? ' ' + classNames(this.props.classes) : '';

        return (
            <section className={`section posts${classes}`} id="posts-section">
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