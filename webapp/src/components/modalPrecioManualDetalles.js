import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addItemPrecioManualDetalleFCP, removeItemPrecioManualDetalleFCP, guardarPrecioManualDetalleFCP,
        ocultar, actualizarPrecioManualDetalleFCP, validacionFallida, validacionExitosa,
        findDetailsPreciosManualDetalleFCP} from '../actions';
import Moment from 'moment';
import 'sweetalert2/dist/sweetalert2.min.css';
import { default as swal } from 'sweetalert2';

let myMap = new Map();

class PreciosManualDetalle extends Component {

  componentDidMount() {
    this.props.validacionFallida("");
    this.props.findDetailsPreciosManualDetalleFCP(this.props.precioManualFCP, this.props.fechaProceso);
  }

  newRow() {
    this.props.addItemPrecioManualDetalleFCP(this.props.sizeListPmdFCP, this.props.listPmdFCP);
  }

  deleteRow(idItem, item) {
    this.props.removeItemPrecioManualDetalleFCP(idItem, item);
  }

  saveListPdmFCP(event) {
    event.preventDefault();
    let filas = [...this.refs.pmdFCPBody.getElementsByTagName("tr")];
    let inputs = [];
    filas.map(item => {
        inputs.push([...item.getElementsByTagName("input")]);
      }
    );
    let newListPmdFCp = [];
    inputs.map(item => {
        newListPmdFCp.push({"id": (isNaN(item[0].value)?null:item[0].value) , "identificador":item[1].value,
          "isin":item[2].value.toUpperCase(), "fechaAlta":item[3].value
        });
      }
    );
    this.props.guardarPrecioManualDetalleFCP(newListPmdFCp, this.props.precioManualFCP, this.props.fechaProceso);
  }

  handleChange(e) {
    let inputToValid = document.getElementById(e.target.id);
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
    return(
      <div id="myModalPreciosManualDetail" className="modal fade" role="dialog">
        <form onSubmit={this.saveListPdmFCP.bind(this)}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">
                  Detalles {this.props.precioManualFCP.identificador} / {Moment(this.props.fechaProceso).format("YYYY-MM-DD")}
                </h4>
              </div>
              <div className="modal-body">
                <div className="table-responsive">
                  <br />
                  <table className="table table-bordered table-hover table-condensed">
                    <thead className="fontSizeHeader">
                      <tr>
                        <th>ISIN</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody ref="pmdFCPBody" className="fontSizeDetail">
                      { this.props.listPmdFCP.map((item) =>
                          <tr key={item.id}>
                            <td className="hidden"><input type="text" className="form-control" disabled defaultValue={item.id} /></td>
                            <td className="hidden"><input type="text" className="form-control" disabled defaultValue={item.identificador} /></td>
                            <td id={item.id+item.identificador} className={isNaN(item.id)?"has-error":"has-success"}>
                              <input type="text" className="form-control text-uppercase" defaultValue={item.isin}
                                disabled={isNaN(item.id)?false:true} id={item.id+item.identificador}
                                onChange={this.handleChange.bind(this)} ref={"pmd"+item.id}
                              />
                            </td>
                            <td className="hidden"><input type="text" className="form-control" disabled defaultValue={item.fechaAlta} /></td>
                            <td>
                              <button type="button" className="btn btn-danger btn-xs glyphicon glyphicon-remove center-block"
                                onClick={this.deleteRow.bind(this, item.id, item)}
                              />
                            </td>
                          </tr>
                      ) }
                    </tbody>
                 </table>
                 <button type="button" className="btn btn-info btnCircle btn-sm pull-left"
                   onClick={() => this.newRow()}
                 >
                     <i className="glyphicon glyphicon-plus"></i>
                 </button>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary pull-left" disabled={this.props.msg=="Ok"?false:true}>Guardar</button>
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
    precioManualFCP: state.tableDynamicPrecioManualDetalle.precioManualFCP,
    listPmdFCP: state.tableDynamicPrecioManualDetalle.listPmdFCP,
    fechaProceso: state.tableDynamicPrecioManualDetalle.fechaProceso,
    sizeListPmdFCP: state.tableDynamicPrecioManualDetalle.listSize,
    showAlertprocessTypesUpdated: state.tableDynamicPrecioManualDetalle.showAlertprocessTypesUpdated,
    msg: state.validacionFallida.msg
  }
}

export default connect(mapStateToProps, {addItemPrecioManualDetalleFCP, removeItemPrecioManualDetalleFCP,
                                          guardarPrecioManualDetalleFCP, ocultar, actualizarPrecioManualDetalleFCP,
                                          validacionFallida, validacionExitosa, findDetailsPreciosManualDetalleFCP})(PreciosManualDetalle)
