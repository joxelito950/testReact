import React, {Component} from 'react';
import AppBar from './navbar/appBar';
import { connect } from 'react-redux';
import {obtenerInformacionDiaria, ejecutarInformacionDiaria,
          ocultar, deleteTaskProcess, detalleInformacionDiaria,
          webSocketSpiritValoracion} from '../actions';
import ReactInterval from 'react-interval';
import {replace, showMessage, showMessageProgress} from '../utils/utils';
import ModalListaControl from "./modalListaControl";

class InformacionDiaria extends Component {

  componentDidMount() {
    this.obtainStatus();
  }

  buildProcess() {
    return [
      this.props.listaControl,
      this.props.secMaster,
      this.props.contrapartes
    ];
  }

  obtainStatus() {
    this.props.webSocketSpiritValoracion(this.props.dateProcess, ["UPDATE_LISTA_CONTROL"], "/procesos-lista-control/statuss");
    this.props.webSocketSpiritValoracion(this.props.dateProcess, ["SEC_MASTER"], "/procesos-security-master/statuss");
    this.props.webSocketSpiritValoracion(this.props.dateProcess, ["CONTRAPARTES"], "/procesos-contrapartes/statuss");
  }

  validateStatus(proceso) {
    let status = "progress-bar";
    if(proceso == "CARGANDO" || proceso == "ELIMINANDO") {
      status = "progress-bar progress-bar-striped progress-bar-warning active";
    } else if (proceso == "CARGADO") {
      status = "progress-bar progress-bar-success";
    } else if (proceso == "ERROR") {
      status = "progress-bar progress-bar-danger";
    }
    return status;
  }

  deleteProcess(urlDelete) {
    showMessage("Está seguro de habilitar el proceso?", "warning",
      this.props.deleteTaskProcess, true, this.props.dateProcess, urlDelete
    );
  }

  detalles() {
    this.props.detalleInformacionDiaria(this.props.dateProcess);
  }

  drawRows() {
    return this.buildProcess().map(item => {
      return (
        <tr key={item.nombre+item.descripcion}>
          <td>{item.descripcion}</td>
          <td>
            <button type="button"
              onClick={() => {this.props.ejecutarInformacionDiaria(this.props.dateProcess, item.nombre, item.url)}}
              className="btn btn-primary btn-xs glyphicon glyphicon-play"
              disabled={item.status === "NO_CARGADO" ? false : true}
            />
          </td>
          <td>
            <div className='progress'>
              <div className={this.validateStatus(item.status)}
                  role='progressbar' aria-valuenow='100'
                  aria-valuemin='0' aria-valuemax='100' style={{width: '100%'}}
              >
                {
                  replace(item.status)
                }
              </div>
            </div>
          </td>
          <td>
            {item.status === "ERROR" ?
              <button name="btnErrorDetails" type="button" className="btn btn-default btn-xs"
                onClick={() => showMessage(item.message, "error", this.props.ocultar, false)}
              >
                <span className="glyphicon glyphicon-list-alt" aria-hidden="true"/>
              </button> :
              item.status === "CARGADO" && item.nombre === "UPDATE_LISTA_CONTROL" ?
              <button name="" type="button" className="btn btn-default btn-xs"
                onClick={this.detalles.bind(this)} data-toggle="modal"
                data-target="#myModalListaControl"
              >
                <span className="glyphicon glyphicon-list-alt" aria-hidden="true"/>
              </button>
              : ""
            }
          </td>
          <td>
            {item.status === "ERROR" || item.status === "CARGADO" ?
              <button name="btnDelete" type="button" className="btn btn-default btn-xs"
                onClick={this.deleteProcess.bind(this, item.urlDelete)}
              >
                <span className="glyphicon glyphicon-repeat" aria-hidden="true"/>
              </button>
              : ""
            }
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div id="infoDiaria">
        <div className="row">
          <h2>Actualizar Información Diaria</h2>
        </div>
        <div id="infoDiariaList" className="col-md-6 col-md-offset-3 row">
          <table className="table table-bordered table-hover table-condensed">
            <thead>
              <tr>
                <th>Tipo Proceso</th>
                <th>Ejecutar</th>
                <th>Estado</th>
                <th>Detalles</th>
                <th>Habilitar</th>
              </tr>
            </thead>
            <tbody>
              {this.drawRows()}
            </tbody>
          </table>
        </div>
        <ModalListaControl details={this.props.details} dateProcess={this.props.dateProcess} title={"Lista Control"} />
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {
    dateProcess: state.obtenerFechaProceso.fechaProceso,
    secMaster: state.ejecutarInformacionDiaria.secMaster,
    contrapartes: state.ejecutarInformacionDiaria.contrapartes,
    listaControl: state.ejecutarInformacionDiaria.listaControl,
    details: state.ejecutarInformacionDiaria.details
  }
}

export default connect(mapStateToProps, {obtenerInformacionDiaria, ejecutarInformacionDiaria,
                                          ocultar, deleteTaskProcess, detalleInformacionDiaria,
                                          webSocketSpiritValoracion})(InformacionDiaria)
