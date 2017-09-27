const defaultState = {
    posts: [],
    filteredPosts: [],
    activePost: null,
    activeTarget: null,
    activePostVisible: false
};

export default (state=defaultState, payload={}) => {
    switch (payload.type){
        case 'SET_POSTS':
            return Object.assign({}, state, {
                posts: payload.posts,
                filteredPosts: payload.posts
            });
        case 'FILTER_POSTS':
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
        case 'SET_ACTIVE_POST':
            return Object.assign({}, state, {
                activePost: payload.activePost,
                activeTarget: payload.activeTarget
            });
        case 'SET_ACTIVE_VISIBLE':
            return Object.assign({}, state, {
                activePostVisible: true
            })
    }

    return state;
}