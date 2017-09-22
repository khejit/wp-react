import React from 'react';

const HamBtn = (props) => {
    let classList = `ham-btn${props.classList}`;

    return (
        <div className={classList} onClick={props.clickHandler}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
};

export default HamBtn;