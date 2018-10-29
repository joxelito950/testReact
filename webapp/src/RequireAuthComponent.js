import React from 'react';
import {connect} from 'react-redux';
import {replace} from 'react-router-redux';
import Template from './components/template';

export function RequireAuthComponent(Component, Key) {
  class AuthenticatedComponent extends React.Component {

    componentWillMount() {
      this.checkAuth();
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth();
    }

    checkAuth() {
      if (!this.props.isAuthenticated) {
        this.props.dispatch(replace(`/session`));
      }
    }

    render() {
      const comp = this.props.directives.includes(Key) || ["base", "session"].includes(Key) ? (<div>
        <Template>
          <Component {...this.props}/>
        </Template>
      </div>) : (<a/>);

      return (comp);
    }
  }

  const mapStateToProps = state => ({
    token: state.login.token,
    userName: state.login.fullName,
    isAuthenticated: state.login.isAuthenticated,
    directives: state.login.directives});

  return connect(mapStateToProps)(AuthenticatedComponent);
}
