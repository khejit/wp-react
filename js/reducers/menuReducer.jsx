import * as constants from '../constants.jsx';

const defaultState = {
    menuOpen: false,
    menuBackActive: false
};

export default (state=defaultState, payload={}) => {
    switch (payload.type){
        case constants.TOGGLE_MENU:
            return Object.assign({}, state, {menuOpen: !state.menuOpen});
        case constants.MENU_BACK_TRUE:
            return Object.assign({}, state, {menuBackActive: true});
        case constants.MENU_BACK_FALSE:
            return Object.assign({}, state, {menuBackActive: false});
    }

    return state;
}