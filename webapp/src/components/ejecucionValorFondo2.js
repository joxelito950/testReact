import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ejecutarValorFondo2, obtenerNavs} from '../actions';
import AppBar from './navbar/appBar';
import Footer from './footer';
import {replace} from '../utils/utils';
import ReactInterval from 'react-interval';

class EjecucionValorFondo extends Component {

  componentDidMount() {
    this.obtainStatus();
  }

  buildNavs() {
    return [
      this.props.voluntarias,
      this.props.cesantias
    ];
  }

  obtainStatus() {
    this.props.obtenerNavs(this.props.fechaProceso, 'VALOR_FONDO_VOLUNTARIO');
    this.props.obtenerNavs(this.props.fechaProceso, 'VALOR_FONDO_CESANTIAS');
  }

  validateStatus(proceso) {
    let status = "progress-bar";
    if(proceso == "CARGANDO" || proceso == "ELIMINANDO") {
      status = "progress-bar progress-bar-striped progress-bar-warning active";
    } else if (proceso == "CARGADO") {
      status = "progress-bar progress-bar-success";
    } else if (proceso == "ERROR") {
      status = "progress-bar progress-bar-danger";
    }
    return status;
  }

  executeService(request) {
    this.props.ejecutarValorFondo2(request);
    this.obtainStatus();
  }

  drawRows() {
    return this.buildNavs().map(item => {
      let request = {
        fechaProceso: this.props.fechaProceso,
        tipoProceso: item.tipoProceso
      };
      return (
        <tr key={item.tipoProceso+item.nombre}>
          <td>{item.nombre}</td>
          <td>
            <button type="button"
              onClick={this.executeService.bind(this, request)}
              className="btn btn-primary btn-xs glyphicon glyphicon-play"
              disabled={this.validateDisabled()}
            />
          </td>
          <td>
            <div className='progress'>
              <div className={this.validateStatus(item.status)}
                  role='progressbar' aria-valuenow='100'
                  aria-valuemin='0' aria-valuemax='100' style={{width: '100%'}}
              >
                {replace(item.status)}
              </div>
            </div>
          </td>
        </tr>
      )
    });
  }

  validateDisabled() {
    return this.buildNavs().find(item => item.status === "CARGANDO" || item.status === "ELIMINANDO") ?
      true:false;
  }

  render() {
    return (
      <div id="valueFundExecution">
        <ReactInterval timeout={1000} enabled={true}
          callback={() => this.obtainStatus()} />
        <div className="row">
          <h2>Ejecutar Valor Fondo</h2>
        </div>
        <div id="valuesFundList" className="col-md-6 col-md-offset-3 row">
          <table className="table table-bordered table-hover table-condensed">
            <thead>
              <tr>
                <th>Nombre Fondo</th>
                <th>Ejecutar</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
                {this.drawRows()}
            </tbody>
          </table>
        </div>
        <Footer />   
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {
    fechaProceso: state.obtenerFechaProceso.fechaProceso,
    voluntarias: state.ejecutarValorFondo2.voluntarias,
    cesantias: state.ejecutarValorFondo2.cesantias
  }
}

export default connect(mapStateToProps, {ejecutarValorFondo2, obtenerNavs})(EjecucionValorFondo)
