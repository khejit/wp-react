import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataRoute: 'http://wp-react.local/backend/wp-json/acf/v2/post/1',
            menusRoute: 'http://wp-react.local/backend/wp-json/wp-api-menus/v2/menus',
            post: {
                img: ''
            }
        }
    }

    componentDidMount(){
        fetch(this.state.dataRoute)
            .then(res => res.json())
            .then(json => this.setState((prevState, props)=>{
                return {
                    post: json.acf
                }
            }))
    }

    render() {
        let img = this.state.post.image;

        return (
            <div className="image">
                {img && <img src={img} />}
            </div>
        );
    }
}
