import React, {Component} from 'react';
import { connect } from 'react-redux';
import { obtenerFechaProceso, validacionFallida, validacionExitosa, showAlertProgress } from '../actions';
import Cleave from 'cleave.js/dist/cleave-react.js';
import Moment from 'moment';
import 'sweetalert2/dist/sweetalert2.min.css';
import { default as swal } from 'sweetalert2';
import {convertDateToMilliseconds} from "../utils/utils";

let dateProcess = null;

class Search extends Component {

    componentDidMount() {
      this.props.validacionFallida("");
    }

    handleChange(e) {
        let fieldNewDateProcess = document.getElementById(e.target.id);
        let date_regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
        this.props.isText ? e.target.value = e.target.value.toUpperCase() : e.target.value;
        if (!e.target.value && !this.props.isText) {
          this.props.validacionFallida("Debe digitar una Nueva Fecha");
          fieldNewDateProcess.className="input-group has-error";
        } else if(!e.target.value && this.props.isText) {
          this.props.validacionFallida("Debe digitar un valor");
          fieldNewDateProcess.className="input-group has-error";
        } else if(!(date_regex.test(e.target.value)) && !this.props.isText) {
          this.props.validacionFallida("El formato de fecha debe ser YYYY-MM-DD");
          fieldNewDateProcess.className="input-group has-error";
        } else {
          this.props.validacionExitosa(
            this.props.isText ?
            this.refs.refTextSearch.value :
            convertDateToMilliseconds(dateProcess.value)
          );
          fieldNewDateProcess.className="input-group has-success";
        }
    }

    ejecutarAccion() {
      this.props.showAlertProgress(true);
      this.props.showProcess(this.props.isText ? this.refs.refTextSearch.value : dateProcess.value);
    }

    render() {
      if(this.props.showAlert) {
        swal({
            title: 'Spirit',
            text:'Cargando...',
            allowEscapeKey:false,
            allowOutsideClick:false,
            width: 200
        });
        swal.showLoading();
      } else {
        swal.close();
      }
        let validation;
        if(this.props.msg != "Ok" && this.props.msg != "") {
          validation = (
            <div className="panel panel-danger">
              <div className="panel-heading">{this.props.msg}</div>
            </div>
          );
        }
        return (
          <div id="search" className="row">
            {validation}
              <div className="input-group" id={this.props.fechaProceso}>
              {this.props.isText ?
                <input type="text" className="form-control" defaultValue={this.props.dateProcess}
                  onChange={this.handleChange.bind(this)}
                  id={this.props.fechaProceso}
                  style={{'textTransform':'uppercase'}}
                  ref="refTextSearch"
                  placeholder={this.props.placeholderSearch}
                />
                :
                <Cleave id={this.props.fechaProceso} className="form-control" placeholder={this.props.placeholderSearch} name="dateProcess"
                  options={
                            {date: true,
                              datePattern: ['Y', 'm', 'd'],
                              delimiter: '-'
                            }
                          }
                  onChange={this.handleChange.bind(this)}
                  value={this.props.dateProcess} htmlRef={(input) => dateProcess = input}
                />
              }
                {this.props.isSearch ?
                  <span className="input-group-btn">
                    <button id="btnSearchProcess" className="btn btn-info" type="button"
                      onClick={()=>this.ejecutarAccion()}
                      disabled={this.props.msg=="Ok" || this.props.dateProcess!=""?false:true}
                    >
                      Consultar
                    </button>
                  </span> :
                  ""
                }
              </div>
          </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    fechaProceso: state.obtenerFechaProceso.fechaProceso,
    error: state.validacionFallida.error,
    msg: state.validacionFallida.msg,
    showAlert: state.showProcessAlertProgress.showAlertProgress
  }
}

export default connect(mapStateToProps, {obtenerFechaProceso, validacionFallida, validacionExitosa,
                                          showAlertProgress})(Search)
