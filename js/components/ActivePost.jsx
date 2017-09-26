import React from 'react';
import Tag from './Tag.jsx';

const ActivePost = (props) => {
    let {heading, desc, imageUrl} = props,
        style = {
            backgroundImage: `url(${imageUrl})`
        };

    let tags = props.tags ?
        props.tags.slice(0, 2).map(tag =>
            <Tag key={tag.id} name={tag.name} />
        )
        : '';

    return (
        <div className="post active-post">
            <div style={style} className="post__image"></div>
            <div className="inner-overlay post__overlay"></div>
            <div className="post__content">
                <div className="tags post__tags">
                    {tags}
                </div>
                <h2 className="post__heading">{heading}</h2>
                <p className="post__description">{desc}</p>
            </div>
        </div>
    )
};

export default ActivePost;