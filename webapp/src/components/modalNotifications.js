import React, { Component } from 'react';
import cls from 'classnames';
import Moment from 'moment';
import { connect } from 'react-redux';

class ModalNotifications extends Component {

  drawProcess() {
    return this.props.procesosEjecutadosServices
            .concat(this.props.procesosEjecutadosCurvas)
            .concat(this.props.procesosEjecutadosDerivados)
            .filter(item => item.estado === "NO_CARGADO").map(item => {
              return <tr key={item.proceso}>
                      <td>
                        Falta cargar: <em>{item.descripcion}</em>
                      </td>
                    </tr>
    });
  }

  drawNotifications() {
    if(this.props.existNotification) {
      return <tr key={"DIAS_NO_HABILES"}>
              <td>Existen días no hábiles sin registrar</td>
            </tr>
      }
  }  

  render() {
    return(
      <div id="myModalNotifications" className="modal fade" role="dialog">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">Notificaciones <span className="glyphicon glyphicon-bullhorn"></span></h4>
                  </div>
                  <div className="modal-body">
                    <div className="table-responsive">
                        <br />
                        <table className="table table-bordered table-hover table-condensed">
                            <thead>
                              <tr>
                                <th>Mensaje</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.drawProcess()}
                              {this.drawNotifications()}
                            </tbody>
                        </table>
                    </div>
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      existNotification: state.verificarDiasFestivos.diasFestivosVerificados,
      procesosEjecutadosServices: state.verificarProcesosEjecutados.procesosEjecutadosServices,
      procesosEjecutadosCurvas: state.verificarProcesosEjecutados.procesosEjecutadosCurvas,
      procesosEjecutadosDerivados: state.verificarProcesosEjecutados.procesosEjecutadosDerivados
    }
}

export default connect(mapStateToProps)(ModalNotifications)
