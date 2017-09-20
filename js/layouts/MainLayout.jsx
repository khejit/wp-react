import React, {Component} from 'react';

export default class MainLayout extends Component {
    render(){
        return (
            <section className="l-section header">
                <div className="btn-container">
                    <div className="ham-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="logo-container">
                    <h3 className="logo">PHTWR</h3>
                </div>
                <div className="btn-container">

                </div>
            </section>
        )
    }
}