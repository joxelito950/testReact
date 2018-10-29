import React, {Component} from 'react';
import { connect } from 'react-redux';
import { login, loginRedirect, session} from '../actions';
import 'sweetalert2/dist/sweetalert2.min.css';
import { default as swal } from 'sweetalert2';
import Footer from './footer';

class SessionSpirit extends Component {

  login(event) {
    event.preventDefault();
    this.props.session({user: this.refs.userSpirit.value, password: this.refs.passwordSpirit.value});
  }

  render() {
    if(this.props.isAuthenticated) {
      this.props.loginRedirect("/");
    }
    return (
      <div id="sessionSpirit" className="container-fluid">
        <div className="row">
          <div className="jumbotron">
            <h1>Spirit</h1>
          </div>
        </div>
        <div className="row text-center">
          <h2>Inicio de Sesión</h2>
        </div>
        <div id="formSession" className="row col-md-4 col-md-offset-4">
          <form onSubmit={this.login.bind(this)}>
            <div className="form-group">
              <label htmlFor="userSpirit">Usuario</label>
              <input type="text" className="form-control" id="userSpirit" ref="userSpirit" />
            </div>
            <div className="form-group">
              <label htmlFor="passwordSpirit">Contraseña</label>
              <input type="password" className="form-control" id="passwordSpirit" ref="passwordSpirit" />
            </div>
            <button id="btnSignIn" type="submit" className="btn btn-primary btn-block" >
              Ingresar
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.login.token,
    msgStatus: state.login.msgStatus,
    fullName: state.login.fullName,
    isAuthenticated: state.login.isAuthenticated,
    fechaProceso: state.obtenerFechaProceso.fechaProceso
  }
}

export default connect(mapStateToProps, { login, loginRedirect, session })(SessionSpirit)
