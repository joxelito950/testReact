import React from 'react';
import { connect } from 'react-redux';
import { obtenerFechaProceso, actualizarFechaProceso, ocultar, validacionFallida, validacionExitosa } from '../actions';
import Moment from 'moment';
import AppBar from './navbar/appBar';
import Footer from './footer';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import Cleave from 'cleave.js/dist/cleave-react.js';
import 'sweetalert2/dist/sweetalert2.min.css'
import { default as swal } from 'sweetalert2';

let newDateProcess = null;

class SystemDateProcess extends React.Component {

  componentDidMount() {
    this.props.validacionFallida("");
  }

  handleChange(e) {
      let fieldNewDateProcess = document.getElementById(e.target.id);
      let date_regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
      if (!e.target.value) {
        this.props.validacionFallida("Debe digitar una Nueva Fecha");
        fieldNewDateProcess.className="form-group has-error has-feedback";
      } else if(!(date_regex.test(e.target.value))) {
        this.props.validacionFallida("El formato de fecha debe ser YYYY-MM-DD");
        fieldNewDateProcess.className="form-group has-error has-feedback";
      } else {
        this.props.validacionExitosa();
        fieldNewDateProcess.className="form-group has-success has-feedback";
      }
      newDateProcess = e.target.value;
  }

  render() {
    if(this.props.showAlertprocessTypesUpdated) {
      swal({
        title: 'Spirit',
        text: "Fecha del Sistema actualizada",
        type: 'success',
        confirmButtonColor: '#337ab7',
        confirmButtonText: 'Aceptar',
        width: 400
      }).then(() => this.props.ocultar())
    }
    let validation;
    if(this.props.msg != "Ok" && this.props.msg != "") {
      validation = (
        <div className="panel panel-danger">
          <div className="panel-heading">{this.props.msg}</div>
        </div>
      );
    }
    return(
      <div id="viewSystemDateProcess">
        <div className="row">
          <h2>Actualizar Fecha Proceso</h2>
        </div>
        {validation}
        <div className="panel panel-default col-md-2 col-md-offset-5">
        <div className="form-group">
          <label>Fecha Actual</label>
          <input type="text" className="form-control" id="currentDate" disabled="true"
            value={Moment(this.props.fechaProceso).format("YYYY-MM-DD")}
          />
        </div>
        <div id={this.props.fechaProceso} className="form-group has-sucess has-feedback">
          <label>Nueva Fecha</label>
          <Cleave id={this.props.fechaProceso} className="form-control" placeholder="YYYY-MM-DD"
            options={
                      {date: true,
                        datePattern: ['Y', 'm', 'd'],
                        delimiter: '-'
                      }
                    }
            onChange={this.handleChange.bind(this)}
        />
        </div>
          <div className="form-group">
            <button className="btn btn-primary"
              onClick={()=>this.props.actualizarFechaProceso(newDateProcess)}
              disabled={this.props.msg=="Ok"?false:true}
            >
              Actualizar
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    fechaProceso: state.obtenerFechaProceso.fechaProceso,
    showAlertprocessTypesUpdated: state.actualizarFechaProceso.showAlertprocessTypesUpdated,
    error: state.validacionFallida.error,
    msg: state.validacionFallida.msg
  }
}

export default connect(mapStateToProps, {obtenerFechaProceso, actualizarFechaProceso, ocultar,
                                          validacionFallida, validacionExitosa})(SystemDateProcess)
