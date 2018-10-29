import React, {Component} from 'react';
import {Link} from 'react-router';
import MenuMap from './menu.json'
import MenuComponent from './MenuComponent';
import {
  obtenerFechaProceso,
  login,
  logOut,
  loginRedirect,
  ocultar,
  verificarDiasFestivos,
  verificarProcesosEjecutados,
  launchSocket
} from '../../actions';
import Moment from 'moment';
import {connect} from 'react-redux';
import ModalNotifications from '../modalNotifications';

class AppBar extends Component {

  constructor(props) {
    super(props);
    this.props.obtenerFechaProceso();
    this.props.verificarDiasFestivos();
  }

  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.loginRedirect("/session");
    }
  }

  componentDidUpdate() {
    this.props.launchSocket(this.props.fechaProceso);
  }

  render() {
    return (<div>
      <nav className="navbar navbar-default">

        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2" aria-expanded="false">
              <span className="sr-only">Spirit</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="" className="navbar-inner">
              <img src={require('../../../images/logoPro.png')} className="logoBar"/>
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <h4>
                  <span className="label label-primary">Fecha Proceso: {Moment(this.props.fechaProceso).format("YYYY-MM-DD")}</span>
                </h4>
              </li>
            </ul>
          </div>
        </div>

        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
            <ul className="nav navbar-nav">
              <MenuComponent menuMap={MenuMap.parametrosSistema}/>
              <MenuComponent menuMap={MenuMap.precios}/>
              <MenuComponent menuMap={MenuMap.controlProcesosAladdin}/>
              <MenuComponent menuMap={MenuMap.valorFondo} />
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#" data-toggle="modal" data-target="#myModalNotifications">
                  Notificaciones
                  <span className="badge">
                    {this.props.contadorHolidays + this.props.contadorServices + this.props.contadorCurvas + this.props.contadorDerivados}
                  </span>
                </a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <span className="badge">
                    <span className="glyphicon glyphicon-user"></span>
                  </span>
                  {" " + this.props.user}
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a>{this.props.fullName}</a>
                  </li>
                  <li className="text-center">
                    <button className="btn btn-xs btn-warning" onClick={() => this.props.logOut()}>
                      Cerrar Sesión
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ModalNotifications/>
    </div>);
  }
}
function mapStateToProps(state) {
  return {
    fechaProceso: state.obtenerFechaProceso.fechaProceso,
    token: state.login.token,
    msgStatus: state.login.msgStatus,
    fullName: state.login.fullName,
    isAuthenticated: state.login.isAuthenticated,
    user: state.login.user,
    directives: state.login.directives,
    contadorHolidays: state.verificarDiasFestivos.contador,
    contadorServices: state.verificarProcesosEjecutados.contadorServices,
    contadorCurvas: state.verificarProcesosEjecutados.contadorCurvas,
    contadorDerivados: state.verificarProcesosEjecutados.contadorDerivados
  }
}
export default connect(mapStateToProps, {
  obtenerFechaProceso,
  login,
  logOut,
  loginRedirect,
  ocultar,
  verificarDiasFestivos,
  verificarProcesosEjecutados,
  launchSocket
})(AppBar)
