import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers/index.jsx';

const store = createStore(
    reducers, composeWithDevTools(
        applyMiddleware(promise(), thunk)
    )
);
export default store;
