import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeaderSection from './HeaderSection.jsx';
import Menu from './Menu.jsx';
import PostsAnimationContainer from './PostsAnimationContainer.jsx';

class MainLayout extends Component {
    render(){
        return (
            <div className={`frame${this.props.menuOpen?' frame--menu-open':''}`}>
                <div className="frame__content">
                    <HeaderSection />
                    <Menu />
                    <PostsAnimationContainer />
                    <section className="section footer">
                        <ul className="footer__links links">
                            <li className="links__link">
                                <a href="#">About me</a>
                            </li>
                            <li className="links__link">
                                <a href="#">My github</a>
                            </li>
                            <li className="links__link">
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        menuOpen: store.menuState.menuOpen
    }
};

export default connect(mapStateToProps)(MainLayout);