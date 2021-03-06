import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import App from './containers/App';
import {Provider} from 'react-redux'; 
import {createStore, applyMiddleware, combineReducers} from 'redux';
import './index.css';
import thunkMiddleWare from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare ,logger));

ReactDOM.render(
                                <Provider  store = {store}>
                                    <App/>,
                                </Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
