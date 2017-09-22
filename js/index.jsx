import React from 'react';
import ReactDOM from 'react-dom';
require('babel-polyfill');
import { Provider } from 'react-redux';
import store from './store.jsx';
//import App from './App.jsx';
import MainLayout from './layouts/MainLayout.jsx';

ReactDOM.render(
    <Provider store={store}>
        <MainLayout />
    </Provider>,
    document.getElementById('root')
);
