import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import localStorageMiddleware from './LocalStorage';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

const localStorage = localStorageMiddleware();
const routers = routerMiddleware(hashHistory);
const store = createStore(reducers, composeWithDevTools(
 applyMiddleware(thunk, localStorage, routers)
));

export default store;
