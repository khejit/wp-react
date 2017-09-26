const defaultState = {
    tags: []
};

export default (state=defaultState, payload={}) => {
    switch (payload.type){
        case 'SET_TAGS':
            return Object.assign({}, state, {
                tags: payload.tags
            });
    }

    return state;
}