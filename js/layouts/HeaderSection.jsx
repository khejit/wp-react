import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import store from '../store.jsx';
import Icon from '../components/Icon.jsx';
import HamBtn from '../components/HamBtn.jsx';

class HeaderSection extends Component {
    constructor(props){
        super(props);

        this.state = {
            classList: '',
            searchVisible: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
        this.filterPosts = this.filterPosts.bind(this);
    }

    toggleMenu(){
        store.dispatch({
            type: 'TOGGLE_MENU'
        })
    }

    toggleSearch(){
        if(this.state.searchVisible){
            this.setState({
                searchVisible: false,
                classList: ''
            })
        } else {
            this.setState({
                searchVisible: true,
                classList: ' search-visible'
            })
        }
    }

    filterPosts(e){
        let filterValue = e.target.value,
            debounced = _.debounce(function(){
                (function(){
                    store.dispatch({
                        type: 'FILTER_POSTS',
                        postsFilter: filterValue
                    })
                })()
            }, 1500);

        debounced();
    }

    render(){
        return (
            <section className={`section header${this.state.classList}`}>
                <div className="btn-container">
                    <HamBtn clickHandler={this.toggleMenu} classList={this.props.menuOpen ? ' open' : ''} />
                </div>
                <div className="logo-container search-container">
                    <h3 className="logo">PHTWR</h3>
                    {this.state.searchVisible && <input type="text" className="search-container__search-input" onChange={this.filterPosts} />}
                </div>
                <div className="btn-container search-btn-container" onClick={this.toggleSearch}>
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