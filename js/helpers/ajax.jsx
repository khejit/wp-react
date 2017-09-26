require('es6-promise').polyfill();
import axios from 'axios';
import store from '../store.jsx';
import * as constants from '../constants.jsx';

export function getPosts(){
    return axios.get(constants.postsRoute)
        .then(response => {
            return response.data.map(post => {
                return {
                    id: post.id,
                    heading: post.title.rendered,
                    shortDesc: post.acf.short_desc,
                    imageUrl: post.acf.photo,
                    tagsIds: post.tags
                }
            });
        })
        .then(posts => {
            store.dispatch({
                type: 'SET_POSTS',
                posts
            })
        })
}

export function getTags(){
    return axios.get(constants.tagsRoute)
        .then(response => {
            return response.data;
        })
        .then(tags => {
            store.dispatch({
                type: 'SET_TAGS',
                tags
            })
        })
}