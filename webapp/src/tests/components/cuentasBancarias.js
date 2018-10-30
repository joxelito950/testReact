import React, {Component} from 'react';
import AppBar from './navbar/appBar';
import { connect } from 'react-redux';
import {listarCuentasBancarias, validacionFallida, addItemCuentaBancaria,
        obtenerListaParametrosPortafolio, saveListCuentasBancarias,
        ocultar, removeCuentaBancaria, findSonsAccountBankCusip} from '../actions';
import {showMessage} from "../utils/utils";
import ModalCuentaBancariaCusip from './modalCuentaBancariaCusip';

let listInValidate = [];

class CuentasBancarias extends Component {

  componentDidMount() {
    this.props.validacionFallida("No puede guardar");
    this.props.obtenerListaParametrosPortafolio();
  }

  obtenerCuentasBancariasPorPortafolio(portafolio) {
    this.props.listarCuentasBancarias(this.props.processDate, this.refs.portafolioRef.value);
  }

  deleteCuentaBancaria(cuentaBancaria) {
    showMessage("Está seguro de inhabilitar la Cuenta?", "warning", this.props.removeCuentaBancaria,
      true, this.props.processDate, cuentaBancaria, this.refs.portafolioRef.value
    );
  }

  cuentaBancariasCusipDetalles(cusipPadre) {
    this.props.findSonsAccountBankCusip(cusipPadre);
}

  drawRows() {
    return this.props.listCuentasBancarias.map(item => {
        return(
            <tr key={item.id}>
              <td id={item.id+"_cusip"} className={isNaN(item.id) ? "has-error" : "has-success"}>
                <input type="text" className="form-control" defaultValue={item.cusip}
                    id={item.id+"_cusip"}
                    onChange={this.handleChange.bind(this)}
                    disabled={isNaN(item.id) ? false : true}
                    style={{'textTransform':'uppercase'}}
                    maxLength="9"
                />
              </td>
              <td id={item.id+"_nombre"} className={isNaN(item.id) ? "has-error" : "has-success"}>
                <input type="text" className="form-control" defaultValue={item.nombre}
                    id={item.id+"_nombre"}
                    onChange={this.handleChange.bind(this)}
                />
              </td>
              <td id={item.id+"_numeroCuenta"} className={isNaN(item.id) ? "has-error" : "has-success"}>
                <input type="text" className="form-control text-right" defaultValue={item.numeroCuenta}
                    id={item.id+"_numeroCuenta"}
                    onChange={this.handleChange.bind(this)}
                    style={{paddingRight:"10px"}}
                />
              </td>
              <td>
                <button type="button" className="btn btn-default glyphicon glyphicon-list pull-left"
                  onClick={this.cuentaBancariasCusipDetalles.bind(this, item.cusip)}
                  data-toggle="modal" data-target={"#myModalCuentaBancariaCusip"}
                />
                <button type="button" className="btn btn-danger glyphicon glyphicon-remove center-block"
                  onClick={this.deleteCuentaBancaria.bind(this, item)}
                />                
              </td>             
            </tr>
        );
      }
    );
  }

  handleChange(e) {
    let inputToValid = document.getElementById(e.target.id);
    let expresionNumeroCuenta = /^[A-Z0-9-]+$/;
    let regexLenght = /^.{9}$/;
    e.target.id.includes("cusip") ? e.target.value = e.target.value.toUpperCase() : e.target.value;
    if(inputToValid.childNodes.length > 1) {
        inputToValid.removeChild(inputToValid.childNodes[1]);
    }
    let spanError = document.createElement("span");
    if (!e.target.value) {
        this.props.validacionFallida("No se admiten campos vacíos");
        inputToValid.className="has-error";
        let textSpanError = document.createTextNode("No se admiten campos vacíos");
        spanError.appendChild(textSpanError);
        inputToValid.appendChild(spanError);
    } else if (!regexLenght.test(e.target.value) && e.target.id.includes("cusip")) { 
        this.props.validacionFallida("El Cusip debe contener 9 dígitos.");
        inputToValid.className="has-error";
        let textSpanError = document.createTextNode("El Cusip debe contener 9 dígitos");
        spanError.appendChild(textSpanError);
        inputToValid.appendChild(spanError);
    } else if(!expresionNumeroCuenta.test(e.target.value) && e.target.id.includes("numeroCuenta")) {
        this.props.validacionFallida("Sólo se permiten números y guiones.");
        inputToValid.className="has-error";
        let textSpanError = document.createTextNode("Sólo se permiten números y guiones.");
        spanError.appendChild(textSpanError);
        inputToValid.appendChild(spanError);
    } else {
        inputToValid.className="has-success";
        let index = e.target.id.split("_", 1)[0];
        let property = e.target.id.includes("cusip") ?
          "cusip" : e.target.id.includes("nombre") ?
          "nombre" : "numeroCuenta";
        this.validateInList(index, property, e.target.value);
    }
  }

