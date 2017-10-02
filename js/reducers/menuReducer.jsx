import * as constants from '../constants.jsx';

const defaultState = {
    menuOpen: false
};

export default (state=defaultState, payload={}) => {
    switch (payload.type){
        case constants.TOGGLE_MENU:
            return Object.assign({}, state, {menuOpen: !state.menuOpen})
    }

    return state;
}