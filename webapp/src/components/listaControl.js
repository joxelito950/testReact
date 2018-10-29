import React, { Component } from 'react';
import AppBar from './navbar/appBar';
import Footer from './footer';
import { connect } from 'react-redux';

import {
    showProcessTypesPrice, getListaControl, addItemListaControl, removeItemListaControl, getIdProceso,
    guardarListaControl,validacionFallida, validacionExitosa,ocultar
} from '../actions';
import 'sweetalert2/dist/sweetalert2.min.css';
import { default as swal } from 'sweetalert2';
import {showMessage} from '../utils/utils';

let myMap = new Map();
let proceso = {};

class ListaControl extends Component {

    componentDidMount() {
        this.props.validacionFallida("");
        this.props.showProcessTypesPrice();
    }

    filterControlList(e, eve) {

        let proceso = {
            fechaProceso: this.props.fechaProceso,
            tipoProceso: { id: eve.target.value }
        }
        this.props.getIdProceso(eve.target.value);

        if (eve.target.value === "0") {
            this.props.validacionFallida("");
            this.props.getListaControl({fechaProceso: this.props.fechaProceso, tipoProceso: {id: eve.target.value}});
        } else {
            this.props.validacionExitosa();
            this.props.getListaControl(proceso);
        }
    }

    newRow() {
        let mensaje = "No se admiten campos vacíos";
        this.props.validacionFallida(mensaje);
        this.props.addItemListaControl(this.props.sizeListPrecioManual);
    }

    deleteRow(item) {
           proceso = {
            fechaProceso: this.props.fechaProceso,
            tipoProceso: { id:  this.props.idProceso}
        }
        this.props.validacionExitosa();
        showMessage("¿Está seguro que quiere eliminar?", "warning",
          this.props.removeItemListaControl, true, item, proceso);
    }

    saveListaControl(event) {
        event.preventDefault();
        let filas = [...this.refs.listaControlBody.getElementsByTagName("tr")];
        let inputs = [];
        filas.map(item => {
            inputs.push([...item.getElementsByTagName("input")]);
        }
        );
        let newListaControl = [];
        inputs.map(item => {
            let tipoProceso = { "id": this.props.idProceso }
            newListaControl.push({
                "id": isNaN(item[0].value) ? null : item[0].value, "codigo": item[1].value, "fechaAlta": item[2].value, "tipoProceso": tipoProceso
            });

        }
        );
        proceso = {
            fechaProceso: this.props.fechaProceso,
            tipoProceso: { id:  this.props.idProceso}
        }

         this.props.guardarListaControl(newListaControl,proceso);
         this.props.validacionExitosa();
    }
    fieldValidate(evt) {
        let aux = document.getElementById(evt.target.id);
        let mensaje = '';
         evt.target.value = evt.target.value.toUpperCase();

            let expresionDecimalPrecio = /^\d+(\.+\d{1,8})?$/;
        let expresionIdentificadorMenos = /^((\w|\d|-|_))*$/;

        if (!evt.target.value) {
            mensaje = "No se admiten campos vacíos";
            this.props.validacionFallida(mensaje);
            aux.className = "has-error";
            textSpanError = document.createTextNode(mensaje);
            spanError.appendChild(textSpanError);
            myMap.set(aux, mensaje);
        }else if (!expresionIdentificadorMenos.test(evt.target.value)) {
            mensaje = "Caracter especial no permitido";
            this.props.validacionFallida(mensaje);
            aux.className = "has-error";
            textSpanError = document.createTextNode(mensaje);
            spanError.appendChild(textSpanError);
            myMap.set(aux, mensaje);
        }else{
            myMap.delete(aux);
            aux.className = "has-sucess";
            if (myMap.size == 0) {
                this.props.validacionExitosa();
            }
        }

    }

    render() {
            let message;
            if (this.props.msg != "Ok" && this.props.msg != "ADD" && this.props.msg != "") {
                message = (
                    <div className="panel panel-danger">
                        <div className="panel-heading">{this.props.msg}</div>
                    </div>
                );
            }
           if (this.props.showAlertprocessTypesUpdated) {
            swal({
                title: 'Spirit',
                text: "Registros guardados",
                type: 'success',
                confirmButtonColor: '#337ab7',
                confirmButtonText: 'Aceptar',
                allowEscapeKey: false,
                allowOutsideClick: false,
                width: 400
            }).then(() => this.props.ocultar())
        }
        return (
            <div>
                <div className="row">
                    <h2>Lista Control</h2>
                </div>
                {message}

                <div className="form-inline form-group row">
                    <label><h3><span className="label label-default">Tipo Proceso</span></h3></label>
                    &nbsp;&nbsp;&nbsp;
                    <select className="form-control" onChange={this.filterControlList.bind(this, this)} ref="exampleRef">
                        <option value="0">------- Seleccione ------</option>
                        {this.props.listaProcesos.map((tipoPrecio) =>
                            <option key={tipoPrecio.id} value={tipoPrecio.id} >{tipoPrecio.descripcion}</option>
                        )}
                    </select>

                </div>

                <div id="listaControl" className="col-md-8 col-md-offset-3 row">
                    <form id="listaControlForm" onSubmit={this.saveListaControl.bind(this)}>
                        <table id="listaControlTable" className="table table-bordered table-hover table-condensed">
                            <thead>
                                <tr>
                                    <th>Identificador</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody ref="listaControlBody">
                                {this.props.listaControl.map((item) =>
                                    <tr key={item.id}>

                                        <td className="hidden" >
                                            <input type="text" className="form-control" defaultValue={item.id} />
                                        </td>
                                        <td id={item.id+item.codigo} className={isNaN(item.id)?"has-error":"has-success"}>
                                            <input type="text" id={item.id+item.codigo} className="form-control" disabled={isNaN(item.id) ? false : true} defaultValue={item.codigo}  onChange={this.fieldValidate.bind(this)}  />
                                        </td>
                                        <td className="hidden" >
                                            <input type="text" className="form-control" defaultValue={item.fechaAlta} />
                                        </td>
                                        <td className="hidden" >
                                            <input type="text" className="form-control" defaultValue={item.tipoProceso} />
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-danger glyphicon glyphicon-remove pull-right" onClick={this.deleteRow.bind(this, item)} />
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <button id="btnAddFactor" type="button" className="btn btn-info pull-left" onClick={() => this.newRow()} disabled={this.props.msg == "Ok" && this.props.msg != "" ? false : true} >
                            Adicionar
                         </button>
                        <button id="btnSaveFactors" type="submit" className="btn btn-primary pull-right" disabled={this.props.msg == "Ok" ? false : true} >
                            Guardar
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        listaProcesos: state.getListaControl.listTypePrice,
        listaControl: state.getListaControl.listControl,
        fechaProceso: state.obtenerFechaProceso.fechaProceso,
        sizeListPrecioManual: state.getListaControl.listSize,
        idProceso: state.getListaControl.idProceso,
        showAlertprocessTypesUpdated: state.getListaControl.showAlertprocessTypesUpdated,
        msg: state.validacionFallida.msg,
        tipoProceso: state.getListaControl.tipoProceso
    }
}

export default connect(mapStateToProps, { showProcessTypesPrice, getListaControl, addItemListaControl, removeItemListaControl, getIdProceso,guardarListaControl,validacionFallida, validacionExitosa,ocultar  })(ListaControl)
