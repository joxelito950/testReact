import React, {Component} from 'react';
import cls from 'classnames';

export default ({details, dateProcess, title, variacionTotal, estaFueraDeRango}) =>

<div id="myModalRfi" className="modal fade" role="dialog">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">{title} / {dateProcess}</h4>
      </div>
      <div className="modal-body">
        {estaFueraDeRango? <span className="label label-info">{"Variación total " + variacionTotal + "%"}</span> : ""}
        <span className="label label-danger">Registro con variación</span>
        <div className="table-responsive">
          <br />
          <table className="table table-bordered table-hover table-condensed">
            <thead className="fontSizeHeader">
              <tr>
                <th>Isin</th>
                <th>Moneda</th>
                <th>P. Actual</th>
                <th>P. Anterior</th>
                <th>% Var.</th>
                <th>Emisor</th>
              </tr>
            </thead>
            <tbody className="fontSizeDetail">
              { details.map((detail) =>
                <tr key={detail.detalleConsulta.id} className={cls({'alert alert-danger': detail.variacion.alerta, 'alert alert-info': typeof detail.variacion.precioActual == "undefined"})}>
                  <td>{detail.detalleConsulta.isin}</td>
                  <td>{detail.detalleConsulta.moneda}</td>
                  <td className="text-right">{detail.variacion.precioActual}</td>
                  <td className="text-right">{detail.variacion.precioAnterior !== ""? detail.variacion.precioAnterior:""}</td>
                  <td className="text-right">{detail.variacion.variacion !== "" ? detail.variacion.variacion:""}</td>
                  <td>{detail.detalleConsulta.emisor}</td>
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
