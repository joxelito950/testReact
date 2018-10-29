import React, { Component } from 'react';
import AppBar from './navbar/appBar';
import Footer from './footer';
import ModalPreciosManualDetalle from './modalPrecioManualDetalles';
import { connect } from 'react-redux';
import {
    validacionFallida, validacionExitosa, obtenerListaPrecioManualPorTipoPrecio, listarTipoPrecioManual,
    addItemPrecioManual, removeItemPrecioManual, saveItemPrecioManual, getIdTipoPrecio, ocultar,
    findDetailsPreciosManualDetalleFCP
} from '../actions';
import 'sweetalert2/dist/sweetalert2.min.css';
import { default as swal } from 'sweetalert2';
import {showMessage} from '../utils/utils';

let myMap = new Map();

class PreciosManual extends Component {

    componentDidMount() {
        this.props.validacionFallida("");
        this.props.listarTipoPrecioManual();
        this.props.obtenerListaPrecioManualPorTipoPrecio(this.refs.exampleRef.value);

    }

    newRow() {
        let mensaje = "No se admiten campos vacíos";
        this.props.validacionFallida(mensaje);
        this.props.addItemPrecioManual(this.props.sizeListPrecioManual, this.props.listaPrecioManualPorTipoPrecio);
    }

    deleteRow(item, nombreTipoPrecio) {
        showMessage("¿Está seguro que quiere eliminar el precio?", "warning",
          this.props.removeItemPrecioManual, true, item, nombreTipoPrecio);
    }

    filterPriceType(e, eve) {
        if (eve.target.value === "0") {
            this.props.validacionFallida("");
            this.props.obtenerListaPrecioManualPorTipoPrecio("seleccione");
        } else {
            this.props.validacionFallida("");
            let nombreTipoPrecio = this.props.listaTipoPrecioManual.filter(function (val) {
                return val.id == parseInt(eve.target.value);
            })
            this.props.getIdTipoPrecio(eve.target.value);
            this.props.obtenerListaPrecioManualPorTipoPrecio(nombreTipoPrecio[0].nombre);
        }
    }

    savePrecioManual(event) {
        event.preventDefault();
        let filas = [...this.refs.precioManualBody.getElementsByTagName("tr")];
        let inputs = [];
        filas.map(item => {
            inputs.push([...item.getElementsByTagName("input")]);
        }
        );
        let newListFactors = [];
        inputs.map(item => {
            let idPrecio = { "id": (isNaN(item[0].value) ? this.props.idTipoPrecio : item[4].value) }
            newListFactors.push({
                "id": item[0].value, "identificador": item[1].value, "nombre": item[2].value, "precio": item[3].value, "tipoPrecio": idPrecio,
                "fechaBaja": item[5].value, "fechaAlta": item[6].value
            });
        }
        );
        let id = this.props.idTipoPrecio;
        let nombreTipoPrecio = this.props.listaTipoPrecioManual.filter(function (val) {
            return val.id == parseInt(id);
        })
        this.props.saveItemPrecioManual(newListFactors, nombreTipoPrecio, this.props.listPrecioManualOrigin, this.props.fechaProceso);
        this.props.validacionExitosa();
    }

