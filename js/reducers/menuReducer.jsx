const defaultState = {
    menuOpen: false
};

export default (state=defaultState, payload={}) => {
    switch (payload.type){
        case 'TOGGLE_MENU':
            return Object.assign({}, state, {menuOpen: !state.menuOpen})
    }

    return state;
}