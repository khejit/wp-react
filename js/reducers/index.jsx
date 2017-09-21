import {combineReducers} from 'redux';
import menuReducer from './menuReducer.jsx';

let reducers = combineReducers({
    menuState: menuReducer
});

export default reducers;