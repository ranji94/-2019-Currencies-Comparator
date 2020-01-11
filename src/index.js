import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './ServerData/store'
import { Provider } from 'react-redux'
import './index.css';
import * as serviceWorker from './serviceWorker';
import {MainContainer} from "./Main/main-container";

ReactDOM.render(
    <Provider store={store}>
    <MainContainer/>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
