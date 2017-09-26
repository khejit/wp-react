import React, {Component} from 'react';
import Tag from './Tag.jsx';
import * as stateHelpers from '../helpers/stateHelpers.jsx';

export default class Post extends Component {
    constructor(props){
        super(props);

        this.toggleExpand = this.toggleExpand.bind(this);
        this.expand = this.expand.bind(this);
        this.fold = this.fold.bind(this);

        this.state = {
            expanded: false,
            classArray: [],
            tags: []
        }
    }

    componentDidMount(){
        this.getOwnTags();
    }

    getOwnTags(){
        let tags = this.props.tagsIds.map(tagId => {
            return {
                id: tagId,
                name: stateHelpers.getTagById(tagId).name
            }
        });

        this.setState({
            tags: tags
        })
    }

    classList(){
        return ' ' + this.state.classArray.join(' ')
    }

    toggleExpand(){
        if(this.state.expanded){
            this.fold()
        } else {
            this.expand()
        }
    }

    expand(){
        this.setState({
            expanded: true,
            classArray: ['expanded']
        })
    }

    fold(){
        this.setState({
            expanded: false,
            classArray: []
        })
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
            <div className={`post posts__post${this.classList()}`} onClick={this.toggleExpand}>
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