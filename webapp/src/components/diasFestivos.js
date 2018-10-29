import React, { Component } from 'react';
import AppBar from './navbar/appBar';
import Footer from './footer';
import { connect } from 'react-redux';
import {obtenerParametroDiasFestivos, obtenerDiasFestivos, ocultar, guardarDiasFestivos,
        verificarDiasFestivos} from '../actions';
import Moment from 'moment';
import Cleave from 'cleave.js/dist/cleave-react.js';
import {showMessage} from '../utils/utils';
import 'sweetalert2/dist/sweetalert2.min.css';
import { default as swal } from 'sweetalert2';

let listToDraw;
let listToValid;
let year;
let regex = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;

class DiasFestivos extends Component {

  componentWillMount() {
    this.props.obtenerParametroDiasFestivos();
    this.props.obtenerDiasFestivos(Moment(this.props.fechaProceso).year());
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.showAlertprocessTypesUpdated != nextProps.showAlertprocessTypesUpdated) {
      return false;
    }
    return true;
  }

  getHolidaysByDate() {
    this.props.obtenerDiasFestivos(this.refs.yearRef.value);
    this.props.verificarDiasFestivos();
  }

  handleChange(e) {
    let inputToValid = document.getElementById(e.target.id+"field");
    let inputValue = document.getElementById(e.target.id);

    if(!regex.test(inputValue.value)){
      if(inputToValid.childNodes.length > 1) {
          inputToValid.removeChild(inputToValid.childNodes[1]);
      }
      let spanError = document.createElement("span");
      let textSpanError = document.createTextNode("Formato no compatible");
      spanError.appendChild(textSpanError);
      inputToValid.appendChild(spanError);
      inputToValid.className = "has-error";
      listToValid.filter(item => item.id==e.target.id)[0].fecha = null;
    } else {
      inputToValid.className = "has-success";
      if(inputToValid.childNodes.length > 1) {
          inputToValid.removeChild(inputToValid.childNodes[1]);
      }
      listToValid.filter(item => item.id==e.target.id)[0].fecha = inputValue.value;
    }
  }

  saveHolidays(e) {
    let send = true;
    e.preventDefault();
    listToValid.map(item => {
      if(item.fecha == null) {
        showMessage("Faltan días por digitar", "error", this.props.ocultar, false);
        send = false;
      } else {
        typeof item.fecha == "string" ? item.fecha = Moment(item.fecha,'YYYY-MM-DD').valueOf() : item.fecha = item.fecha;
      }
    });
    if(send) {
      let listValid = JSON.parse(JSON.stringify(listToValid));
      listValid.map(item => item.id = isNaN(item.id) ? null:item.id);
      this.props.guardarDiasFestivos(listValid, this.refs.yearRef.value);
    }
  }

  drawDays() {
    listToDraw = [];
    listToValid = [];
    for(var i=1; i<= this.props.parametrosDiasFestivos - this.props.diasFestivos.length; i++) {
      listToDraw.push({id: (+ new Date() + Math.floor(Math.random() * 999999)).toString(36), fecha:null});
    }
    this.props.diasFestivos.reverse().map(item => listToDraw.unshift(item));
    return listToDraw.map(item => {
      listToValid.push(item);
      return(
        <tr key={item.id}>
          <td>
            {listToDraw.findIndex(element => element.id == item.id)+1}
          </td>
          <td id={item.id+"field"} className={item.fecha == null?"has-error":"has-success"}>
            <Cleave id={item.id} className="form-control" placeholder="YYYY-MM-DD"
              options={
                        {date: true,
                          datePattern: ['Y', 'm', 'd'],
                          delimiter: '-'
                        }
                      }
              onChange={this.handleChange.bind(this)} value={Moment(item.fecha).format("YYYY-MM-DD")}
              disabled={item.fecha <= this.props.fechaProceso && item.fecha != null ? true : false}
            />
          </td>
        </tr>
      );
    });
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
    year = Moment(this.props.fechaProceso).year();
    return (
      <div>
        <div className="row">
            <h2>Días No Hábiles</h2>
        </div>
        <div className="form-inline form-group row">
          <label><h3><span className="label label-default">Año</span></h3></label>&nbsp;&nbsp;&nbsp;
            <select className="form-control" onChange={() => this.getHolidaysByDate()} ref="yearRef">
              <option key={year} value={year} >{year}</option>
              <option key={year+1} value={year+1} >{year+1}</option>
            </select>
        </div>
        <div id="holidaysList" className="table-responsive col-md-3 col-md-offset-5 row">
          <form id="holidaysListForm" onSubmit={this.saveHolidays.bind(this)}>
            <table id="holidaysListTable" className="table table-bordered table-hover table-condensed">
              <thead>
                <tr>
                  <th>Día</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.drawDays()
                }
              </tbody>
            </table>
            <button id="btnSaveHolidays" type="submit" className="btn btn-primary pull-right" >
              Guardar
            </button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      parametrosDiasFestivos: state.obtenerParametroDiasFestivos.parametroDiasFestivos,
      fechaProceso: state.obtenerFechaProceso.fechaProceso,
      diasFestivos: state.obtenerDiasFestivos.diasFestivos,
      showAlertprocessTypesUpdated: state.guardarDiasFestivos.showAlertprocessTypesUpdated
    }
}

export default connect(mapStateToProps, {obtenerParametroDiasFestivos, obtenerDiasFestivos, ocultar,
                                          guardarDiasFestivos, verificarDiasFestivos})(DiasFestivos)
