import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showProcessPrices, generarArchivo, checkId, findDetails, showProcessTypes, ocultar,
        showAlertProgress, replicateProcessRvl, errorReplicated, obtenerFechaProceso,
        reintentarCargueProceso, replicateProcessFuturos} from '../actions';
import ModalRvl from './modalRvl';
import ModalRvi from './modalRvi';
import ModalRfl from './modalRfl';
import ModalRfi from './modalRfi';
import ModalFuturo from './modalFuturo';
import ModalNE from './modalNE';
import ModalOptions from './modalOptions';
import ModalMoney from './modalMoney';
import ModalPreciosManual from './modalPreciosManual';
import Control from './control';
import Search from './search';
import Footer from './footer';
import FileGenerate from './fileGenerate';
import 'sweetalert2/dist/sweetalert2.min.css';
import {default as swal} from 'sweetalert2';

let modalTitle = null;
let replicates = ["FUTUROS", "RENTA_VARIABLE_LOCAL"];

class ControlPrices extends Component {

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

  detalles(idProcess, nameProcess, service, fechaProceso) {
    modalTitle = nameProcess;
    this.props.findDetails(idProcess, service, fechaProceso);
  }

  replicateProcess(tipoProceso) {
    this.props.showAlertProgress(true);
    if(tipoProceso == "FUTUROS") {
      this.props.replicateProcessFuturos(this.props.dateProcess);
    } else {
      this.props.replicateProcessRvl(this.props.dateProcess);
    }
  }

  reintentarCargue(proceso) {
    this.props.showAlertProgress(true);
    this.props.reintentarCargueProceso(proceso, this.props.procs, this.props.dateProcess);
  }

  renderProcessList() {
    return this.props.procs.map((proc) => {
      let estaCargado= proc.estado == "CARGADO";
      let esError= proc.estado=="ERROR";
      return (
        <tr key={proc.tipoProceso.id} className={proc.registros == 0 && proc.tipoProceso.nombre != "PRECIOS_MANUAL" ? "alert alert-danger" : ""}>
          <td>{proc.tipoProceso.descripcion}</td>
          <td>{proc.origen}</td>
          <td>{esError ?
                  <a onClick={this.showMessage.bind(this, proc.error, "error", this.props.ocultar, false)} style={{color: 'red'}}>{proc.estado}</a>
                  :proc.estado}
          </td>
          <td>{(estaCargado || esError) && proc.tipoProceso.nombre != "PRECIOS_MANUAL" ?
                <button name="btnTry" type="button" className="btn btn-default btn-xs"
                  onClick={this.showMessage.bind(this, "¿Está seguro de reintentar el proceso de carga?",
                            "warning", this.reintentarCargue.bind(this, proc), true)}
                >
                  <span className="glyphicon glyphicon-repeat" aria-hidden="true"/>
                </button> :
                ""
              }
          </td>
          <td>{estaCargado  ?
                <span className={proc.variacion ?
                                  "glyphicon glyphicon-alert":
                                  "glyphicon glyphicon-ok"
                                }>
                </span> :
                ""
              }
          </td>
          <td>{estaCargado  ?
                <button name={"proceso"+proc.tipoProceso.nombre} type="button" className="btn btn-default btn-xs"
                  onClick={this.detalles.bind(this,proc.id, proc.tipoProceso.descripcion, proc.tipoProceso.nombre, proc.fechaProceso)} data-toggle="modal"
                  data-target={proc.tipoProceso.nombre =="RENTA_VARIABLE_LOCAL"? "#myModalRvl":
                              proc.tipoProceso.nombre =="RENTA_VARIABLE_INTERNACIONAL" ? "#myModalRvi":
                              proc.tipoProceso.nombre =="RENTA_FIJA_LOCAL" ?"#myModalRfl":
                              proc.tipoProceso.nombre =="RENTA_FIJA_INTERNACIONAL"?"#myModalRfi":
                              proc.tipoProceso.nombre =="PRECIOS_MANUAL"?"#myModalPreciosManual":
                              proc.tipoProceso.nombre =="FUTUROS"?"#myModalFuturo":
                              proc.tipoProceso.nombre =="NOTAS_ESTRUCTURADAS"?"#myModalNE":
                              proc.tipoProceso.nombre =="OPCIONES"?"#myModalOptions":
                              "#myModalMoney"}><span className="glyphicon glyphicon-list-alt" aria-hidden="true"/>
                </button> : ""
              }
            </td>
            <td key={proc.render}>{estaCargado  ?
                  <input type="checkbox" onClick={this.props.checkId.bind(this,proc.id)}
                  key={proc.id}
                    defaultChecked={this.props.listaProcesos.find(item => item.id == proc.id).selected}
                  /> :
                  ""
                }
            </td>
            <td>
              {!estaCargado && replicates.includes(proc.tipoProceso.nombre) ?
                <button name="btnReplicate" type="button" className="btn btn-default btn-xs"
                  onClick={this.showMessage.bind(this, "¿Está seguro de replicar precios del día anterior?",
                            "warning", this.replicateProcess.bind(this, proc.tipoProceso.nombre), true)}
                >
                  <span className="glyphicon glyphicon-duplicate" aria-hidden="true"/>
                </button> :
                ""
              }
            </td>
            <div className="tooltip">Archivo sin registros</div>
        </tr>
      )
    })
  }

