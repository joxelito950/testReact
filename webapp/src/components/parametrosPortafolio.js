import React, { Component } from 'react';
import AppBar from './navbar/appBar';
import Footer from './footer';
import { connect } from 'react-redux';
import {
    validacionFallida, validacionExitosa,obtenerListaParametrosPortafolio,addItemParametrosPortafolio,
    removeItemParametroPortafolio,guardarParametroPortafolio,ocultar,obtenerFechaProceso
} from '../actions';
import 'sweetalert2/dist/sweetalert2.min.css';
import { default as swal } from 'sweetalert2';
import {showMessage} from '../utils/utils';

let myMap = new Map();

class ParametrosPortafolio extends Component {

    componentDidMount() {
        this.props.validacionFallida("");
        this.props.obtenerListaParametrosPortafolio();
    }

    newRow() {
        let mensaje = "No se admiten campos vacíos";
            this.props.validacionFallida(mensaje);
        this.props.addItemParametrosPortafolio(this.props.sizeListFactors, this.props.listaParametrosPortafolio);
    }

    saveParametroPortafolio(event) {
        event.preventDefault();
        let filas = [...this.refs.parametrosPortafolioBody.getElementsByTagName("tr")];
        let inputs = [];
        filas.map(item => {
            inputs.push([...item.getElementsByTagName("input")]);
        }
        );
        
        let newListParametros = [];
        inputs.map(item => {
            newListParametros.push({"id": (isNaN(item[0].value)?null:item[0].value) , "codigoNegocio":item[1].value, "codigoPortafolio":item[2].value, "nombrePortafolio":item[3].value,
            "codigoLineaNegocio":item[4].value , "codigoLineaProducto":item[5].value , "codigoAlternativa":item[6].value , "codigoContabilidad":item[7].value,
        "cuentaDepositoCentralValores":item[8].value,"cuentaDeceval":item[9].value, "fechaAlta":item[10].value, "sujetoRetencion":item[12].checked});
        }
        );
        this.props.guardarParametroPortafolio(newListParametros,"save",this.props.fechaProceso);
        this.props.validacionExitosa();
    }

