import React, {Component} from 'react';
import Tag from './Tag.jsx';

export default class Post extends Component {
    constructor(props){
        super(props);

        this.toggleExpand = this.toggleExpand.bind(this);
        this.expand = this.expand.bind(this);
        this.fold = this.fold.bind(this);

        this.state = {
            expanded: false,
            classList: ''
        }
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
            classList: ' expanded'
        })
    }

    fold(){
        this.setState({
            expanded: false,
            classList: ''
        })
    }

    render(){
        let tags = this.props.idTags.slice(0, 2).map(id => {
            return <Tag key={id} id={id} />;
        });

        let style = {
            backgroundImage: `url(${this.props.imageUrl})`
        };

        return (
            <div className={`post posts__post${this.state.classList}`} onClick={this.toggleExpand}>
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