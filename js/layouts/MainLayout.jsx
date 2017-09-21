import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from '../components/Icon.jsx';
import HamBtn from '../components/HamBtn.jsx';

export default class MainLayout extends Component {
    constructor(props){
        super(props);

        this.state = {
            menuOpen: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        this.setState(
            prevState => ({
                menuOpen: !prevState.menuOpen
            })
        )
    }

    render(){
        return (
            <div>
                <section className="section header">
                    <div className="btn-container">
                        <HamBtn clickHandler={this.toggleMenu} classList={this.state.menuOpen ? ' open' : ''} />
                    </div>
                    <div className="logo-container">
                        <h3 className="logo">PHTWR</h3>
                    </div>
                    <div className="btn-container search-container">
                        <Icon type="magnifier" className="magnifier" />
                    </div>
                </section>
                <section className="section posts">
                    <div className="post posts__post">
                        <div className="post__content">
                            <div className="tags post__tags">
                                <div className="tags__tag tag">Nature</div>
                                <div className="tags__tag tag">Urban</div>
                            </div>
                            <h3 className="post__heading">Honeypot</h3>
                            <p className="post__description">Proin lacinia congue mi hendrerit sagittis. Nam tincidunt felis non est malesuada ultricies.</p>
                        </div>
                    </div>
                </section>
                <section className="section footer">

                </section>
            </div>
        )
    }
}

MainLayout.propTypes = {
    menuOpen: PropTypes.bool
};