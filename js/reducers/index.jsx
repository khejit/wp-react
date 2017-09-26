import {combineReducers} from 'redux';
import menuReducer from './menuReducer.jsx';
import postsReducer from './postsReducer.jsx';
import tagsReducer from './tagsReducer.jsx';

let reducers = combineReducers({
    menuState: menuReducer,
    postsState: postsReducer,
    tagsState: tagsReducer
});

export default reducers;