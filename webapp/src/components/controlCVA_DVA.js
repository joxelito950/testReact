import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listarTiposProcesosCVA_DVA, listarProcesosPorFechaCVA_DVA, ocultar, reintentarProcesoCVA_DVA,
        showAlertProgress} from '../actions'
import Search from './search';
import Footer from './footer';
import Control from './control';
import {replace} from '../utils/utils';
import 'sweetalert2/dist/sweetalert2.min.css';
import {default as swal} from 'sweetalert2';

class ControlCVA_DVA extends Component {
    componentDidMount() {
        this.props.listarTiposProcesosCVA_DVA();
    }

    reintentarProceso(idProceso, dateSearch) {
      this.props.showAlertProgress(true);
      this.props.reintentarProcesoCVA_DVA(idProceso, dateSearch);
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

    renderList() {
        return this.props.processList.map((process) => {
          let estaCargado= process.estado == "CARGADO";
          let esError= process.estado=="ERROR";
            return (
                <tr key={process.tipoProceso}>
                    <td>{process.tipoProceso}</td>
                    <td>{process.estado == "ERROR" ?
                       <a onClick={this.showMessage.bind(this, process.error, "error", this.props.ocultar, false)}
                         style={{color: 'red'}}>
                         {process.estado}
                       </a> :
                      replace(process.estado)}
                    </td>
                    <td>{typeof process.portafolios == "undefined" ?
                          null:
                          <button type="button" className="btn btn-default btn-xs"
                            onClick={this.showMessage.bind(this, `Debe parametrizar los siguientes portafolios: ${process.portafolios}`,
                              "error", this.props.ocultar, false)}
                          >
                            <span className="glyphicon glyphicon-alert" aria-hidden="true"></span>
                          </button>
                        }
                    </td>
                    <td>
                        {esError || estaCargado
                            ? <button name="btnRetryCVA_DVA" type="button" className="btn btn-default btn-xs"
                                onClick={this.showMessage.bind(this, "¿Está seguro de reintentar el proceso de carga?",
                                          "warning", this.reintentarProceso.bind(this, process.proceso, this.props.searchDate), true)}
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



    renderTypesList() {
        return this.props.processTypesList.map((process) => {
            return (
                <tr key={process.id}>
                    <td>{process.descripcion}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div >
                <Control showProcess={this.props.listarProcesosPorFechaCVA_DVA}
                    title={"Cargue CVA/DVA"} dateProcess={this.props.searchDate} isGenerate={false}
                    isSearch={true} isText={false} placeholderSearch="YYYY-MM-DD" />
                <br />
                <div id="listItems" className="table-responsive row">
                    <table id="listItemsTable" className="table table-bordered table-hover table-condensed">
                        <thead>
                            <tr>
                                <th>Tipo Proceso</th>
                                <th>Estado</th>
                                <th>Portafolios</th>
                                <th>Reintento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.processList.length != 0 ? this.renderList() : this.renderTypesList()}
                        </tbody>
                    </table>
                </div>
            </div >

        )
    }
}
function mapStateToProps(state) {
    return {
      processTypesList: state.listarTiposProcesosCVA_DVA.listProcessTypes,
      processList: state.listarProcesosPorFechaCVA_DVA.listProcess,
      searchDate: state.listarProcesosPorFechaCVA_DVA.searchDate
    }
}
export default connect(mapStateToProps, {listarTiposProcesosCVA_DVA, listarProcesosPorFechaCVA_DVA,
                                        ocultar, reintentarProcesoCVA_DVA, showAlertProgress})(ControlCVA_DVA)
