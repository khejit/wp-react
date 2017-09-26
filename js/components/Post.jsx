import React, {Component} from 'react';
import Tag from './Tag.jsx';
import * as stateHelpers from '../helpers/stateHelpers.jsx';

export default class Post extends Component {
    constructor(props){
        super(props);

        this.clickHandle = this.clickHandle.bind(this);

        this.state = {
            classArray: [],
            tags: []
        }
    }

    componentDidMount(){
        this.getOwnTags();
    }

    clickHandle(){
        this.props.onClick()
    }

    getOwnTags(){
        let tags = stateHelpers.getTagsFromTagsIds(this.props.tagsIds);

        this.setState({
            tags: tags
        })
    }

    classList(){
        return ' ' + this.state.classArray.join(' ')
    }

    render(){
        let tags = this.state.tags ?
            this.state.tags.slice(0, 2).map(tag =>
                <Tag key={tag.id} name={tag.name} />
            )
            : '';

        let style = {
            backgroundImage: `url(${this.props.imageUrl})`
        };

        return (
            <div className="post posts__post" onClick={this.clickHandle}>
                <div style={style} className="post__image"></div>
                <div className="inner-overlay post__overlay"></div>
                <div className="post__content">
                    <div className="tags post__tags">
                        {tags}
                    </div>
                    <h2 className="post__heading">{this.props.heading}</h2>
                    <p className="post__description">{this.props.shortDesc}</p>
                </div>
            </div>
        )
    }
}