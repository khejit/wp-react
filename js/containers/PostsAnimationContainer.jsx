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
            activePostContClasses: {},
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

    animateToActivePost(data){

        let activePost = this.state.activePostRef,
            activePostCont = this.state.activePostContainerRef,
            postsSect = document.getElementById('posts-section'),
            animCon = this.thisElem;

        let tl = new TimelineLite();

        tl.set(activePost, {
            top: data.top
        })
            .set(activePostCont, {
                height: data.height
            })
            .addLabel('testLabel')
            .to(activePost, 0.5, {
                top: 0,
                ease: Power2.easeInOut
            }, 'testLabel')
            .to(postsSect, 0.5, {
                opacity: 0
            }, 'testLabel')
            .addLabel('testLabel2')
            .to(postsSect, 0.5, {
                height: '24rem'
            }, 'testLabel')
            .to(activePostCont, 0.5, {
                height: '24rem'
            }, 'testLabel')
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

        this.animateToActivePost(data);
    }

    render(){
        return (
            <div className={'animation-container '+styles.postsAnimationContainer} ref={el=>this.thisElem = el}>
                <ActivePostContainer classes={this.state.activePostContClasses} sendRefs={this.receiveRefs} />
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