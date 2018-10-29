import React, { Component } from 'react';
import { connect } from 'react-redux';
import { obtenerTiposProcesoCurvas, obtenerTiposProcesoCurvasPorFecha, checkIdCurvas, listarDetalleCurvas,
         generarArchivo,ocultar, showAlertProgress, reintentarCargueCurvas } from '../actions'
import Search from './search';
import Footer from './footer';
import Control from './control';
import ModalCurvas from './modalCurvas';
import FileGenerate from './fileGenerate';
import 'sweetalert2/dist/sweetalert2.min.css';
import {default as swal} from 'sweetalert2';
import {replace} from '../utils/utils';

let title;

class ControlCurvas extends Component {  

    componentDidMount() {
        this.props.obtenerTiposProcesoCurvas();
    }

    detalles(idProcess, nameProcess) {
        title = nameProcess;
        this.props.listarDetalleCurvas(idProcess);
    }

    showMessage(message, type, action, cancelButton) {
        swal({
            title: 'Spirit',
            text: message,
            type: type,
            showCancelButton: cancelButton,
            confirmButtonColor: '#337AB7',
            cancelButtonColor: '#5BC0de',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            allowEscapeKey: false,
            allowOutsideClick: false,
            width: 400
        }).then(() => { action() }, (dismiss) => { });
    }

    reintentarCargue(proceso) {
      this.props.showAlertProgress(true);
      this.props.reintentarCargueCurvas(proceso, this.props.dateProcess);
    }

    renderProcessList() {
        return this.props.listaProceso.map((proc) => {
            let estaCargado = proc.estado == "CARGADO";
            let esError = proc.estado == "ERROR";
            return (
                <tr key={proc.estado +(+ new Date() + Math.floor(Math.random() * 999999)).toString(36)}>
                    <td>{proc.tipoProceso}</td>
                    <td>{esError ?
                           <a onClick={this.showMessage.bind(this,proc.error, "error", this.props.ocultar, false)}
                              style={{color: 'red'}}>
                              {proc.estado}
                            </a>
                         :replace(proc.estado)
                         }
                    </td>
                    <td>{(estaCargado || esError) ?
                          <button name="btnTry" type="button" className="btn btn-default btn-xs"
                            onClick={this.showMessage.bind(this, "¿Está seguro de reintentar el proceso de carga?",
                                      "warning", this.reintentarCargue.bind(this, proc), true)}>
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
        return this.props.listaTipoProceso.map((proc) => {

            return (
                <tr key={proc.id}>
                    <td>{proc.descripcion}</td>
                    <td></td>
                    <td></td>
                </tr>
            )

        })
    }

    render() {
        if (this.props.showAlertprocessTypesUpdated) {
            this.showMessage("Archivo Generado", "success", this.props.ocultar, false);
        }
        return (
            <div >
                <Control showProcess={this.props.obtenerTiposProcesoCurvasPorFecha} generarArchivo={this.props.generarArchivo}
                    listaProcesos={this.props.listaProceso} completed={this.props.completed} title={"Cargue Curvas Forward"}
                    dateProcess={this.props.dateProcess} service={"/curvas-services/rest/curvas/generate"}
                    isGenerate={false} isSearch={true} isText={false} placeholderSearch="YYYY-MM-DD" />

                <br />
                <div id="listCurvas" className="table-responsive row">
                    <table id="listCurvasTable" className="table table-bordered table-hover table-condensed">
                        <thead>
                            <tr>
                                <th>Tipo Proceso</th>
                                <th>Estado</th>
                                <th>Reintentar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.listaProceso.length != 0 ? this.renderProcessList() : this.renderProcessTypesList()}
                        </tbody>
                    </table>
                </div>
                <div className="row">
          <div className="pull-right">
            <FileGenerate generarArchivo={this.props.generarArchivo} listaProcesos={this.props.listaProceso}
                completed={this.props.completed} service={"/curvas-services/rest/curvas/generate"} 
                forceGenerate={false} />
          </div>          
          </div>   
                <Footer />
                <ModalCurvas details={this.props.details} dateProcess={this.props.dateProcess} title={title} />
            </div >

        )
    }
}
function mapStateToProps(state) {
    return {
        listaTipoProceso: state.obtenerListaProcesoCurvas.listaTipoProceso,
        listaProceso: state.obtenerListaProcesoCurvas.lista,
        dateProcess: state.obtenerListaProcesoCurvas.dateProcess,
        completed: state.obtenerListaProcesoCurvas.completed,
        details: state.obtenerListaProcesoCurvas.detalle,
        showAlertProgress: state.showProcessAlertProgress.showAlertProgress,
        showAlertprocessTypesUpdated: state.generarArchivo.showAlertprocessTypesUpdated
    }
}
export default connect(mapStateToProps, {
    obtenerTiposProcesoCurvas, obtenerTiposProcesoCurvasPorFecha, checkIdCurvas, listarDetalleCurvas,
    generarArchivo, ocultar, showAlertProgress, reintentarCargueCurvas
}
)(ControlCurvas)