  validateField(evt) {

    let aux = document.getElementById(evt.target.id);
   if(aux.childNodes.length > 1) {
        aux.removeChild(aux.childNodes[1]);
    }
    let spanError = document.createElement("span");
    let mensaje = '';
    let index;
    let textSpanError = '';
    let cantidadCaracterCodigoPortafolio = /^.{1,10}$/;
    let cantidadCaracterNombrePortafolio = /^.{1,60}$/;
    let cantidadCaracterCodigoNegocio = /^.{1,3}$/;
    let cantidadCaracterCodigo = /^.{1,19}$/;


        if (!evt.target.value) {
            mensaje = "No se admiten campos vacíos";
            index = 1;
            this.props.validacionFallida(mensaje);
            aux.className="form-group has-error has-feedback";
            textSpanError = document.createTextNode(mensaje);
            spanError.appendChild(textSpanError);
            myMap.set(aux,mensaje);
        } else if (evt.target.name !=="codigoNegocio" && evt.target.name !=="codigoPortafolio"
                && evt.target.name !=="nombrePortafolio"  && isNaN(Number(evt.target.value)) 
                && evt.target.name !=="sujetoRetencion") {
            mensaje = "Sólo se admiten números";
            index = 2;
            this.props.validacionFallida(mensaje);
            aux.className="form-group has-error has-feedback";
            textSpanError = document.createTextNode(mensaje);
            spanError.appendChild(textSpanError);
            myMap.set(aux,mensaje);
        } else if ((evt.target.name ==="codigoNegocio" || evt.target.name ==="codigoPortafolio"
                || evt.target.name ==="nombrePortafolio" ) && !isNaN(Number(evt.target.value))) {
            mensaje = "No se admiten números";
            index = 3;
            this.props.validacionFallida(mensaje);
            aux.className="form-group has-error has-feedback";
            textSpanError = document.createTextNode(mensaje);
            spanError.appendChild(textSpanError);
            myMap.set(aux,mensaje);
        }  else if(!isNaN(Number(evt.target.value )) && evt.target.value %1!=0 ){
            mensaje = "No se admiten números decimales";
            index = 4;
            this.props.validacionFallida(mensaje);
            aux.className="form-group has-error has-feedback";
            textSpanError = document.createTextNode(mensaje);
            spanError.appendChild(textSpanError);
            myMap.set(aux,mensaje);
        }else if (Number(evt.target.value) < 0 ) {
            mensaje = "Sólo se admiten valores mayores o iguales a 0";
            index = 5;
            this.props.validacionFallida(mensaje);
            aux.className="form-group has-error has-feedback";
            textSpanError = document.createTextNode(mensaje);
            spanError.appendChild(textSpanError);
            myMap.set(aux,mensaje);
        }else if ((evt.target.name === "nombrePortafolio") && !cantidadCaracterNombrePortafolio.test(evt.target.value)) {
            mensaje = "Solo se permiten 60 caracteres";
            this.props.validacionFallida(mensaje);
            aux.className = "form-group has-error has-feedback";
            textSpanError = document.createTextNode(mensaje);
            spanError.appendChild(textSpanError);
            myMap.set(aux, mensaje);
        }else if ((evt.target.name === "codigoNegocio") && !cantidadCaracterCodigoNegocio.test(evt.target.value)) {
            mensaje = "Solo se permiten 3 caracteres";
            this.props.validacionFallida(mensaje);
            aux.className = "form-group has-error has-feedback";
            textSpanError = document.createTextNode(mensaje);
            spanError.appendChild(textSpanError);
            myMap.set(aux, mensaje);
        }
        else if (((evt.target.name === "codigoLineaNegocio") || (evt.target.name === "codigoAlternativa")
                  || (evt.target.name === "codigoLineaProducto") ||(evt.target.name === "codigoContabilidad")
        ||(evt.target.name === "cuentaDeceval") || (evt.target.name === "cuentaDepositoCentralValores"))
                  && !cantidadCaracterCodigo.test(evt.target.value)) {
            mensaje = "Solo se permiten 18 caracteres";
            this.props.validacionFallida(mensaje);
            aux.className = "form-group has-error has-feedback";
            textSpanError = document.createTextNode(mensaje);
            spanError.appendChild(textSpanError);
            myMap.set(aux, mensaje);
        }
        else if(evt.target.name==="sujetoRetencion"){
            this.props.validacionExitosa();        
        }else {
             myMap.delete(aux);
             aux.className="form-group has-success has-feedback";
             if(myMap.size == 0) {
                this.props.validacionExitosa();
            }
        }

        if(evt.target.name === "codigoNegocio" || evt.target.name === "codigoPortafolio"){
            evt.target.value =  evt.target.value.toUpperCase();
        }

  };
  deleteRow(item){
      showMessage("¿Está seguro que quiere eliminar el parámetro?", "warning",
        this.props.removeItemParametroPortafolio, true, item, this.props.fechaProceso);
  }

