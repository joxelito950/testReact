import React, {Component} from 'react';
import {connect} from 'react-redux';
import {obtenerListaProcesosFtp, showProcessTypesFtp, reintentarProcesoFtp, ocultar,
        showAlertProgress} from '../actions';
import Control from './control';
import Search from './search';
import Footer from './footer';
import AppBar from './navbar/appBar';
import Moment from 'moment';
import 'sweetalert2/dist/sweetalert2.min.css';
import {default as swal} from 'sweetalert2';
import {replace} from '../utils/utils';

let modalTitle = null;

class ControlFtp extends Component {

    constructor(props) {
        super(props);
        this.props.showProcessTypesFtp();
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

    reintentarProceso(idProcesoFtp, dateSearch) {
      this.props.showAlertProgress(true);
      this.props.reintentarProcesoFtp(idProcesoFtp, dateSearch);
    }

    renderProcessList() {
        return this.props.listaProcesosFtp.map((proc) => {
            let estaCargado = proc.estado == "CARGADO";
            let esError = proc.estado == "ERROR";
            return (

                <tr key={proc.proceso}>
                    <td>{proc.tipoProceso}</td>
                    <td>{proc.filename}</td>
                    <td>{esError
                            ? <a onClick={this.showMessage.bind(this, proc.error, "error", this.props.ocultar, false)} style={{
                                    color: 'red'
                                }}>{proc.estado}</a>
                            : replace(proc.estado)}</td>
                    <td>
                        {esError
                            ? <button name="btnReplicateRvl" type="button" className="btn btn-default btn-xs"
                                onClick={this.showMessage.bind(this, "¿Está seguro de reintentar el envío de archivo a Aladdin?",
                                          "warning", this.reintentarProceso.bind(this, proc.proceso, this.props.searchDate), true)}
                              >
                                <span className="glyphicon glyphicon-repeat" aria-hidden="true"/>
                              </button>
                            : ""
}
                    </td>
                </tr>
            )
        })
    }
    renderProcessTypesList() {
        return this.props.listProcessTypesFtp.map((processType) => {
            return (
                <tr key={processType}>
                    <td>{processType}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h2>{"Procesos de envío FTP"}</h2>
                </div>
                <div id="searchAndGenerate" className="row">
                    <div className="col-md-3">
                        <Search showProcess={this.props.obtenerListaProcesosFtp}
                          dateProcess={Moment(this.props.searchDate).format("YYYY-MM-DD")}
                          isSearch={true} isText={false} placeholderSearch="YYYY-MM-DD"
                        />
                    </div>
                </div>
                <br/>
                <div id="viewPricesControl">
                    <br/>
                    <div id="listProcess" className="table-responsive row">
                        <table id="listProcessTable" className="table table-bordered table-hover table-condensed">
                            <thead>
                                <tr>
                                    <th>Tipo Proceso</th>
                                    <th>Ruta Archivo</th>
                                    <th>Estado</th>
                                    <th>Reintento</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.listaProcesosFtp.length != 0
                                    ? this.renderProcessList()
                                    : this.renderProcessTypesList()}
                            </tbody>
                        </table>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        listaProcesosFtp: state.obtenerListaProcesosFtp.lista,
        searchDate: state.obtenerListaProcesosFtp.searchDate,
        listProcessTypesFtp: state.showProcessTypesFtp.lista,
        reintentarProcesoFtp: state.reintentarProcesoFtp
    }
}

export default connect(mapStateToProps, {obtenerListaProcesosFtp, showProcessTypesFtp, reintentarProcesoFtp,
                                          ocultar, showAlertProgress})(ControlFtp)
