import React, {Component} from 'react';
import { connect } from 'react-redux';
import { showProcessTypes, actualizarTiposProcesos, ocultar, validacionFallida, validacionExitosa } from '../actions';
import AppBar from './navbar/appBar';
import Footer from './footer';
import 'sweetalert2/dist/sweetalert2.min.css';
import { default as swal } from 'sweetalert2';

class TiposArchivos extends Component {

  componentDidMount() {
    this.props.showProcessTypes(this.props.params.groupName);
    this.props.validacionFallida("Ok");
  }

  createListProcessType(event) {
    this.props.listProcessTypes.map((item) => item.variacion = event.target["process"+item.id].value);
    this.props.actualizarTiposProcesos(this.props.listProcessTypes);
    event.preventDefault();
  }

  handleChange(e) {
      let aux = document.getElementById(e.target.id);
      let aux2 = document.getElementsByName(e.target.name)[1];
      if (!e.target.value) {
        this.props.validacionFallida("No se admiten campos vacíos");
        aux.className="form-group has-error has-feedback";
        aux2.className="glyphicon glyphicon-remove form-control-feedback";
      } else if (isNaN(Number(e.target.value))) {
        this.props.validacionFallida("Sólo se admiten números");
        aux.className="form-group has-error has-feedback";
        aux2.className="glyphicon glyphicon-remove form-control-feedback";
      } else if (Number(e.target.value) <= 0 || Number(e.target.value) > 100) {
        this.props.validacionFallida("Sólo se admiten números entre 0 y 100");
        aux.className="form-group has-error has-feedback";
        aux2.className="glyphicon glyphicon-remove form-control-feedback";
      } else {
        this.props.validacionExitosa();
        aux.className="form-group has-success has-feedback";
        aux2.className="glyphicon glyphicon-ok form-control-feedback";
      }
  }

  render() {
    if(this.props.showAlertprocessTypesUpdated) {
      swal({
        title: 'Spirit',
        text: "Registros Guardados",
        type: 'success',
        confirmButtonColor: '#337ab7',
        confirmButtonText: 'Aceptar',
        allowEscapeKey:false,
        allowOutsideClick:false,
        width: 400
      }).then(() => this.props.ocultar())
    }
    let message;
    if(this.props.msg != "Ok" && this.props.msg != "") {
      message = (
        <div className="panel panel-danger">
          <div className="panel-heading">{this.props.msg}</div>
        </div>
      );
    }
    return (
      <div id="listFilesTypes">
        <div className="row">
          <h2>Parámetros de cargue de Precios</h2>
        </div>
        {message}
        <div id="listFilesTypesTable1" className="table-responsive col-md-4 col-md-offset-4 row">
          <form onSubmit={this.createListProcessType.bind(this)}>
            <table id="listFilesTypesTable2" className="table table-bordered table-hover table-condensed">
  		        <thead>
  		          <tr>
  		            <th>Tipo Proceso</th>
                  <th>% Variación</th>
  		          </tr>
  		        </thead>
  		        <tbody>
  		          {this.props.listProcessTypes.map((processType) =>
                      <tr key={processType.id}>
                        <td className="col-md-3">{processType.descripcion}</td>
                        <td className="col-md-1">
                          <div id={processType.id} className="form-group has-success has-feedback">
                            <input type="text" className="form-control text-right"
                                                        id = {processType.id}
                                                        name={"process"+processType.id}
                                                        defaultValue={processType.variacion}
                                                        onChange={this.handleChange.bind(this)}
                                                        style={{paddingRight:"10px"}} />
                          </div>
                        </td>
                      </tr>
                )}
  		        </tbody>
  		      </table>
            <button type="submit" className="btn btn-primary col-md-4 col-md-offset-4" disabled={this.props.msg=="Ok"?false:true}>Guardar</button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    listProcessTypes: state.showProcessTypes.list,
    showAlertprocessTypesUpdated: state.actualizarTiposProcesos.showAlertprocessTypesUpdated,
    error: state.validacionFallida.error,
    msg: state.validacionFallida.msg,
    icon: state.validacionFallida.icon
  }
}

export default connect(mapStateToProps, { showProcessTypes, actualizarTiposProcesos, ocultar,
                                          validacionFallida, validacionExitosa })(TiposArchivos)