  validateInList(index, property, value) {
    listInValidate.find(item => item.id == index)[property] = value;
    this.validateEmptyInList(listInValidate);
  }

  validateEmptyInList(listCuentas) {
    if (listCuentas.filter(item => item.cusip === "" || item.nombre === "" || item.numeroCuenta === "")
          .length === 0) {
      this.props.validacionFallida("Ok");
    } else {
      this.props.validacionFallida("Existen campos vacíos");
    }
  }

  saveList(event) {
    event.preventDefault();
    let newListToSave = [];
    listInValidate.map(item => {
        newListToSave.push(
          {
            "codigoPortafolio": item.codigoPortafolio,
            "cusip": item.cusip,
            "fechaAlta": typeof item.fechaAlta == 'undefined' ? this.props.processDate : item.fechaAlta,
            "id": (isNaN(item.id)?null:item.id),
            "nombre": item.nombre,
            "numeroCuenta": item.numeroCuenta
          }
        );
      }
    );
    this.props.saveListCuentasBancarias(newListToSave, this.props.processDate, this.refs.portafolioRef.value);
  }

  render() {
    listInValidate = this.props.listCuentasBancarias;
    if(this.props.listSaved) {
      showMessage("Registros Guardados", "success", this.props.ocultar, false);
    }
    return (
      <div id="cuentasBancarias">
        <div className="row">
          <h2>Cuentas Bancarias</h2>
        </div>
        <div className="form-inline form-group row">
            <label><h3><span className="label label-default">Portafolios</span></h3></label>
            &nbsp;&nbsp;&nbsp;
            <select className="form-control"
              onChange={this.obtenerCuentasBancariasPorPortafolio.bind(this)} ref="portafolioRef"
            >
              <option value={this.props.portafolio} className="label label-primary">
                {this.props.portafolio !== "" ? this.props.portafolio : "------- Seleccione ------"}
              </option>
              {this.props.listaPortafolios.map(item =>
                  <option key={item.id} value={item.codigoPortafolio} >{item.codigoPortafolio}</option>
              )}
            </select>
        </div>
        <div id="cuentasBancariasList" className="table-responsive col-md-8 col-md-offset-2 row">
          <form onSubmit={this.saveList.bind(this)}>
            <table id="cuentasBancariasTable" className="table table-bordered table-hover table-condensed">
  		        <thead>
  		          <tr>
                  <th>CUSIP</th>
                  <th>Nombre</th>
                  <th>Número Cuenta</th>
                  <th>Opciones</th>
  		          </tr>
  		        </thead>
  		        <tbody ref="cuentasBancariasBody">
                {this.drawRows()}
  		        </tbody>
  		      </table>
            <button id="btnAddCuentaBancaria" type="button" className="btn btn-info pull-left"
              onClick={() => {this.props.addItemCuentaBancaria(this.props.listSize, this.refs.portafolioRef.value)}}
            >
              Adicionar
            </button>
            <button id="btnSaveFactors" type="submit" className="btn btn-primary pull-right"
              disabled={this.props.validationMsg === "Ok" ? false : true}
            >
              Guardar
            </button>
          </form>
        </div>
        <ModalCuentaBancariaCusip />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    processDate: state.obtenerFechaProceso.fechaProceso,
    listCuentasBancarias: state.cuentasBancarias.list,
    listSize: state.cuentasBancarias.listSize,
    validationMsg: state.validacionFallida.msg,
    listaPortafolios: state.tableDynamicParametroPortafolio.listaParametro,
    listSaved: state.cuentasBancarias.listSaved,
    portafolio: state.cuentasBancarias.portafolio
  }
}

export default connect(mapStateToProps, {listarCuentasBancarias,
                                          validacionFallida, addItemCuentaBancaria,
                                          obtenerListaParametrosPortafolio,
                                          saveListCuentasBancarias, ocultar,
                                          removeCuentaBancaria,
                                          findSonsAccountBankCusip})(CuentasBancarias)
