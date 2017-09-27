import React, {Component} from 'react';
import ActivePost from '../components/ActivePost.jsx';
import {connect} from 'react-redux';
import * as stateHelpers from '../helpers/stateHelpers.jsx';
import store from '../store.jsx';

class ActivePostContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            heading: '',
            desc: '',
            tags: [],
            imageUrl: ''
        }
    }

    componentWillReceiveProps(nextProps){
        let post = stateHelpers.getPostById(nextProps.postId);

        this.setState({
            heading: post.heading,
            desc: post.shortDesc,
            tags: stateHelpers.getTagsFromTagsIds(post.tagsIds),
            imageUrl: post.imageUrl
        })
    }

    render(){
        let {heading, desc, tags, imageUrl} = this.state;

        return (
            <section className="section active-post-container">
                <ActivePost heading={heading} desc={desc} tags={tags} imageUrl={imageUrl} />
            </section>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        postId: store.postsState.activePost
    }
};

export default connect(mapStateToProps)(ActivePostContainer);