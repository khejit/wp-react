import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import store from '../store.jsx';
import * as constants from '../constants.jsx';
import classNames from 'classnames';
import Icon from '../components/Icon.jsx';
import HamBtn from '../components/HamBtn.jsx';

function addElemToArr(arr, item){
    let newArr = arr;
    newArr.push(item);
    return newArr;
}

function removeElemFromArr(arr, item){
    return arr.filter((i)=>{return i !== item})
}

class HeaderSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classArray: [],
            searchVisible: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.backToPosts = this.backToPosts.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
        this.filterPosts = _.debounce(this.filterPosts.bind(this), 250);
    }

    toggleMenu() {
        store.dispatch({
            type: constants.TOGGLE_MENU
        })
    }

    backToPosts(){
        store.dispatch({
            type: constants.MENU_BACK_FALSE
        });
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.menuBackActive){
            this.setState({
                classArray: addElemToArr(this.state.classArray, 'header--back-active')
            })
        } else {
            this.setState({
                classArray: removeElemFromArr(this.state.classArray, 'header--back-active')
            })
        }
    }

    toggleSearch() {
        if (this.state.searchVisible) {
            this.setState({
                searchVisible: false,
                classArray: removeElemFromArr(this.state.classArray, 'header--search-visible')
            })
        } else {
            this.setState({
                searchVisible: true,
                classArray: addElemToArr(this.state.classArray, 'header--search-visible')
            })
        }
    }

    filterPosts() {
        let filterValue = this.inputRef.value;

        store.dispatch({
            type: 'FILTER_POSTS',
            postsFilter: filterValue
        })
    }

    render() {
        let classes = classNames(this.state.classArray) ?  ' ' + classNames(this.state.classArray) : '';

        return (
            <section className={`section header${classes}`}>
                <div className="btn-container back-btn-container" onClick={this.backToPosts}>
                    <Icon type="left-arrow" className="left-arrow"/>
                </div>
                <div className="btn-container menu-btn-container">
                    <HamBtn clickHandler={this.toggleMenu} classList={this.props.menuOpen ? ' open' : ''}/>
                </div>
                <div className="logo-container search-container">
                    <h3 className="logo">PHTWR</h3>
                    {this.state.searchVisible &&
                    <input type="text" className="search-container__search-input" ref={el => this.inputRef = el} onChange={this.filterPosts}/>}
                </div>
                <div className="btn-container search-btn-container" onClick={this.toggleSearch}>
                    <Icon type="magnifier" className="magnifier"/>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        menuOpen: store.menuState.menuOpen,
        menuBackActive: store.menuState.menuBackActive
    }
};

export default connect(mapStateToProps)(HeaderSection);