  renderProcessTypesList() {
    let columns = [];
    for (var i=0; i<7; i++) {
      columns.push(<td key={i}></td>);
    }
    return this.props.listProcessTypes.map((processType) => {
      return (
        <tr key={processType.id}>
          <td>{processType.descripcion}</td>
          {columns}
        </tr>
      )
    })
  }

  render() {

    if(this.props.showAlertprocessTypesUpdated) {
      this.showMessage("Archivo Generado", "success", this.props.ocultar, false);
    }
    return (
      <div id="viewPricesControl">
        <Control showProcess={this.props.showProcessPrices} generarArchivo={this.props.generarArchivo}
          listaProcesos={this.props.listaProcesos} completed={this.props.completed} title={"Cargue de Precios"}
          dateProcess={this.props.dateProcess} 
          service={"/ControlSpiritServices/rest/app/prices/generate"}
          isGenerate={false} isSearch={true} isText={false} placeholderSearch="YYYY-MM-DD" forceGenerate={false} />
        <br />
        <div id="listProcess" className="table-responsive row">

	        <table id="listProcessTable" className="table table-bordered table-hover table-condensed">
		        <thead>
		          <tr>
		            <th>Tipo Proceso</th>
                <th>Nombre Archivo</th>
                <th>Estado</th>
                <th>Reintentar</th>
                <th>Variación</th>
                <th>Detalles</th>
                <th>Validar</th>
                <th>Replicar</th>
		          </tr>
		        </thead>
		        <tbody>
		          { this.props.procs.length != 0 ? this.renderProcessList() : this.renderProcessTypesList() }
		        </tbody>
		     </table>
        </div>
        <div className="row">
          <div className="pull-left">
            <span className="label label-danger">Archivo sin registros</span>
          </div>
          <div className="pull-right">
            <FileGenerate generarArchivo={this.props.generarArchivo} listaProcesos={this.props.listaProcesos}
                completed={this.props.completed} service={"/ControlSpiritServices/rest/app/prices/generate"} 
                forceGenerate={true} />
          </div>          
          </div>        
        <Footer />
        <ModalRvl details={this.props.details} variacionTotal={this.props.variacionTotal} estaFueraDeRango={this.props.estaFueraDeRango} dateProcess={this.props.dateProcess} title={modalTitle} />
        <ModalRvi details={this.props.details} variacionTotal={this.props.variacionTotal} estaFueraDeRango={this.props.estaFueraDeRango} dateProcess={this.props.dateProcess} title={modalTitle} />
        <ModalRfl details={this.props.details} variacionTotal={this.props.variacionTotal} estaFueraDeRango={this.props.estaFueraDeRango} dateProcess={this.props.dateProcess} title={modalTitle} />
        <ModalRfi details={this.props.details} variacionTotal={this.props.variacionTotal} estaFueraDeRango={this.props.estaFueraDeRango} dateProcess={this.props.dateProcess} title={modalTitle} />
        <ModalFuturo details={this.props.details} variacionTotal={this.props.variacionTotal} estaFueraDeRango={this.props.estaFueraDeRango} dateProcess={this.props.dateProcess} title={modalTitle} />
        <ModalNE details={this.props.details} variacionTotal={this.props.variacionTotal} dateProcess={this.props.dateProcess} title={modalTitle} />
        <ModalOptions details={this.props.details} variacionTotal={this.props.variacionTotal} dateProcess={this.props.dateProcess} title={modalTitle} />
        <ModalMoney details={this.props.details} variacionTotal={this.props.variacionTotal} dateProcess={this.props.dateProcess} title={modalTitle} />
        <ModalPreciosManual details={this.props.details} variacionTotal={this.props.variacionTotal} dateProcess={this.props.dateProcess} title={modalTitle} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    listProcessTypes: state.showProcessTypes.list,
    procs: state.showProcessPrices.list,
    completed: state.procesos.completed,
    listaProcesos: state.procesos.list,
    details: state.findDetails.listDetails,
    variacionTotal: state.findDetails.variacionTotal,
    estaFueraDeRango: state.findDetails.estaFueraDeRango,
    dateProcess: state.showProcessPrices.dateProcess,
    showAlertprocessTypesUpdated: state.generarArchivo.showAlertprocessTypesUpdated,
    msgGenerarArchivo: state.generarArchivo.msg,
    showAlertProgress: state.showProcessAlertProgress.showAlertProgress,
    fechaProceso: state.obtenerFechaProceso.fechaProceso
  }
}

export default connect(mapStateToProps, { showProcessPrices, generarArchivo, checkId, findDetails, showProcessTypes,
                                          ocultar, showAlertProgress, replicateProcessRvl, errorReplicated,
                                          obtenerFechaProceso, reintentarCargueProceso,
                                          replicateProcessFuturos})(ControlPrices)
