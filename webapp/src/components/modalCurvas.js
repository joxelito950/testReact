import React, { Component } from 'react';
import cls from 'classnames';
import Moment from 'moment';

export default ({details, dateProcess, title}) => 
    <div id="myModalCurvas" className="modal fade" role="dialog">
        <div className="modal-dialog modal-sm">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">{title} / {dateProcess}</h4>
                </div>
                <div className="modal-body">
                    <div className="table-responsive">
                        <br />
                        <table className="table table-bordered table-hover table-condensed">
                            <thead className="fontSizeHeader">
                                <tr>
                                    <th>Plazo</th>
                                    <th>Valor PIP</th>
                                </tr>
                            </thead>
                            <tbody className="fontSizeDetail">
                                { details.map((detail) =>
                                     <tr key={detail.id}>
                                        <td className="alignNumber"> {detail.plazo}</td>
                                        <td  className="alignNumber"> {detail.valor}</td>
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

