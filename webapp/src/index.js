import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.eot';
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.svg';
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf';
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff';
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {LOCAL_STORAGE_LOAD} from './actions';
import store from './core/Store';
import '../src/css/spirit.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import {default as swal} from 'sweetalert2';
import Moment from 'moment';
import AppRouter from './components/appRouter/appRouter';

store.dispatch({type: LOCAL_STORAGE_LOAD});

ReactDOM.render(<Provider store={store}>
  <AppRouter/></Provider>, app);
