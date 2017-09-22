import React, {Component} from 'react';
import HeaderSection from './HeaderSection.jsx';
import PostsSection from './PostsSection.jsx';

export default class MainLayout extends Component {
    render(){
        return (
            <div>
                <HeaderSection />
                <PostsSection />
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
        )
    }
}