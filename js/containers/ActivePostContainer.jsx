import React, {Component} from 'react';
import ActivePost from '../components/ActivePost.jsx';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as stateHelpers from '../helpers/stateHelpers.jsx';

class ActivePostContainer extends Component {
    constructor(props){
        super(props);

        this.getRefs = this.getRefs.bind(this);

        this.state = {
            heading: '',
            shortDesc: '',
            desc: '',
            tags: [],
            imageUrl: ''
        }
    }

    componentWillReceiveProps(nextProps){
        let post = stateHelpers.getPostById(nextProps.postId);

        this.setState({
            heading: post.heading,
            shortDesc: post.shortDesc,
            desc: post.desc,
            tags: stateHelpers.getTagsFromTagsIds(post.tagsIds),
            imageUrl: post.imageUrl
        });
    }

    componentDidMount(){
        this.props.sendRefs(this.container, this.activePost, this.activePostImg)
    }

    getRefs(activePost, activePostImg){
        this.activePost = activePost;
        this.activePostImg = activePostImg;
    }

    render(){
        let {heading, shortDesc, desc, tags, imageUrl} = this.state;
        let contStyles = {
            height: this.props.height
        },
        postStyles = {
            top: this.props.top
        },
        classes = this.props.classes ? ' ' + classNames(this.props.classes) : '';

        return (
            <section ref={el=>{this.container = el}} className={`section active-post-container${classes}`} style={contStyles}>
                <ActivePost sendRefs={this.getRefs} style={postStyles} heading={heading} shortDesc={shortDesc} desc={desc} tags={tags} imageUrl={imageUrl} />
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