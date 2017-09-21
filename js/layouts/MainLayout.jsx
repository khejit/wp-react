import React, {Component} from 'react';
import HeaderSection from './HeaderSection.jsx';

export default class MainLayout extends Component {
    render(){
        return (
            <div>
                <HeaderSection />
                <section className="section posts">
                    <div className="post posts__post">
                        <div className="post__content">
                            <div className="tags post__tags">
                                <div className="tags__tag tag">Nature</div>
                                <div className="tags__tag tag">Urban</div>
                            </div>
                            <h2 className="post__heading">Honeypot</h2>
                            <p className="post__description">Proin lacinia congue mi hendrerit sagittis. Nam tincidunt felis non est malesuada ultricies.</p>
                        </div>
                    </div>
                </section>
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