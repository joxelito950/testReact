import React, {Component} from 'react';
import AppBar from './navbar/appBar';
import { connect } from 'react-redux';
import {listarDCV, removeItemIsinDcv, addItemIsinDcv, validacionFallida,
        saveListIsinDcv, ocultar} from '../actions';
import {showMessage} from "../utils/utils";

let listInValidate = [];

class IsinDcv extends Component {

  componentDidMount() {
    this.props.validacionFallida("No puede guardar");
    this.props.listarDCV(this.props.processDate);
  }

  deleteDcv(dcv) {
    showMessage("Está seguro de inhabilitar el código?", "warning", this.props.removeItemIsinDcv,
      true, this.props.processDate, dcv
    );
  }

  handleChange(e) {
    let inputToValid = document.getElementById(e.target.id);
    e.target.id.includes("isin") ? e.target.value = e.target.value.toUpperCase() : e.target.value;
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
    } else if (isNaN(Number(e.target.value)) && e.target.id.includes("codigoEmisionDcv")) {
        this.props.validacionFallida("Sólo se admiten números");
        inputToValid.className="has-error";
        let textSpanError = document.createTextNode("Sólo se admiten números");
        spanError.appendChild(textSpanError);
        inputToValid.appendChild(spanError);
    } else if (Number(e.target.value) <= 0 && e.target.id.includes("codigoEmisionDcv")) {
        this.props.validacionFallida("Sólo se admiten números mayores que 0");
        inputToValid.className="has-error";
        let textSpanError = document.createTextNode("Sólo se admiten números mayores que 0");
        spanError.appendChild(textSpanError);
        inputToValid.appendChild(spanError);
    } else {
        inputToValid.className="has-success";
        let index = e.target.id.split("_", 1)[0];
        let property = e.target.id.includes("codigoEmisionDcv") ? "codigoEmisionDcv" : "isin";
        this.validateInList(index, property, e.target.value);
    }
  }

  validateInList(index, property, value) {
    listInValidate.find(item => item.id === index)[property] = value;
    this.validateEmptyInList(listInValidate);
  }

  validateEmptyInList(listDcv) {
    if (listDcv.filter(item => item.isin === "" || item.codigoEmisionDcv === "").length === 0) {
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
            "codigoEmisionDcv": typeof item.codigoEmisionDcv == "string" ?
              parseInt(item.codigoEmisionDcv) : item.codigoEmisionDcv,
            "fechaAlta": this.props.processDate,
            "id": (isNaN(item.id)?null:item.id),
            "isin": item.isin
          }
        );
      }
    );
    this.props.saveListIsinDcv(newListToSave, this.props.processDate);
  }

  drawRows() {
    return this.props.listDcv.map(item => {
        return(
            <tr key={item.id}>
              <td id={item.id+"_isin"} className={isNaN(item.id) ? "has-error" : "has-success"}>
                <input type="text " className="form-control" defaultValue={item.isin}
                  id={item.id+"_isin"}
                  onChange={this.handleChange.bind(this)}
                  disabled={isNaN(item.id) ? false : true}
                  style={{'textTransform':'uppercase'}}
                />
              </td>
              <td id={item.id+"_codigoEmisionDcv"} className={isNaN(item.id) ? "has-error" : "has-success"}>
                <input type="text" className="form-control text-right" defaultValue={item.codigoEmisionDcv}
                    id={item.id+"_codigoEmisionDcv"}
                    onChange={this.handleChange.bind(this)}
                    style={{paddingRight:"10px"}}
                    disabled={isNaN(item.id) ? false : true}
                />
              </td>
              <td>
                <button type="button" className="btn btn-danger btn-xs glyphicon glyphicon-remove center-block"
                  onClick={this.deleteDcv.bind(this, item)}
                />
              </td>
            </tr>
        );
      }
    );
  }

  render() {
    listInValidate = this.props.listDcv;
    if(this.props.listSaved) {
      showMessage("Registros Guardados", "success", this.props.ocultar, false);
    }
    return (
      <div id="optionsFactors">
        <div className="row">
          <h2>Códigos de Emisión DCV</h2>
        </div>
        <div id="codesEmisionList" className="table-responsive col-md-4 col-md-offset-4 row">
          <form onSubmit={this.saveList.bind(this)}>
            <table id="codesEmisionTable" className="table table-bordered table-hover table-condensed">
  		        <thead>
  		          <tr>
  		            <th>ISIN</th>
                  <th>Código Emisión</th>
  		          </tr>
  		        </thead>
  		        <tbody ref="isinsDcvBody">
                {this.drawRows()}
  		        </tbody>
  		      </table>
            <button id="btnAddIsinDcv" type="button" className="btn btn-info pull-left"
              onClick={() => {this.props.addItemIsinDcv(this.props.listSize)}}
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    processDate: state.obtenerFechaProceso.fechaProceso,
    listDcv: state.codigosDcv.list,
    listSize: state.codigosDcv.listSize,
    validationMsg: state.validacionFallida.msg,
    listSaved: state.codigosDcv.listSaved
  }
}

export default connect(mapStateToProps, {listarDCV, removeItemIsinDcv,
                                          addItemIsinDcv, validacionFallida,
                                          saveListIsinDcv, ocultar})(IsinDcv)
