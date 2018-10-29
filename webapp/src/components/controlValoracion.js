import React, { Component } from 'react';
import AppBar from './navbar/appBar';
import { connect } from 'react-redux';
import { ejecutarScore,
  showAlertProgress, ocultar, deleteControlValoracion,
  webSocketSpiritValoracion
} from '../actions';
import ReactInterval from 'react-interval';
import { replace, showMessage } from '../utils/utils';

class CargueOperaciones extends Component {

  componentDidMount() {
    this.props.webSocketSpiritValoracion(this.props.dateProcess, this.buildProcess(), "/control-valoracion/statuss");
  }

  buildProcessVals() {
    return [
      this.props.valOpct,
      this.props.valOpctTtvrv,
      this.props.valOpctTtvrf,
      this.props.valPos,
      this.props.ajusFixValo,
      this.props.valPosRep,
      this.props.crgValFut,
      this.props.crgValFutPago,
      this.props.valOpcValoFut,
      this.props.crgValFxSwap,
      this.props.crgVenFixing
    ];
  }

  buildProcessOps() {
    return [
      this.props.crgOperTrdAjs,
      this.props.crgOperacionesTrd,
      this.props.crgOperacionesRep,
      this.props.crgOperacionesColl,
      this.props.crgOperacionesCmat,
      this.props.crgAjtOperacionesCmat,
      this.props.crgOpAjsSpot
    ];
  }

  buildProcessVents() {
    return [
      this.props.crgVencimientoOp,
      this.props.crgVencimientoCashWF,
      this.props.crgVencimientoWeek,
      this.props.crgVencimientoPayfail,
      this.props.crgValVencimSwapPay,
      this.props.crgFixing,
      this.props.crgVencimEventos,
      this.props.crgAjsVencim,
      this.props.crgSpotFixingVencim,
      this.props.crgVenMat
    ];
  }

  buildProcessEvents() {
    return [
      this.props.eventosOps,
      this.props.eventosVencim,
      this.props.eventosOpct,
      this.props.eventosFx,
      this.props.eventosFut,
      this.props.eventosPos
    ];
  }

  buildProcess() {
    return [
      'CRG_OPER_TRD_AJST',
      'CRG_OPERACIONES_TRD',
      'CRG_OPERACIONES_REP',
      'CRG_OPERACIONES_COLL',
      'CRG_OPERACIONES_CMAT',
      'CRG_AJT_OPE_CMAT',
      'CRG_OP_AJS_SPOT',
      'CRG_VEN_OPER',
      'CRG_VEN_CASHWF',
      'CRG_VEN_MAT',
      'CRG_VEN_WEEK',
      'CRG_VEN_PAY_FAILS',
      'CRG_VEN_SWAPPAY',
      'CRG_FIXING',
      'CRG_VEN_EVENTOS',
      'AJS_VENCIM',
      'SPOT_FIXING_VENCIM',
      'VAL_OPCT',
      'VAL_OPCT_TTVRV',
      'VAL_OPCT_TTVRF',
      'VAL_POS',
      'AJUSTE_FIX_VALO',
      'VAL_POS_GAR_REP',
      'CRG_VAL_FUT',
      'CRG_VAL_FUT_PAGO',
      'OPC_VALO_FUT',
      'CRG_VAL_FX_SWAP',
      'CRG_VEN_FIXING',
      'EVENTO_OPER',
      'EVENTO_VENCIM',
      'EVENTO_OPCT',
      'EVENTO_FX',
      'EVENTO_FUT',
      'EVENTO_POS'
    ]
  }

  executeService(existError) {
    let msg = existError ? "habilitar" : "ejecutar";
    showMessage("Está seguro de " + msg + " el proceso?", "warning",
      existError ? this.props.deleteControlValoracion : this.props.ejecutarScore,
      true, existError ? this.props.dateProcess : this.buildProcessValue()
    );
  }

