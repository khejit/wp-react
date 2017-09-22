import React from 'react';
import Tag from './Tag.jsx';

const Post = (props) => {
    let tags = props.idTags.slice(0, 2).map(id => {
        return <Tag key={id} id={id} />;
    });

    let style = {
        backgroundImage: `url(${props.imageUrl})`
    };

    return (
        <div className="post posts__post" style={style}>
            <div className="inner-overlay"></div>
            <div className="post__content">
                <div className="tags post__tags">
                    {tags}
                </div>
                <h2 className="post__heading">{props.heading}</h2>
                <p className="post__description">{props.shortDesc}</p>
            </div>
        </div>
    )
};

export default Post;