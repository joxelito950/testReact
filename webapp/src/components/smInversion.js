import React, {Component} from 'react';
import AppBar from './navbar/appBar';
import Control from './control';
import { connect } from 'react-redux';
import {listSmInversion, updateSmInversion, ocultar} from '../actions';
import {showMessage, convertDateToMilliseconds} from "../utils/utils";

class SmInversiones extends Component {

  updateSmInversion(event) {
    event.preventDefault();
    let smInversion = this.props.smInversion;
    smInversion.claseInversion = document.getElementById("claseInversion").value.toUpperCase();
    smInversion.codigoEmisor = document.getElementById("codigoEmisor").value.toUpperCase();
    smInversion.isin = document.getElementById("isin").value.toUpperCase();
    smInversion.clientId = document.getElementById("clientId").value.toUpperCase();
    smInversion.nemotecnico = document.getElementById("nemotecnico").value.toUpperCase();
    smInversion.tipoOpcion = document.getElementById("tipoOpcion").value.toUpperCase();
    smInversion.opClasificacion = document.getElementById("opClasificacion").value.toUpperCase();

    let count = 0;

    for (var [key, value] of this.validateObject(smInversion)) {
      let inputToValid = document.getElementById(key+"Div");
      if(value !== "") {
        count += 1;
        if(inputToValid.childNodes.length == 1) {
          inputToValid.className="col-sm-7 has-error";
          let spanError = document.createElement("span");
          let textSpanError = document.createTextNode(value);
          spanError.appendChild(textSpanError);
          inputToValid.appendChild(spanError);
        }
      } else {
        if(inputToValid.childNodes.length > 1) {
          inputToValid.removeChild(inputToValid.childNodes[1]);
        }
        inputToValid.className="col-sm-7";
      }
    }

    if(count == 0) {
      this.props.updateSmInversion(smInversion);
    }

  }

  validateObject(smInversion) {
    let myMap = new Map();
    this.validateField(smInversion.claseInversion, /^[a-zA-Z0-9]*$/) ?
      myMap.set("claseInversion", "") : myMap.set("claseInversion", "Sólo se admiten números y letras");
    this.validateField(smInversion.codigoEmisor, /^[a-zA-Z0-9]*$/) ?
      myMap.set("codigoEmisor", "") : myMap.set("codigoEmisor", "Sólo se admitem números y letras");
    this.validateField(smInversion.isin, /^[a-zA-Z0-9]*$/) ?
      myMap.set("isin", "") : myMap.set("isin", "Sólo se admiten números y letras");
    this.validateField(smInversion.clientId, /^[a-zA-Z0-9-]*$/) ?
      myMap.set("clientId", "") : myMap.set("clientId", "Sólo se admiten números, letras y guiones");
    this.validateField(smInversion.nemotecnico, /^[a-zA-Z0-9]*$/) ?
      myMap.set("nemotecnico", "") : myMap.set("nemotecnico", "Sólo se admiten números y letras");
    this.validateField(smInversion.tipoOpcion, /^[a-zA-Z]*$/) ?
      myMap.set("tipoOpcion", "") : myMap.set("tipoOpcion", "Sólo se admiten letras");
    this.validateField(smInversion.opClasificacion, /^[a-zA-Z0-9]*$/) ?
      myMap.set("opClasificacion", "") : myMap.set("opClasificacion", "Sólo se admiten números y letras");


    return myMap;
  }

  validateField(field, regex) {
    return regex.test(field);
  }

