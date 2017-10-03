import React, {Component} from 'react';
import Tag from './Tag.jsx';

class ActivePost extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.sendRefs(this.thisElement, this.imageRef)
    }

    render(){
        let {heading, shortDesc, desc, imageUrl} = this.props,
            style = {
                backgroundImage: `url(${imageUrl})`
            };

        let tags = this.props.tags ?
            this.props.tags.slice(0, 2).map(tag =>
                <Tag key={tag.id} name={tag.name} />
            )
            : '';

        return (
            <div ref={(el)=>{this.thisElement = el}} style={this.props.style} className="post active-post active-post-container__post">
                <div ref={(el)=>{this.imageRef = el}} style={style} className="post__image"></div>
                <div className="inner-overlay post__overlay"></div>
                <div className="post__content">
                    <div className="tags post__tags">
                        {tags}
                    </div>
                    <h2 className="post__heading">{heading}</h2>
                    <p className="post__description">{shortDesc}</p>
                </div>
                <p className="active__body" id="active-body">{desc}</p>
            </div>
        )
    }
}

export default ActivePost;