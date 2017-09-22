import React, {Component} from 'react';
require('es6-promise').polyfill();
import axios from 'axios';
import * as constants from '../constants.jsx';

class Tag extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "..."
        }
    }

    componentDidMount() {
        /*axios.get(constants.tagsRoute + '/' + this.props.id)
            .then(response => {
                this.setState({
                    name: response.data.name
                })
            })*/
    }

    render() {
        return (
            <div className="tags__tag tag">{this.state.name}</div>
        )
    }
}

export default Tag;