    fieldValidate(evt) {
        let aux = document.getElementById(evt.target.id);

        if (aux.childNodes.length > 1) {
            aux.removeChild(aux.childNodes[1]);
        }
        let spanError = document.createElement("span");
        let mensaje = '';
        let index;
        let textSpanError = '';

        let expresionDecimalPrecio = /^\d+(\.+\d{1,8})?$/;
        let expresionIdentificadorMenos = /^((\w|\d|-))*$/;
        let expresionCantidadCaracter = /^.{1,60}$/;
        let expresionNombre = /^((\w|\d|á|é|í|ó|ú|Á|É|Í|Ó|Ú|ñ|Ñ|\s))*$/;

        if (!evt.target.value) {
            mensaje = "No se admiten campos vacíos";
            this.props.validacionFallida(mensaje);
            aux.className = "form-group has-error has-feedback";
            textSpanError = document.createTextNode(mensaje);
            spanError.appendChild(textSpanError);
            myMap.set(aux, mensaje);
        } else if (evt.target.name === "precio" && isNaN(Number(evt.target.value))) {
            mensaje = "Sólo se admiten números";
            this.props.validacionFallida(mensaje);
            aux.className = "form-group has-error has-feedback";
            textSpanError = document.createTextNode(mensaje);
            spanError.appendChild(textSpanError);
            myMap.set(aux, mensaje);
        } else if (Number(evt.target.value) <= 0 && evt.target.name === "precio") {
            mensaje = "Sólo se admiten valores mayores a 0";
            this.props.validacionFallida(mensaje);
            aux.className = "form-group has-error has-feedback";
            textSpanError = document.createTextNode(mensaje);
            spanError.appendChild(textSpanError);
            myMap.set(aux, mensaje);
        } else if (evt.target.name === "precio" && !expresionDecimalPrecio.test(evt.target.value)) {
            mensaje = "Sole se admiten 8 decimales";
            this.props.validacionFallida(mensaje);
            aux.className = "form-group has-error has-feedback";
            textSpanError = document.createTextNode(mensaje);
            spanError.appendChild(textSpanError);
            myMap.set(aux, mensaje);
        } else if (evt.target.name === "identificador" && !expresionIdentificadorMenos.test(evt.target.value)) {
            mensaje = "Caracter especial no permitido";
            this.props.validacionFallida(mensaje);
            aux.className = "form-group has-error has-feedback";
            textSpanError = document.createTextNode(mensaje);
            spanError.appendChild(textSpanError);
            myMap.set(aux, mensaje);
        } else if ((evt.target.name === "identificador" || evt.target.name === "nombre") && !expresionCantidadCaracter.test(evt.target.value)) {
            mensaje = "Solo se permiten 60 caracteres";
            this.props.validacionFallida(mensaje);
            aux.className = "form-group has-error has-feedback";
            textSpanError = document.createTextNode(mensaje);
            spanError.appendChild(textSpanError);
            myMap.set(aux, mensaje);
        } else if (evt.target.name === "nombre" && !expresionNombre.test(evt.target.value)) {
            mensaje = "Solo se permiten caracteres alfanumericos";
            this.props.validacionFallida(mensaje);
            aux.className = "form-group has-error has-feedback";
            textSpanError = document.createTextNode(mensaje);
            spanError.appendChild(textSpanError);
            myMap.set(aux, mensaje);
        } else {
            myMap.delete(aux);
            aux.className = "form-group";
            if (myMap.size == 0) {
                this.props.validacionExitosa();
            }
        }

        if (evt.target.name === "identificador") {
            evt.target.value = evt.target.value.toUpperCase();
        }
    }

