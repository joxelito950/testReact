import React, {Component} from 'react';
import AppBar from './navbar/appBar';
import Footer from './footer';
import {connect} from 'react-redux';
import {
  ejecutarFormatoRegulatorio,
  showAlertProgress,
  ocultar,
  deleteFormatosRegulatios,
  webSocketSpiritValoracion,
  obtenerFechaProceso
} from '../actions';
import ReactInterval from 'react-interval';
import {replace, showMessage} from '../utils/utils';

class FormatoRegulatorio extends Component {

  componentDidMount() {
    this.props.webSocketSpiritValoracion(this.props.fechaProceso, this.buildProcessList(), "/procesos-score/statuss");

  }

  buildProcess() {
    return [
      this.props.crgPosiciones,
      this.props.f351,
      this.props.f397,
      this.props.f468,
      this.props.f471,
      this.props.f472,
      this.props.f_futuros
    ];
  }

  buildProcessList() {
    return [
      'CRG_POSICIONES',
      'F_351',
      'F_471',
      'F_468',
      'F_397',
      'F_FUTURO',
      'F_472'
    ];
  }

  executeService(existError) {
    let msg = existError
      ? "habilitar"
      : "ejecutar";
    showMessage(
      "Está seguro de " + msg + " el proceso?", "warning", existError
      ? this.props.deleteFormatosRegulatios
      : this.props.ejecutarFormatoRegulatorio,
    true,
    this.props.fechaProceso);
  }

  validateStatus(proceso) {
    let status = "progress-bar";
    if (proceso == "CARGANDO" || proceso == "ELIMINANDO") {
      status = "progress-bar progress-bar-striped progress-bar-warning active";
    } else if (proceso == "CARGADO") {
      status = "progress-bar progress-bar-success";
    } else if (proceso == "ERROR") {
      status = "progress-bar progress-bar-danger";
    }
    return status;
  }

  verifyProcess() {
    let listProcess = this.buildProcess();
    return listProcess.filter(item => item.status === "ERROR");
  }

  executeDelete(task) {
    showMessage("Está seguro de reintentar el proceso?", "warning", this.props.deleteFormatosRegulatios, true, this.props.fechaProceso, task);
  }

  drawRows() {
    return this.buildProcess().map(item => {
      return (<tr key={item.title}>
        <td>{item.title}</td>
        <td>
          <button type="button" onClick={() => {
              this.props.ejecutarFormatoRegulatorio(this.props.fechaProceso, item.task)
            }} className="btn btn-primary btn-xs glyphicon glyphicon-play" disabled={item.status === "NO_CARGADO"
              ? false
              : true}/>
        </td>
        <td>
          <div className='progress'>
            <div className={this.validateStatus(item.status)} role='progressbar' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100' style={{
                width: '100%'
              }}>
              {replace(item.status)}
            </div>
          </div>
        </td>
        <td>
          {
            item.status != "ERROR"
              ? ""
              : <button name="btnErrorDetails" type="button" className="btn btn-default btn-xs" onClick={() => showMessage(item.message, "error", this.props.ocultar, false)}>
                  <span className="glyphicon glyphicon-list-alt" aria-hidden="true"/>
                </button>
          }
        </td>
        <td>
          {
            item.status === "ERROR" || item.status === "CARGADO"
              ? <button name="btnDelete" type="button" className="btn btn-default btn-xs" onClick={this.executeDelete.bind(this, item.task)}>
                  <span className="glyphicon glyphicon-repeat" aria-hidden="true"/>
                </button>
              : ""
          }
        </td>
      </tr>);
    });
  }

  disabledExecute() {
    return this.buildProcess().find(item => item.status === "CARGANDO" || item.status === "ELIMINANDO")
      ? true
      : false;
  }

  render() {
    let existError = this.verifyProcess().length > 0
      ? true
      : false;
    return (<div>
      <div className="row">
        <h2>Formatos Score</h2>
      </div>
      <div id="valuesFundList" className="col-md-6 col-md-offset-3 row">
        <table className="table table-bordered table-hover table-condensed">
          <thead>
            <tr>
              <th>Proceso</th>
              <th>Ejecutar</th>
              <th>Estado</th>
              <th>Detalles</th>
              <th>Reintentar</th>
            </tr>
          </thead>
          <tbody>
            {this.drawRows()}
          </tbody>
        </table>
      </div>
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    formato: state.ejecutarFormatoRegulatorio.formato,
    crgPosiciones: state.ejecutarFormatoRegulatorio.crgPosiciones,
    f351: state.ejecutarFormatoRegulatorio.f351,
    f471: state.ejecutarFormatoRegulatorio.f471,
    f468: state.ejecutarFormatoRegulatorio.f468,
    f397: state.ejecutarFormatoRegulatorio.f397,
    f_futuros: state.ejecutarFormatoRegulatorio.f_futuros,
    fechaProceso: state.obtenerFechaProceso.fechaProceso,
    f472: state.ejecutarFormatoRegulatorio.f472
  }
}

export default connect(mapStateToProps, {
  ejecutarFormatoRegulatorio,
  showAlertProgress,
  ocultar,
  deleteFormatosRegulatios,
  webSocketSpiritValoracion,
  obtenerFechaProceso
})(FormatoRegulatorio)
