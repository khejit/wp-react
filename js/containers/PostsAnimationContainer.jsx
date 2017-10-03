import React, {Component} from 'react';
import {connect} from 'react-redux';
import autobind from 'react-autobind';
import PostsSection from './PostsSection.jsx';
import ActivePostContainer from './ActivePostContainer.jsx';
//import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import styles from './postsAnimationContainer.scss';
import {Power2, TimelineLite} from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

const activePostAppearTime = 0.5,
    activePostLeaveTime = 0.2,
    postsSectionAppearTime = 0.4,
    postsSectionLeaveTime = 0.2;

class PostsAnimationContainer extends Component {
    constructor(props){
        super(props);

        autobind(this); // bind all methods which are not react-specific

        this.state = {
            activeContHeight: 'auto',
            activePostTop: 'auto',
            normalPostHeight: 'auto',
            activePostContClasses: {},
            postsSectionClasses: {},
            activePostContainerRef: null,
            activePostRef: null,
            activePostImgRef: null,
            postsSectionRef: null
        }
    }

    componentDidMount(){

    }

    componentWillReceiveProps(nextProps){
        if(!this.props.activeVisible && nextProps.activeVisible){

        }
    }

    postClicked(data){
        this.setState({
            activeContHeight: data.height,
            activePostTop: data.top,
            normalPostHeight: data.postHeight
        });

        this.animateToActivePost(data);
    }

    animateToActivePost(data){
        let activePost = this.state.activePostRef,
            activePostImg = this.state.activePostImgRef,
            activePostCont = this.state.activePostContainerRef,
            postsSect = this.state.postsSectionRef;

        let tl = new TimelineLite();

        tl.set(activePost, {
            top: data.top
        })
            .set(activePostCont, {
                height: data.height,
                opacity: 1
            })
            .addLabel('firstStep')
            .add(TweenMax.to(window, 0.2, {
                scrollTo: 0
            }))
            .to(activePost, activePostAppearTime, {
                top: 0,
                ease: Power2.easeOut
            }, 'firstStep')
            .to(postsSect, postsSectionLeaveTime, {
                opacity: 0
            }, 'firstStep')
            /*.to(postsSect, activePostAppearTime, {
                height: data.postHeight
            }, 'firstStep')*/
            .addLabel('secondStep')
            .to(activePost, 0.3, {
                //height: data.height,
                className: '+=active'
            }, 'secondStep')
            .to(activePostImg, 0.15, {
                height: '32rem'
            }, 'secondStep')
            .to(activePostCont, 0.15, {
                height: data.height
            }, 'secondStep')
    }

    receiveActiveContRefs(containerRef, activePostRef, activePostImgRef){
        this.setState({
            activePostContainerRef: containerRef,
            activePostRef: activePostRef,
            activePostImgRef: activePostImgRef
        })
    }

    receivePostsSectRef(postsSectionRef){
        this.setState({
            postsSectionRef
        })
    }

    render(){
        return (
            <div className={'animation-container '+styles.postsAnimationContainer} ref={el=>this.thisElem = el}>
                <ActivePostContainer classes={this.state.activePostContClasses} sendRefs={this.receiveActiveContRefs} />
                <PostsSection classes={this.state.postsSectionClasses} postClicked={this.postClicked} sendRefs={this.receivePostsSectRef} />
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