    precioManualDetalles(item) {
        this.props.findDetailsPreciosManualDetalleFCP(item, this.props.fechaProceso);
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
        let id = this.props.idTipoPrecio;
        let nombreTipoPrecio = this.props.listaTipoPrecioManual.filter(function (val) {
            return val.id == parseInt(id);
        })


        return (
            <div>
                <div className="row">
                    <h2>Precios Manuales</h2>
                </div>
                {message}
                <br />
                <div className="form-inline form-group row">
                    <label><h3><span className="label label-default">Tipo Precio</span></h3></label>
                    &nbsp;&nbsp;&nbsp;
                    <select className="form-control" onChange={this.filterPriceType.bind(this, this)} ref="exampleRef">
                        <option value="0">------- Seleccione ------ </option>
                        {this.props.listaTipoPrecioManual.map((tipoPrecio) =>
                            <option key={tipoPrecio.id} value={tipoPrecio.id} >{tipoPrecio.descripcion}</option>
                        )}
                    </select>
                </div>
                <div id="precioManual" className="table-responsive row">
                    <form id="precioManualForm" onSubmit={this.savePrecioManual.bind(this)}>
                        <table id="precioManualTable" className="table table-bordered table-hover table-condensed">
                            <thead>
                                <tr>
                                    <th>Identificador</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody ref="precioManualBody">

                                {this.props.listaPrecioManualPorTipoPrecio.map((item) =>
                                    <tr key={item.id}>

                                        <td className="hidden" >
                                            <input type="text" className="form-control" defaultValue={item.id} />
                                        </td>

                                        <td id={item.identificador == '' ? item.id + "identificador" : item.id + item.identificador} className={isNaN(item.id) ? "form-group has-error has-feedback" : "form-group has-sucess has-feedback "}>
                                            <input id={item.identificador == '' ? item.id + "identificador" : item.id + item.identificador} type="text" className="form-control" name="identificador" defaultValue={item.identificador}
                                                onChange={this.fieldValidate.bind(this)} disabled={isNaN(item.id) ? false : true} />
                                        </td>
                                        <td id={item.nombre == '' ? item.id + "nombre" : item.id + item.nombre} className={isNaN(item.id) ? "form-group has-error has-feedback" : "form-group has-sucess has-feedback "} >
                                            <input id={item.nombre == '' ? item.id + "nombre" : item.id + item.nombre} type="text" className="form-control" name="nombre" defaultValue={item.nombre} onChange={this.fieldValidate.bind(this)} />
                                        </td>
                                        <td id={item.precio == '' ? item.id + "precio" : item.id + item.precio} className={isNaN(item.id) ? "form-group has-error has-feedback" : "form-group has-sucess has-feedback "}>
                                            <input id={item.precio == '' ? item.id + "precio" : item.id + item.precio}
                                              type="text" className="form-control text-right"
                                              name="precio" defaultValue={item.precio}
                                              onChange={this.fieldValidate.bind(this)} autoComplete="off"
                                              style={{paddingRight:"10px"}}
                                            />
                                        </td>
                                        <td className="hidden">
                                            <input type="text" className="form-control" defaultValue={item.tipoPrecio.id} />
                                        </td>
                                        <td className="hidden">
                                            <input type="text" className="form-control" defaultValue={item.fechaBaja} />
                                        </td>
                                        <td className="hidden">
                                            <input type="text" className="form-control" defaultValue={item.fechaAlta} />
                                        </td>

                                        <td>
                                            {item.tipoPrecio.nombre == "FONDOS_CAPITAL_PRIVADO" ?
                                                <div>
                                                    <button type="button" className="btn btn-default glyphicon glyphicon-list pull-left"
                                                        onClick={this.precioManualDetalles.bind(this, item)}
                                                        data-toggle="modal" data-target={"#myModalPreciosManualDetail"}
                                                        >

                                                    </button>
                                                    <button type="button" className="btn btn-danger glyphicon glyphicon-remove pull-right"
                                                        onClick={this.deleteRow.bind(this, item, nombreTipoPrecio)}
                                                        />
                                                </div> :
                                                <button type="button" className="btn btn-danger glyphicon glyphicon-remove center-block"
                                                    onClick={this.deleteRow.bind(this, item, nombreTipoPrecio)}
                                                    />
                                            }
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                        <button id="btnAddFactor" type="button" className="btn btn-info pull-left" onClick={() => this.newRow()} disabled={this.props.msg != "Ok" && this.props.msg != "" ? true : false}>
                            Adicionar
                         </button>
                        <button id="btnSavePrice" type="submit" className="btn btn-primary pull-right" disabled={this.props.msg == "Ok" ? false : true}>
                            Guardar
                        </button>

                    </form>
                </div>
                <Footer />
                <ModalPreciosManualDetalle />
            </div>);
    }
}
function mapStateToProps(state) {
    return {
        msg: state.validacionFallida.msg,
        listaTipoPrecioManual: state.listarTipoPrecioManual.listaTipoPrecioManual,
        listaPrecioManualPorTipoPrecio: state.tableDynamicPrecioManual.listPrecioManual,
        showAlertprocessTypesUpdated: state.tableDynamicPrecioManual.showAlertprocessTypesUpdated,
        sizeListPrecioManual: state.tableDynamicPrecioManual.listSize,
        idTipoPrecio: state.getIdTipoPrecio.idTipoPrecio,
        listPrecioManualOrigin: state.tableDynamicPrecioManual.listPrecioManualOrigin,
        fechaProceso: state.obtenerFechaProceso.fechaProceso
    }
}

export default connect(mapStateToProps, {
    validacionFallida, validacionExitosa, listarTipoPrecioManual,
    obtenerListaPrecioManualPorTipoPrecio, addItemPrecioManual, removeItemPrecioManual,
    saveItemPrecioManual, getIdTipoPrecio, ocultar, findDetailsPreciosManualDetalleFCP
})(PreciosManual)
