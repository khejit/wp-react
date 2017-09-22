const defaultState = {
    posts: [],
    filteredPosts: []
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
                    return post.heading.includes(payload.postsFilter)
                });
                return Object.assign({}, state, {
                    filteredPosts: filteredPosts
                })
            } else {
                return Object.assign({}, state, {
                    filteredPosts: state.posts
                });
            }
    }

    return state;
}