import React, {Component} from 'react';
import cls from 'classnames';
import {convertMillisecondsToDate} from "../utils/utils"

export default ({details, dateProcess, title}) =>

<div id="myModalListaControl" className="modal fade" role="dialog">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">{title} / {convertMillisecondsToDate(dateProcess)}</h4>
      </div>
      <div className="modal-body">
        <span className="label label-info">Registros incompletos</span>
        <div className="table-responsive">
          <br />
          <table className="table table-bordered table-hover table-condensed">
            <thead className="fontSizeHeader">
              <tr>
                <th>Tipo</th>
                <th>Identificador</th>
            </tr>
            </thead>
            <tbody className="fontSizeDetail">
              { details.map((detail) =>
                <tr key={detail.id} className={detail.tipoProceso.nombre==="RENTA_FIJA_LOCAL" && detail.codigo.length < 13 ? "alert alert-info" : ""}>
                  <td>{detail.tipoProceso.descripcion}</td>
                  <td>{detail.codigo}</td>
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
