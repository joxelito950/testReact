import React, {Component} from 'react';
import {connect} from 'react-redux'
import {showProcessTypes, showProcessAladdin, ocultar,
        downloadFtp, showAlertProgress, reintentarCargueProceso} from '../actions'
import AppBar from './navbar/appBar';
import Search from './search'
import FechaProceso from './fechaProceso'
import 'sweetalert2/dist/sweetalert2.min.css';
import { default as swal } from 'sweetalert2';
import Footer from './footer';

let title;

class ProcesosAladdin extends Component {

  componentWillMount() {
    this.props.showProcessTypes(this.props.params.groupName);
  }

  showMessage(message, type, action, cancelButton){
    swal({
        title: 'Spirit',
        text: message,
        type: type,
        showCancelButton: cancelButton,
        confirmButtonColor: '#337AB7',
        cancelButtonColor: '#5BC0de',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        allowEscapeKey:false,
        allowOutsideClick:false,
        width: 400
      }).then(() => {action()}, (dismiss) => {});
  }

  reintentarCargue(proceso) {
    this.props.showAlertProgress(true);
    this.props.reintentarCargueProceso(proceso, this.props.processListAladdin, this.props.dateProcess);
  }

  renderProcessList() {
    return this.props.processListAladdin.map((proc) => {
        let estaCargado= proc.estado=="CARGADO";
        let esError= proc.estado=="ERROR";
        return (
          <tr key={proc.id}>
            <td>{proc.tipoProceso.descripcion}</td>
            <td>{proc.origen}</td>
            <td>{esError ?
                  <a onClick={this.showMessage.bind(this,proc.error, "error", this.props.ocultar, false)}
                    style={{color: 'red'}}>{proc.estado}
                  </a>
                  :proc.estado
                }
            </td>
            <td>
              {(estaCargado || esError) ?
                  <button name="btnTry" type="button" className="btn btn-default btn-xs"
                    onClick={this.showMessage.bind(this, "¿Está seguro de reintentar el proceso de carga?",
                              "warning", this.reintentarCargue.bind(this, proc), true)}
                  >
                    <span className="glyphicon glyphicon-repeat" aria-hidden="true"/>
                  </button> :
                  ""
              }
            </td>
          </tr>
        )
      })
  }

  renderProcessTypesList() {
    return this
      .props
      .listProcessTypes
      .map((processType) => {
        return (
          <tr key={processType.id}>
            <td>{processType.descripcion}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        )
      })
  }

  downloadFtp() {
    this.props.showAlertProgress(true);
    this.props.downloadFtp();
  }

  render() {
    return (
      <div>
        <div className="row">
          <h2>{"Cargue de Información Aladdin"}</h2>
        </div>
        <div id="searchAndGenerate" className="row">
          <div className="col-md-3">
            <Search
              showProcess={this.props.showProcessAladdin}
              dateProcess={this.props.dateProcess} isSearch={true}
              isText={false} placeholderSearch="YYYY-MM-DD" />
          </div>
          <div className="col-md-9">
            <div className="row">
              <button className="btn btn-default pull-right" type="button"
                onClick={this.downloadFtp.bind(this)}
              >
                Descargar Archivos
              </button>
            </div>
          </div>
        </div>
        <br/>
        <div id="listProcess" className="table-responsive row">
          <table
            id="listProcessTypes"
            className="table table-bordered table-hover table-condensed">
            <thead>
              <tr>
                <th>Tipo Proceso</th>
                <th>Archivo</th>
                <th>Estado</th>
                <th>Reintentar</th>
              </tr>
            </thead>
            <tbody>
              {this.props.processListAladdin.length != 0
                ? this.renderProcessList()
                : this.renderProcessTypesList()}
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    listProcessTypes: state.showProcessTypes.list,
    processListAladdin: state.showProcessAladdin.list,
    dateProcess: state.showProcessAladdin.dateProcess
  }
}

export default connect(mapStateToProps, {showProcessTypes, showProcessAladdin, ocultar,
                                          downloadFtp, showAlertProgress,
                                          reintentarCargueProceso})(ProcesosAladdin)
