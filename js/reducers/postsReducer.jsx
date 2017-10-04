import * as constants from '../constants.jsx';

const defaultState = {
    posts: [],
    filteredPosts: [],
    activePost: null,
    activeTarget: null
};

export default (state=defaultState, payload={}) => {
    switch (payload.type){
        case constants.SET_POSTS:
            return Object.assign({}, state, {
                posts: payload.posts,
                filteredPosts: payload.posts
            });
        case constants.FILTER_POSTS:
            if(payload.postsFilter){
                let filteredPosts = state.posts.filter(post => {
                    return post.heading.toLowerCase().includes(payload.postsFilter.toLowerCase())
                });
                return Object.assign({}, state, {
                    filteredPosts: filteredPosts
                })
            } else {
                return Object.assign({}, state, {
                    filteredPosts: state.posts
                });
            }
        case constants.SET_ACTIVE_POST:
            return Object.assign({}, state, {
                activePost: payload.activePost,
                activeTarget: payload.activeTarget
            });
    }

    return state;
}