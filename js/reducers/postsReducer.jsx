const defaultState = {
    posts: []
};

export default (state=defaultState, payload={}) => {
    switch (payload.type){
        case 'GET_POSTS':
            return Object.assign({}, state, {
                posts: payload.posts
            });
    }

    return state;
}