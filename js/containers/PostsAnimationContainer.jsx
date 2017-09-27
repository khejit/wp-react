import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostsSection from './PostsSection.jsx';
import ActivePostContainer from './ActivePostContainer.jsx';
//import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import styles from './postsAnimationContainer.scss';
import {TweenMax, Power2} from 'gsap';

let activePostAppearTime = 500,
    activePostLeaveTime = 200,
    postsSectionAppearTime = 200,
    postsSectionLeaveTime = 500;

class PostsAnimationContainer extends Component {
    constructor(props){
        super(props);

        this.getPostsSectionHeight = this.getPostsSectionHeight.bind(this);
        this.animateToActivePost = this.animateToActivePost.bind(this);

        this.state = {
            activePostHeight: 'auto'
        }
    }

    componentDidMount(){

    }

    componentWillReceiveProps(nextProps){
        if(!this.props.activeVisible && nextProps.activeVisible){
            this.animateToActivePost()
        }
    }

    animateToActivePost(){

    }

    getPostsSectionHeight(height){
        this.setState({
            activePostHeight: height
        })
    }

    render(){
        return (
            <div className={'animation-container '+styles.postsAnimationContainer}>
                <ActivePostContainer height={this.state.activePostHeight} />
                <PostsSection sendHeight={this.getPostsSectionHeight} />
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        activeVisible: store.postsState.activePostVisible
    }
};

export default connect(mapStateToProps)(PostsAnimationContainer);