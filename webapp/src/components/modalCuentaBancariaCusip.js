import React, {Component} from 'react';
import { connect } from 'react-redux';
import {deleteSonAccountBankCusip, addSonAccountBankCusip, saveSonsAccountBankCusip,
        updateListSonsAccountBankCusip, validacionFallida, showAlertProgress} from '../actions';
import Moment from 'moment';
import {showMessage} from "../utils/utils";

let myMapValidation = new Map();

class ModalCuentaBancariaCusip extends Component {
    
    deleteSonCuentaBancariaCusip(cuentaBancariaCusip) {
        if(isNaN(cuentaBancariaCusip.id)) {
            this.props.deleteSonAccountBankCusip(cuentaBancariaCusip);
        } else {
            showMessage("Está seguro de eliminar?", "warning", this.props.deleteSonAccountBankCusip,
                true, cuentaBancariaCusip
            )
        }
    } 

    drawRows() {
        return this.props.listSons.map(item => {
            return(
                <tr key={item.id}>
                <td id={"field"+item.id} className={isNaN(item.id)?"has-error":"has-success"}>
                    <input type="text" id={"id"+item.id} className="form-control text-uppercase" 
                        disabled={isNaN(item.id) ? false : true} 
                        defaultValue={item.cusipGarantia} 
                        maxLength="9"
                        onChange={this.updateListSons.bind(this, "id"+item.id, item, "field"+item.id)}
                    />
                </td>
                <td>
                <button type="button" className="btn btn-danger glyphicon glyphicon-remove center-block"
                    onClick={() => this.deleteSonCuentaBancariaCusip(item)}
                />
                </td>
            </tr>
            );
        });
    }

    updateListSons(idValue, item, idField) {
        let field = document.getElementById(idValue);
        let fieldDiv = document.getElementById(idField);
        if(this.validateFieldFail(field, fieldDiv)) {
            myMapValidation.set(item.id, field.value);
            return;
        } else {
            myMapValidation.delete(item.id);
        }
        this.reviewMapValidation();
        this.props.updateListSonsAccountBankCusip(field.value, item);
    }

    reviewMapValidation() {
        if(myMapValidation.size == 0) {
            this.props.validacionFallida("Ok");
        } else {
            this.props.validacionFallida("Wrong");      
        }
    }

    deleteMsgNodeError(fieldDiv) {
        if(fieldDiv.childNodes.length > 1) {
            fieldDiv.removeChild(fieldDiv.childNodes[1]);
        }
    }

    validateFieldFail(field, fieldDiv) {
        let result = false;
        let regex = /^[a-zA-Z0-9]+$/;
        let regexLenght = /^.{9}$/;
        if(!field.value) {
            this.drawValidation("No se permiten campos vacíos", fieldDiv);
            result = true;
        } else if (!regexLenght.test(field.value)) {
            this.drawValidation("El Cusip debe contener 9 dígitos", fieldDiv);
            result = true;            
        } else if (!regex.test(field.value)) {
            this.drawValidation("Sólo se permiten letras y números", fieldDiv);
            result = true;
        } else if(this.validateExistInList(field.value.toUpperCase())) {
            this.drawValidation("Ya se encuentra éste Cusip en la lista", fieldDiv);
            result = true;
        } else {
            this.deleteMsgNodeError(fieldDiv);
            fieldDiv.className="has-success";
        }

        return result;
    }

    validateExistInList(value) {
        let result = false;
        let exist = this.props.listSons.find(item => item.cusipGarantia === value);
        if(exist != null) {
            result = true;
        }
        return result;
    }

    drawValidation(msgError, fieldDiv) {
        this.deleteMsgNodeError(fieldDiv);
        let spanError = document.createElement("span");
        this.props.validacionFallida(msgError);
        fieldDiv.className="has-error";
        let textSpanError = document.createTextNode(msgError);
        spanError.appendChild(textSpanError);
        fieldDiv.appendChild(spanError);
    }

    guardarCuentasBancariasCusip(e) {
        e.preventDefault();
        this.props.showAlertProgress(true);
        this.props.saveSonsAccountBankCusip(this.props.listSons, this.props.cusipPadre);
    }

    render() {
        if(this.props.itemSaved) {
            showMessage("Guardado exitosamente", "success", () => {}, false);
        }
        return(
        <div id="myModalCuentaBancariaCusip" className="modal fade" role="dialog">
            <form onSubmit={this.guardarCuentasBancariasCusip.bind(this)}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">
                            Detalles {this.props.cusipPadre} / {Moment(this.props.processDate).format("YYYY-MM-DD")}
                            </h4>
                        </div>
                        <div className="modal-body">
                            <div className="table-responsive">
                                <br />
                                <table className="table table-bordered table-hover table-condensed">
                                    <thead className="fontSizeHeader">
                                    <tr>
                                        <th>Cusip Garantía</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody ref="listSonsBody" className="fontSizeDetail">
                                        {this.drawRows()}
                                    </tbody>
                                </table>
                                <button type="button" className="btn btn-info btnCircle btn-sm pull-left"
                                onClick={() => {this.props.addSonAccountBankCusip()}}
                                >
                                    <i className="glyphicon glyphicon-plus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary pull-left" disabled={this.props.msg === 'Ok' ? false : true}>Guardar</button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    cusipPadre: state.cuentasBancarias.cusipPadre,
    processDate: state.obtenerFechaProceso.fechaProceso,
    listSons: state.cuentasBancarias.listSons,
    sizeListSons: state.cuentasBancarias.listSizeSons,
    msg: state.validacionFallida.msg,
    itemSaved: state.cuentasBancarias.itemSaved
  }
}

export default connect(mapStateToProps, {deleteSonAccountBankCusip, addSonAccountBankCusip,
                                         saveSonsAccountBankCusip,updateListSonsAccountBankCusip,
                                         validacionFallida, showAlertProgress
                                        })(ModalCuentaBancariaCusip)