  validateStatus(proceso) {
    let status = "progress-bar";
    if (proceso == "CARGANDO" || proceso == "ELIMINANDO") {
      status = "progress-bar progress-bar-striped progress-bar-warning active";
    } else if (proceso == "CARGADO") {
      status = "progress-bar progress-bar-success";
    } else if (proceso == "ERROR") {
      status = "progress-bar progress-bar-danger";
    }
    return status;
  }

  verifyProcess() {
    let listProcess = this.buildProcessOps()
      .concat(this.buildProcessVents())
      .concat(this.buildProcessVals())
      .concat(this.buildProcessEvents());
    return listProcess.filter(
      item => item.status === "ERROR"
    );
  }

  verifyProcessPreClosed() {
    let listProcess = this.buildProcessOps()
      .concat(this.buildProcessVents())
      .concat(this.buildProcessVals());
    return listProcess
      .filter(item => item.status === "CARGADO").length == this.buildProcessOps().length + this.buildProcessVents().length + this.buildProcessVals().length
      && this.buildProcessEvents().filter(item => item.status === "NO_CARGADO").length == this.buildProcessEvents().length;
  }

  drawRowsDynamic(items, item, counter) {
    let itemWrong = items.find(i => {
      return i.status === "ERROR"
    });
    let itemsProcessed = items.filter(i =>
      i.status === "CARGADO"
    );
    let itemProcessing = items.find(i => {
      return i.status === "CARGANDO"
    });
    let itemDeleting = items.find(i => {
      return i.status === "ELIMINANDO"
    });
    if (typeof itemWrong !== 'undefined') {
      item.title = itemWrong.title;
      item.status = itemWrong.status;
      item.message = itemWrong.message;
    } else if (typeof itemProcessing !== 'undefined') {
      item.status = "CARGANDO";
    } else if (typeof itemDeleting !== 'undefined') {
      item.status = "ELIMINANDO";
    } else if (itemsProcessed.length == counter) {
      item.status = "CARGADO";
    }
    return (
      <tr key={item.title}>
        <td>{item.title}</td>
        <td>
          <div className='progress' >
            <div className={this.validateStatus(item.status)} role='progressbar' aria-valuenow='100'
              aria-valuemin='0' aria-valuemax='100' style={{ width: '100%' }}>
              {replace(item.status)}
            </div>
          </div>
        </td>
        <td>
          {item.status != "ERROR" ? "" :
            <button name="btnErrorDetails" type="button" className="btn btn-default btn-xs"
              onClick={() => showMessage(item.message, "error", this.props.ocultar, false)}
            >
              <span className="glyphicon glyphicon-list-alt" aria-hidden="true" />
            </button>
          }
        </td>
      </tr>
    );
  }

  disabledExecute() {
    return this.buildProcessOps()
      .concat(this.buildProcessVents())
      .concat(this.buildProcessVals())
      .concat(this.buildProcessEvents())
      .find(
      item => item.status === "CARGANDO" || item.status === "ELIMINANDO"
      ) ?
      true : false;
  }

  buildProcessValue() {
    return {
      "fechaProceso": this.props.dateProcess,
      "nameTaskStop": document.getElementById("pre_close").checked ? "EVENTO_OPER" : ""
    }
  }

