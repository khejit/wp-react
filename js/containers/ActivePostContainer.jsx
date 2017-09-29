import React, {Component} from 'react';
import ActivePost from '../components/ActivePost.jsx';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as stateHelpers from '../helpers/stateHelpers.jsx';

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
        });
    }

    componentDidMount(){
        this.props.sendRefs(this.container, this.activePost)
    }

    render(){
        let {heading, desc, tags, imageUrl} = this.state;
        let contStyles = {
            height: this.props.height
        },
        postStyles = {
            top: this.props.top
        },
        classes = this.props.classes ? ' ' + classNames(this.props.classes) : '';

        return (
            <section ref={el=>{this.container = el}} className={`section active-post-container${classes}`} style={contStyles}>
                <ActivePost sendRef={(ref)=>{this.activePost = ref}} style={postStyles} heading={heading} desc={desc} tags={tags} imageUrl={imageUrl} />
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