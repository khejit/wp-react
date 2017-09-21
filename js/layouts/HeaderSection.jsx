import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store.jsx';
import Icon from '../components/Icon.jsx';
import HamBtn from '../components/HamBtn.jsx';

class HeaderSection extends Component {
    constructor(props){
        super(props);

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        store.dispatch({
            type: 'TOGGLE_MENU'
        })
    }

    render(){
        return (
            <section className="section header">
                <div className="btn-container">
                    <HamBtn clickHandler={this.toggleMenu} classList={this.props.menuOpen ? ' open' : ''} />
                </div>
                <div className="logo-container">
                    <h3 className="logo">PHTWR</h3>
                </div>
                <div className="btn-container search-container">
                    <Icon type="magnifier" className="magnifier" />
                </div>
            </section>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        menuOpen: store.menuState.menuOpen
    }
};

export default connect(mapStateToProps)(HeaderSection);