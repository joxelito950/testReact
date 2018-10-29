import React, {Component} from 'react';
import {Router, IndexRoute, Route, browserHistory, hashHistory} from 'react-router';
import {Provider, connect} from 'react-redux';

import {login, logOut} from '../../actions';

import store from '../../core/Store';
import routers from './routerMap';
import {RequireAuthComponent} from '../../RequireAuthComponent';

class AppRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Router history={hashHistory}>
      {
        routers.map(item => <Route key={item.key} path={item.path} component={item.key === "session"
            ? item.component
            : RequireAuthComponent(item.component, item.key)}/>)
      }
    </Router>);
  }
}

function mapStateToProps(state) {
  return {directives: state.login.directives};
}

export default connect(mapStateToProps, {login})(AppRouter);
