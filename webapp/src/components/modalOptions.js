import React, {Component} from 'react';
import cls from 'classnames';
import Moment from 'moment';

export default ({details, dateProcess, title, variacionTotal}) =>

<div id="myModalOptions" className="modal fade" role="dialog">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">{title} / {dateProcess}</h4>
      </div>
      <div className="modal-body">
        <span className="label label-danger">Registro con variación</span>
        <span className="label noFactor">No tiene Factor</span>
        <span className="label variacionNoDefinida">Variación No definida</span>
        <div className="table-responsive">
          <br />
          <table className="table table-bordered table-hover table-condensed">
            <thead className="fontSizeHeader">
              <tr>
                <th>Identificador</th>
                <th>P. Actual</th>
                <th>P. Anterior</th>
                <th>% Var.</th>
                <th>% Precio</th>
                <th>Factor Aplicado</th>
                <th>Emisor</th>
                <th>Vencimiento</th>
            </tr>
            </thead>
            <tbody className="fontSizeDetail">
              { details.map((detail) =>
                <tr key={detail.detalleConsulta.idDetalle} className={
                    typeof detail.variacion.precioActual == "undefined" ? 'alert alert-info' :
                    typeof detail.detalleConsulta.factor == "undefined" ? 'noFactor' :
                    detail.variacion.variacion == 92233720368547760 ? 'variacionNoDefinida' :
                    detail.variacion.alerta === true ? 'alert alert-danger' : ""
                  }
                >
                  <td>{detail.variacion.identificador}</td>
                  <td className="text-right">{detail.variacion.precioActual}</td>
                  <td className="text-right">{detail.variacion.precioAnterior !== "" ? detail.variacion.precioAnterior:""}</td>
                  <td className="text-right">{detail.variacion.variacion !== "" ?
                                                detail.variacion.variacion == 92233720368547760 ? "No definida" :
                                                detail.variacion.variacion : ""}
                  </td>
                  <td className="text-right">{detail.detalleConsulta.porcentajePrecio !== "" ? detail.detalleConsulta.porcentajePrecio:""}</td>
                  <td className="text-right">{detail.detalleConsulta.factor !== "" ? detail.detalleConsulta.factor:""}</td>
                  <td>{detail.detalleConsulta.emisor}</td>
                  <td>{Moment(detail.detalleConsulta.fechaVencimiento).format("YYYY/MM/DD")}</td>
                </tr>
              )}
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
