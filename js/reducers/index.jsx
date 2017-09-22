import {combineReducers} from 'redux';
import menuReducer from './menuReducer.jsx';
import postsReducer from './postsReducer.jsx';

let reducers = combineReducers({
    menuState: menuReducer,
    postsState: postsReducer
});

export default reducers;