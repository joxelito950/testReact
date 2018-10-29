import React, {Component} from 'react';
import { connect } from 'react-redux'
import { showProcessNavs, showProcessTypes, generarArchivo, checkIdNavs, findDetails, ocultar, listarValorFondo } from '../actions'
import Search from './search';
import Control from './control';
import ModalValorFondo from './modalValorFondo';
import Footer from './footer';
import FileGenerate from './fileGenerate';
import 'sweetalert2/dist/sweetalert2.min.css';
import { default as swal } from 'sweetalert2';
import {replace} from '../utils/utils';

let title;

class ControlNavs extends Component {

  componentWillMount() {
    this.props.showProcessTypes(this.props.params.groupName);
  }

  detalles(idProcess, nameProcess) {
    title = nameProcess;
    this.props.listarValorFondo(idProcess);
  }

  showErrorMessage(errorText){
    swal({
        title: 'Spirit',
        text: errorText,
        type: 'error',
        confirmButtonColor: '#337ab7',
        confirmButtonText: 'Aceptar',
        allowEscapeKey:false,
        allowOutsideClick:false,
        width: 400
      }).then(() => this.props.ocultar());
  }

  renderProcessList() {
    return this.props.processListNavs.map((proc) => {
      let estaCargado= proc.estado == "CARGADO";
      let esError= proc.estado=="ERROR";
      return (
        <tr key={proc.tipoProceso}>
          <td>{proc.tipoProceso}</td>
           <td>{esError ?
                <a onClick={this.showErrorMessage.bind(this,proc.error)} style={{color: 'red'}}>{proc.estado}</a>
                :replace(proc.estado)
                }
          </td>
          <td>{estaCargado  ?
                <span className={proc.alerta ?
                  "glyphicon glyphicon-alert":
                  "glyphicon glyphicon-ok"}>
                </span> : ""
              }
          </td>
          <td key={proc.render}>{estaCargado  ?
                <input type="checkbox" onChange={this.props.checkIdNavs.bind(this,proc.proceso)}
                  defaultChecked={this.props.listaProcesos.find(item => item.id == proc.proceso).selected} />
                  : ""
              }
          </td>
          <td>{estaCargado ?
                <button name={"proceso"+proc.tipoProceso} type="button" className="btn btn-default btn-xs"
                  onClick={this.detalles.bind(this,proc.proceso, proc.tipoProceso)} data-toggle="modal"
                  data-target={"#myModalVf"}><span className="glyphicon glyphicon-list-alt" aria-hidden="true"/>
                </button> : ""
              }
          </td>
        </tr>
      )
    })
  }

  renderProcessTypesList() {
    return this.props.listProcessTypes.map((processType) => {
      return (
        <tr key={processType.id}>
          <td>{processType.descripcion}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      )
    })
  }

  render() {
    if(this.props.showAlertprocessTypesUpdated) {
      swal({
        title: 'Spirit',
        text: "Archivo Generado",
        type: 'success',
        confirmButtonColor: '#337ab7',
        confirmButtonText: 'Aceptar',
        allowEscapeKey:false,
        allowOutsideClick:false,
        width: 400
      }).then(() => this.props.ocultar())
    }
    return (
      <div>
        <Control showProcess={this.props.showProcessNavs} generarArchivo={this.props.generarArchivo}
          listaProcesos={this.props.listaProcesos} completed={this.props.completed} title={"Valores de Fondo"}
          dateProcess={this.props.searchDate} service={"/navs-services/rest/valores-fondo/generate"}
          isGenerate = {false} isSearch={true} isText={false} placeholderSearch="YYYY-MM-DD" />
        <br />
        <div id="listProcess" className="table-responsive row">
	        <table id="listProcessTable" className="table table-bordered table-hover table-condensed">
		        <thead>
		          <tr>
		            <th>Tipo Proceso</th>
		            <th>Estado</th>
                <th>Valor Fondo Cero</th>
		            <th>Validar</th>
                <th>Detalles</th>
		          </tr>
		        </thead>
		        <tbody>
		          { this.props.processListNavs.length != 0 ? this.renderProcessList() : this.renderProcessTypesList() }
		        </tbody>
		     </table>
        </div>
        <div className="row">
          <div className="pull-right">
            <FileGenerate generarArchivo={this.props.generarArchivo} listaProcesos={this.props.listaProcesos}
                completed={this.props.completed} service={"/navs-services/rest/valores-fondo/generate"} 
                forceGenerate={false} />
          </div>          
          </div>           
        <Footer />
        <ModalValorFondo details={this.props.details} dateProcess={this.props.searchDate} name={title}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    listProcessTypes: state.showProcessTypes.list,
    processListNavs: state.showProcessNavs.list,
    searchDate: state.showProcessNavs.searchDate,
    completed: state.procesosNavs.completed,
    listaProcesos: state.procesosNavs.list,
    showAlertprocessTypesUpdated: state.generarArchivo.showAlertprocessTypesUpdated,
    details: state.listarValorFondo.listaValorFondo
  }
}

export default connect(mapStateToProps, {showProcessNavs, generarArchivo, showProcessTypes, checkIdNavs,
                                          findDetails, ocultar, listarValorFondo}
                      )(ControlNavs)