    render(){

        let message;
        if (this.props.msg != "Ok" && this.props.msg != "") {
            message = (
                <div className="panel panel-danger">
                    <div className="panel-heading">{this.props.msg}</div>
                </div>
            );
        }
        if(this.props.showAlertprocessTypesUpdated) {
        swal({
            title: 'Spirit',
            text: "Registros guardados",
            type: 'success',
            confirmButtonColor: '#337ab7',
            confirmButtonText: 'Aceptar',
            allowEscapeKey:false,
            allowOutsideClick:false,
            width: 400
        }).then(() => this.props.ocultar())
        }
        return(
            <div>
                <div className="row">
                    <h2>Parámetros Portafolio</h2>
                </div>
                {message}
                <br/>
                  <div id="parametrosPortafolio" className="table-responsive row">
                    <form id="parametrosPortafolioForm" onSubmit={this.saveParametroPortafolio.bind(this)}>
                        <table id="parametrosPortafolioTable" className="table table-bordered table-hover table-condensed">
                            <thead>
                                <tr>
                                    <th>Código Negocio</th>
                                    <th>Código Portafolio</th>
                                    <th>Nombre Portafolio</th>
                                    <th>Código Linea  Negocio</th>
                                    <th>Código Linea Producto</th>
                                    <th>Código Alternativa</th>
                                    <th>Código Contabilidad</th>
                                    <th>Cuenta DCV</th>
                                    <th>Código DEC</th>
                                    <th>Sujeto a retención</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody ref="parametrosPortafolioBody">
                               { this.props.listaParametros.map((item) =>
                                <tr key={item.id}>
                                     <td  className="hidden" >
                                        <input type="text" className="form-control"  defaultValue={item.id} />
                                    </td>

                                    <td id={item.codigoNegocio==''?item.id+"codigoNegocio":item.id+item.codigoNegocio} className={isNaN(item.id)?"form-group has-error has-feedback":"form-group has-sucess has-feedback "} >
                                        <input id={item.codigoNegocio==''?item.id+"codigoNegocio":item.id+item.codigoNegocio} type="text"  className="form-control input-sm"  name="codigoNegocio"
                                        defaultValue={item.codigoNegocio}  disabled={isNaN(item.id)?false:true} placeholder="Cód.Negocio"  onChange={this.validateField.bind(this)}/>
                                    </td>
                                    <td id={item.codigoPortafolio==''?item.id+"codigoPortafolio":item.id+item.codigoPortafolio} className={isNaN(item.id)?" col-md-2  form-group has-error has-feedback":" col-md-2 form-group has-sucess has-feedback "} >
                                        <input id={item.codigoPortafolio==''?item.id+"codigoPortafolio":item.id+item.codigoPortafolio} type="text" className="form-control input-sm" name="codigoPortafolio"
                                        defaultValue={item.codigoPortafolio} disabled={isNaN(item.id)?false:true}  placeholder="Cód.Portafolio" onChange={this.validateField.bind(this)}/>
                                    </td>
                                    <td id={item.nombrePortafolio==''?item.id+"nombrePortafolio":item.id+item.nombrePortafolio}  className={isNaN(item.id)?" col-md-2 form-group has-error has-feedback":" col-md-2 form-group has-sucess has-feedback "}>
                                        <input id={item.nombrePortafolio==''?item.id+"nombrePortafolio":item.id+item.nombrePortafolio}  type="text" className="form-control input-sm" name="nombrePortafolio"
                                        defaultValue={item.nombrePortafolio}  placeholder="Nombre Portafolio" onChange={this.validateField.bind(this)}/>
                                    </td>

                                    <td id={item.codigoLineaNegocio==''?item.id+"codigoLineaNegocio":item.id+item.codigoLineaNegocio} className={isNaN(item.id)?"form-group has-error has-feedback":"form-group has-sucess has-feedback "} >
                                        <input id={item.codigoLineaNegocio==''?item.id+"codigoLineaNegocio":item.id+item.codigoLineaNegocio}  type="text" className="form-control input-sm text-right" name="codigoLineaNegocio"
                                         defaultValue={item.codigoLineaNegocio} disabled={isNaN(item.id)?false:true} placeholder="Cód.Linea Negocio" onChange={this.validateField.bind(this)} style={{paddingRight:"10px"}} />
                                    </td>
                                    <td id={item.codigoLineaProducto==''?item.id+"codigoLineaProducto":item.id+item.codigoLineaProducto} className={isNaN(item.id)?"form-group has-error has-feedback":"form-group has-sucess has-feedback "} >
                                        <input id={item.codigoLineaProducto==''?item.id+"codigoLineaProducto":item.id+item.codigoLineaProducto}  type="text" className="form-control input-sm col-md-1 text-right" name="codigoLineaProducto"
                                        defaultValue={item.codigoLineaProducto} disabled={isNaN(item.id)?false:true} placeholder="Cód.Linea Producto" onChange={this.validateField.bind(this)} style={{paddingRight:"10px"}} />
                                    </td>
                                    <td id={item.codigoAlternativa==''?item.id+"codigoAlternativa":item.id+item.codigoAlternativa} className={isNaN(item.id)?"form-group has-error has-feedback":"form-group has-sucess has-feedback "} >
                                        <input id={item.codigoAlternativa==''?item.id+"codigoAlternativa":item.id+item.codigoAlternativa}  type="text" className="form-control input-sm text-right" name="codigoAlternativa"
                                         defaultValue={item.codigoAlternativa} disabled={isNaN(item.id)?false:true} placeholder="Cód.Alternativa" onChange={this.validateField.bind(this)} style={{paddingRight:"10px"}} />
                                    </td>
                                    <td id={item.codigoContabilidad==''?item.id+"codigoContabilidad":item.id+item.codigoContabilidad} className={isNaN(item.id)?"form-group has-error has-feedback":"form-group has-sucess has-feedback "} >
                                        <input id={item.codigoContabilidad==''?item.id+"codigoContabilidad":item.id+item.codigoContabilidad}  type="text" className="form-control input-sm text-right" name="codigoContabilidad"
                                        defaultValue={item.codigoContabilidad} disabled={isNaN(item.id)?false:true} placeholder="Cód.Contabilidad" onChange={this.validateField.bind(this)} style={{paddingRight:"10px"}} />
                                    </td>
                                    <td id={item.cuentaDepositoCentralValores==''?item.id+"cuentaDepositoCentralValores":item.id+item.cuentaDepositoCentralValores} className={isNaN(item.id)?"form-group has-error has-feedback":"form-group has-sucess has-feedback "} >
                                        <input id={item.cuentaDepositoCentralValores==''?item.id+"cuentaDepositoCentralValores":item.id+item.cuentaDepositoCentralValores}  type="text" className="form-control input-sm text-right" name="cuentaDepositoCentralValores"
                                         defaultValue={item.cuentaDepositoCentralValores} placeholder="Cta.DCV" onChange={this.validateField.bind(this)} style={{paddingRight:"10px"}} />
                                    </td>
                                    <td id={item.cuentaDeceval==''?item.id+"cuentaDeceval":item.id+item.cuentaDeceval} className={isNaN(item.id)?"form-group has-error has-feedback":"form-group has-sucess has-feedback "} >
                                        <input id={item.cuentaDeceval==''?item.id+"cuentaDeceval":item.id+item.cuentaDeceval}  type="text" className="form-control input-sm text-right" name="cuentaDeceval"

                                        defaultValue={item.cuentaDeceval} placeholder="Cta.DEC" onChange={this.validateField.bind(this)} style={{paddingRight:"10px"}} />
                                    </td>

                                     <td  className="hidden">
                                        <input type="text" className="form-control" defaultValue={item.fechaAlta} />
                                    </td>
                                     <td  className="hidden">
                                        <input type="text" className="form-control"  />
                                    </td>
                                    <td id={item.sujetoRetencion==''?item.id+"sujetoRetencion":item.id+item.sujetoRetencion}>
                                        <input id={item.sujetoRetencion==''?item.id+"sujetoRetencion":item.id+item.sujetoRetencion} type = "checkbox" name = "sujetoRetencion" defaultChecked = {item.sujetoRetencion} onChange={this.validateField.bind(this)} />
                                    </td>
                                    <td>
                                    <button type="button" className="btn btn-danger btn-xs glyphicon glyphicon-remove center-block"
                                        onClick={() => this.deleteRow(item)} />
                                    </td>
                                </tr>
                             )}
                            </tbody>
                        </table>
                        <button id="btnAddFactor" type="button" className="btn btn-primary pull-left" onClick={() => this.newRow()} disabled={this.props.msg != "Ok" && this.props.msg != "" ? true : false}>
                            Adicionar
                         </button>
                        <button id="btnSaveFactors" type="submit" className="btn btn-primary pull-right" disabled={this.props.msg == "Ok" ? false : true}>
                            Guardar
                        </button>
                    </form>

                </div>
                <br/>

                  {message}
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
         msg: state.validacionFallida.msg,
         listaParametros: state.tableDynamicParametroPortafolio.listaParametro,
         showAlertprocessTypesUpdated: state.tableDynamicParametroPortafolio.showAlertprocessTypesUpdated,
         sizeListFactors: state.tableDynamicParametroPortafolio.listSize,
         accion: state.tableDynamicParametroPortafolio.accion,
         fechaProceso: state.obtenerFechaProceso.fechaProceso,
    }
}

export default connect(mapStateToProps, {  validacionFallida, validacionExitosa,obtenerListaParametrosPortafolio,addItemParametrosPortafolio,
                                          removeItemParametroPortafolio,guardarParametroPortafolio,ocultar,obtenerFechaProceso })(ParametrosPortafolio)
