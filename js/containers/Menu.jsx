import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class Menu extends Component {
    constructor(props){
        super(props);

        this.state = {
            classArray: [],
            items: [
                {
                    id: 1,
                    name: 'About'
                },
                {
                    id: 2,
                    name: 'Github'
                },
                {
                    id: 3,
                    name: 'Contact'
                }
            ]
        }
    }

    componentWillReceiveProps(nextProps){
        let _this = this;

        //setTimeout(()=>{
        window.requestAnimationFrame(()=>{
            if(nextProps.menuOpen){
                _this.setState({
                    classArray: [
                        'menu--visible'
                    ]
                })
            } else {
                _this.setState({
                    classArray: []
                })
            }
        })
        //}, 1)
    }

    componentDidMount(){

    }

    render(){
        let items = this.state.items.map((item)=>{
            return (
                <div className="menu__item" key={item.id}>
                    <a href="#" className="h1 menu-item__link">
                        {item.name}
                    </a>
                </div>
            )
        });

        let classes = classNames(this.state.classArray) ? ' ' + classNames(this.state.classArray) : '';

        return (
            <ReactCSSTransitionGroup
                transitionName="menu"
                transitionEnterTimeout={350}
                transitionLeaveTimeout={350} >
                {this.props.menuOpen && (
                    <section className={'menu'+classes} key={1}>
                        <div className="menu__items">
                            {items}
                        </div>
                    </section>
                )}
            </ReactCSSTransitionGroup>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        menuOpen: store.menuState.menuOpen
    }
};

export default connect(mapStateToProps)(Menu);