  render() {
    if(this.props.isUpdate) {
      showMessage("Registro Guardado", "success", this.props.ocultar, false);
    }
    return(
      <div id="smInversiones">
        <Control showProcess={this.props.listSmInversion}
          dateProcess={this.props.cusip} isText={true}
          isGenerate={false} isSearch={true} placeholderSearch="CUSIP"
          title="Actualizar SM Inversiones" />
        <br />
        <form className="form-horizontal col-md-4 col-md-offset-4 row"
          onSubmit={this.updateSmInversion.bind(this)}
        >
          <div className="form-group">
            <label htmlFor="smGrupo" className="col-sm-5 control-label">SM GRUPO:</label>
            <div className="col-sm-7">
              <input type="text" className="form-control has-success" id="smGrupo"
                key={this.props.smInversion.smGrupo}
                defaultValue={this.props.smInversion.smGrupo} disabled
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="smTipo" className="col-sm-5 control-label">SM TIPO:</label>
            <div className="col-sm-7">
              <input type="text" className="form-control" id="smTipo"
                key={this.props.smInversion.smTipo}
                defaultValue={this.props.smInversion.smTipo} disabled
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="smTicker" className="col-sm-5 control-label">SM TICKER:</label>
            <div className="col-sm-7">
              <input type="text" className="form-control" id="smTicker"
                key={this.props.smInversion.smTicker}
                defaultValue={this.props.smInversion.smTicker} disabled
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="claseInversion" className="col-sm-5 control-label">Clase Inversión:</label>
            <div className="col-sm-7" id="claseInversionDiv">
              <input type="text" className="form-control" id="claseInversion"
                key={this.props.smInversion.claseInversion}
                defaultValue={this.props.smInversion.claseInversion}
                style={{'textTransform':'uppercase'}}
                maxLength="255" disabled={this.props.smInversion !== "" ? false : true}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="codigoEmisor" className="col-sm-5 control-label">Código Emisor:</label>
            <div className="col-sm-7" id="codigoEmisorDiv">
              <input type="text" className="form-control" id="codigoEmisor"
                key={this.props.smInversion.codigoEmisor}
                defaultValue={this.props.smInversion.codigoEmisor}
                style={{'textTransform':'uppercase'}}
                maxLength="6" disabled={this.props.smInversion !== "" ? false : true}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="isin" className="col-sm-5 control-label">ISIN:</label>
            <div className="col-sm-7" id="isinDiv">
              <input type="text" className="form-control" id="isin"
                key={this.props.smInversion.isin}
                defaultValue={this.props.smInversion.isin}
                style={{'textTransform':'uppercase'}}
                maxLength="60" disabled={this.props.smInversion !== "" ? false : true}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="clientId" className="col-sm-5 control-label">Client ID:</label>
            <div className="col-sm-7" id="clientIdDiv">
              <input type="text" className="form-control" id="clientId"
                key={this.props.smInversion.clientId}
                defaultValue={this.props.smInversion.clientId}
                style={{'textTransform':'uppercase'}}
                maxLength="60" disabled={this.props.smInversion !== "" ? false : true}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="nemotecnico" className="col-sm-5 control-label">Nemotécnico:</label>
            <div className="col-sm-7" id="nemotecnicoDiv">
              <input type="text" className="form-control" id="nemotecnico"
                key={this.props.smInversion.nemotecnico}
                defaultValue={this.props.smInversion.nemotecnico}
                style={{'textTransform':'uppercase'}}
                maxLength="60" disabled={this.props.smInversion !== "" ? false : true}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="tipoOpcion" className="col-sm-5 control-label">Tipo Opción:</label>
            <div className="col-sm-7" id="tipoOpcionDiv">
              <input type="text" className="form-control" id="tipoOpcion"
                key={this.props.smInversion.tipoOpcion}
                defaultValue={this.props.smInversion.tipoOpcion}
                style={{'textTransform':'uppercase'}}
                maxLength="1" disabled={this.props.smInversion !== "" ? false : true}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="opClasificacion" className="col-sm-5 control-label">Op Clasificación:</label>
            <div className="col-sm-7" id="opClasificacionDiv">
              <input type="text" className="form-control" id="opClasificacion"
                key={this.props.smInversion.opClasificacion}
                defaultValue={this.props.smInversion.opClasificacion}
                style={{'textTransform':'uppercase'}}
                maxLength="255" disabled={this.props.smInversion !== "" ? false : true}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary pull-right"
            disabled={this.props.smInversion !== "" && this.props.msg === "Ok" ? false : true}
          >
            Actualizar
          </button>
        </form>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    smInversion: state.smInversiones.smInversion,
    cusip: state.smInversiones.cusip,
    isUpdate: state.smInversiones.isUpdate,
    fechaProceso: state.obtenerFechaProceso.fechaProceso,
    msg: state.validacionFallida.msg
  }
}

export default connect(mapStateToProps, {listSmInversion, updateSmInversion, ocultar})(SmInversiones);
