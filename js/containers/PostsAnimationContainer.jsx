import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostsSection from './PostsSection.jsx';
import ActivePostContainer from './ActivePostContainer.jsx';
//import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import styles from './postsAnimationContainer.scss';
import {TweenMax, Power2, TimelineLite} from 'gsap';

let activePostAppearTime = 500,
    activePostLeaveTime = 200,
    postsSectionAppearTime = 200,
    postsSectionLeaveTime = 500;

class PostsAnimationContainer extends Component {
    constructor(props){
        super(props);

        this.getPostsData = this.getPostsData.bind(this);
        this.animateToActivePost = this.animateToActivePost.bind(this);
        this.receiveRefs = this.receiveRefs.bind(this);

        this.state = {
            activeContHeight: 'auto',
            activePostTop: 'auto',
            activePostClasses: {},
            postsSectionClasses: {},
            activePostContainerRef: null,
            activePostRef: null
        }
    }

    componentDidMount(){

    }

    componentWillReceiveProps(nextProps){
        if(!this.props.activeVisible && nextProps.activeVisible){

        }
    }

    animateToActivePost(top){
        this.setState({
            activePostClasses: 'activePost-enter'
        });

        let activePost = this.state.activePostRef;

        let tl = new TimelineLite();

        tl.set(activePost, {
            top: top
        }).to(activePost, 0.5, {
            top: 0,
            ease: Power2.easeInOut
        })
    }

    receiveRefs(container, activePost){
        this.setState({
            activePostContainerRef: container,
            activePostRef: activePost
        })
    }

    getPostsData(data){
        this.setState({
            activeContHeight: data.height,
            //activePostTop: data.top
        });

        /*console.log(data.top)*/

        this.animateToActivePost(data.top);
    }

    render(){
        return (
            <div className={'animation-container '+styles.postsAnimationContainer}>
                <ActivePostContainer classes={this.state.activePostClasses} sendRefs={this.receiveRefs} />
                <PostsSection classes={this.state.postsSectionClasses} sendData={this.getPostsData} />
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