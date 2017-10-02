import * as constants from '../constants.jsx';

const defaultState = {
    tags: []
};

export default (state=defaultState, payload={}) => {
    switch (payload.type){
        case constants.SET_TAGS:
            return Object.assign({}, state, {
                tags: payload.tags
            });
    }

    return state;
}