  render() {
    let existError = this.verifyProcess().length > 0 || this.verifyProcessPreClosed()? true : false;
    return (
      <div>
        <div className="row">
          <h2>Control de Valoración</h2>
        </div>
        <div id="valuesFundList" className="col-md-6 col-md-offset-3 row">
          <button type="button" className="btn btn-block btn-primary"
            onClick={this.executeService.bind(this, existError)}
            disabled={this.disabledExecute()}
          >
            <span className={existError ? "glyphicon glyphicon-repeat" : "glyphicon glyphicon-play"}></span>
            &nbsp;&nbsp;&nbsp;&nbsp;{existError ? "Habilitar Proceso" : "Ejecutar Proceso"}
          </button>
          <br />
          <label><input type="checkbox"  id="pre_close" defaultChecked={true}/>Pre-cierre (No generar eventos contables)</label>
          <table className="table table-bordered table-hover table-condensed">
            <thead>
              <tr>
                <th>Proceso</th>
                <th>Estado</th>
                <th>Detalles</th>
              </tr>
            </thead>
            <tbody>
              {this.drawRowsDynamic(
                  this.buildProcessOps(),
                  {title: "Cargue de Operaciones", status: "NO_CARGADO", message: "" },
                  this.buildProcessOps().length
                )
              }
              {this.drawRowsDynamic(
                  this.buildProcessVents(),
                  {title: "Cargue de Vencimientos", status: "NO_CARGADO", message: "" },
                  this.buildProcessVents().length
                )
              }
              {this.drawRowsDynamic(
                  this.buildProcessVals(),
                  { title: "Valoración", status: "NO_CARGADO", message: "" },
                  this.buildProcessVals().length
                )
              }
              {this.drawRowsDynamic(
                  this.buildProcessEvents(),
                  { title: "Eventos Contables", status: "NO_CARGADO", message: "" },
                  this.buildProcessEvents().length
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    dateProcess: state.obtenerFechaProceso.fechaProceso,
    crgOperacionesTrd: state.ejecutarScore.crgOperacionesTrd,
    crgOperacionesRep: state.ejecutarScore.crgOperacionesRep,
    crgOperacionesColl: state.ejecutarScore.crgOperacionesColl,
    crgOperacionesCmat: state.ejecutarScore.crgOperacionesCmat,
    crgAjtOperacionesCmat: state.ejecutarScore.crgAjtOperacionesCmat,
    valOpct: state.ejecutarScore.valOpct,
    valOpctTtvrv: state.ejecutarScore.valOpctTtvrv,
    valOpctTtvrf: state.ejecutarScore.valOpctTtvrf,
    valPos: state.ejecutarScore.valPos,
    ajusFixValo: state.ejecutarScore.ajusFixValo,
    valPosRep: state.ejecutarScore.valPosRep,
    valOpcValoFut: state.ejecutarScore.valOpcValoFut,
    crgVencimientoOp: state.ejecutarScore.crgVencimientoOp,
    crgVencimientoCashWF: state.ejecutarScore.crgVencimientoCashWF,
    crgValFut: state.ejecutarScore.crgValFut,
    eventosOps: state.ejecutarScore.eventosOps,
    eventosVencim: state.ejecutarScore.eventosVencim,
    eventosOpct: state.ejecutarScore.eventosOpct,
    eventosFx: state.ejecutarScore.eventosFx,
    eventosFut: state.ejecutarScore.eventosFut,
    eventosPos: state.ejecutarScore.eventosPos,
    crgVencimientoWeek: state.ejecutarScore.crgVencimientoWeek,
    crgVencimientoPayfail: state.ejecutarScore.crgVencimientoPayfail,
    crgVencimEventos: state.ejecutarScore.crgVencimEventos,
    crgValFxSwap: state.ejecutarScore.crgValFxSwap,
    crgOperTrdAjs: state.ejecutarScore.crgOperTrdAjs,
    crgValVencimSwapPay: state.ejecutarScore.crgValVencimSwapPay,
    crgFixing: state.ejecutarScore.crgFixing,
    crgValFutPago: state.ejecutarScore.crgValFutPago,
    crgVenFixing: state.ejecutarScore.crgVenFixing,
    crgOpAjsSpot: state.ejecutarScore.crgOpAjsSpot,
    crgAjsVencim: state.ejecutarScore.crgAjsVencim,
    crgSpotFixingVencim: state.ejecutarScore.crgSpotFixingVencim,
    crgVenMat: state.ejecutarScore.crgVenMat
  }
}

export default connect(mapStateToProps, {
  ejecutarScore,
  showAlertProgress, ocultar,
  deleteControlValoracion,
  webSocketSpiritValoracion
})(CargueOperaciones)
