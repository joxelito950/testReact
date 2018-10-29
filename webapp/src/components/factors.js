import React, {Component} from 'react';
import AppBar from './navbar/appBar';
import Footer from './footer';
import { connect } from 'react-redux';
import { addItem, removeItem, listarFactoresOpciones, guardarFactoresOpciones, ocultar, borrarFactoresOpciones,
          validacionFallida, validacionExitosa} from '../actions';
import 'sweetalert2/dist/sweetalert2.min.css';
import { default as swal } from 'sweetalert2';
import {showMessage} from '../utils/utils';

let myMap = new Map();

class Factors extends Component {

  componentDidMount() {
    this.props.listarFactoresOpciones();
    this.props.validacionFallida("");
  }

  newRow() {
    this.props.addItem(this.props.sizeListFactors, this.props.listaFactoresOpciones);
  }

  saveFactorList(event) {
    event.preventDefault();
    let filas = [...this.refs.factorsBody.getElementsByTagName("tr")];
    let inputs = [];
    filas.map(item => {
        inputs.push([...item.getElementsByTagName("input")]);
      }
    );
    let newListFactors = [];
    inputs.map(item => {
        newListFactors.push({"id": (isNaN(item[0].value)?null:item[0].value) , "identificador":item[1].value, "factor":item[2].value});
      }
    );
    this.props.guardarFactoresOpciones(newListFactors);
    this.props.borrarFactoresOpciones(this.props.listFactorsToDelete);
  }

  deleteRow(idItem) {
    showMessage("¿Está seguro que quiere eliminar el Factor?", "warning",
      this.props.removeItem, true, idItem);
      this.deleteFromMap();
  }

  deleteFromMap() {
    if(this.props.borrado) {
      myMap.delete(this.refs["factor"+idItem].id);
    }
  }

  handleChange(e) {
    let inputToValid = document.getElementById(e.target.id);
    if(inputToValid.childNodes.length > 1) {
        inputToValid.removeChild(inputToValid.childNodes[1]);
    }
    let spanError = document.createElement("span");
    if (!e.target.value ) {
      this.props.validacionFallida("No se admiten campos vacíos");
      inputToValid.className="has-error";
      let textSpanError = document.createTextNode("No se admiten campos vacíos");
      spanError.appendChild(textSpanError);
      inputToValid.appendChild(spanError);
      myMap.set(inputToValid.id, textSpanError.data);
    } else if (isNaN(Number(e.target.value)) && !e.target.id.includes("identificador")) {
      this.props.validacionFallida("Sólo se admiten números");
      inputToValid.className="has-error";
      let textSpanError = document.createTextNode("Sólo se admiten números");
      spanError.appendChild(textSpanError);
      inputToValid.appendChild(spanError);
      myMap.set(inputToValid.id, textSpanError.data);
    } else if (Number(e.target.value) <= 0 && !e.target.id.includes("identificador")) {
      this.props.validacionFallida("Sólo se admiten números mayores que 0");
      inputToValid.className="has-error";
      let textSpanError = document.createTextNode("Sólo se admiten números mayores que 0");
      spanError.appendChild(textSpanError);
      inputToValid.appendChild(spanError);
      myMap.set(inputToValid.id, textSpanError.data);
    } else {
      myMap.delete(inputToValid.id);
      inputToValid.className="has-success";
      if(myMap.size == 0) {
        this.props.validacionExitosa();
      }
    }
  }

  render() {
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
    return (
      <div id="optionsFactors">
        <div className="row">
          <h2>Factores de Opciones</h2>
        </div>
        <div id="optionsFactorsList" className="table-responsive col-md-4 col-md-offset-4 row">
          <form onSubmit={this.saveFactorList.bind(this)}>
            <table id="optionsFactorsTable" className="table table-bordered table-hover table-condensed">
  		        <thead>
  		          <tr>
  		            <th>Identificador</th>
                  <th>Factor</th>
  		          </tr>
  		        </thead>
  		        <tbody ref="factorsBody">
                { this.props.listaFactoresOpciones.map((item) =>
                  <tr key={item.id}>
                    <td className="hidden"><input type="text" className="form-control" disabled defaultValue={item.id} /></td>
                    <td id={item.id+"identificador"} className="has-success">
                      <input type="text " className="form-control" defaultValue={item.identificador}
                        id={item.id+"identificador"}
                        onChange={this.handleChange.bind(this)}
                      />
                    </td>
                    <td id={item.id+item.identificador} className="has-success">
                      <input type="text" className="form-control text-right" defaultValue={item.factor}
                          id={item.id+item.identificador}
                          onChange={this.handleChange.bind(this)} ref={"factor"+item.id}
                          style={{paddingRight:"10px"}}
                      />
                    </td>
                    <td>
                      <button type="button" className="btn btn-danger btn-xs glyphicon glyphicon-remove center-block"
                        onClick={this.deleteRow.bind(this, item.id)}
                      />
                    </td>
                  </tr>
                )}
  		        </tbody>
  		      </table>
            <button id="btnAddFactor" type="button" className="btn btn-info pull-left"
              onClick={() => this.newRow()}
            >
              Adicionar
            </button>
            <button id="btnSaveFactors" type="submit" className="btn btn-primary pull-right" disabled={this.props.msg=="Ok"?false:true}>
              Guardar
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    listFactors: state.tableDynamic.listFactors,
    sizeListFactors: state.tableDynamic.listSize,
    listaFactoresOpciones: state.tableDynamic.listFactors,
    showAlertprocessTypesUpdated: state.tableDynamic.showAlertprocessTypesUpdated,
    listFactorsToDelete: state.tableDynamic.listFactorsToDelete,
    msg: state.validacionFallida.msg,
    borrado: state.tableDynamic.borrado
  }
}

export default connect(mapStateToProps, { addItem, removeItem, listarFactoresOpciones, guardarFactoresOpciones, ocultar,
                                          borrarFactoresOpciones, validacionFallida, validacionExitosa})(Factors)
