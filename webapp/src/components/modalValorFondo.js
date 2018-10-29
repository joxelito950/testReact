import React, {Component} from 'react';
import cls from 'classnames';
import { connect } from 'react-redux'

class ModalValorFondo extends Component {

  validateValorFondoType(valorFondo) {
    return valorFondo==="Valores de Fondo Mandatorios (OBL-CES-PPN)" ? true : false;
  }

  render() {
    return(
      <div id="myModalVf" className="modal fade" role="dialog">
      <div className="modal-dialog model-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title">{this.validateValorFondoType(this.props.name) ?
                                          "Valores de Fondo Mandatorios":
                                          this.props.name
                                        } / {this.props.dateProcess}
            </h4>
          </div>
          <div className="modal-body">
            <span className="label label-danger">Valor Fondo Cero</span>
            <div className="table-responsive">
              <br />
              <table className="table table-bordered table-hover table-condensed">
                <thead className="fontSizeHeader">
                  <tr>
                    <th>Código Portafolio</th>
                    <th>Código Contabilidad</th>
                    <th>Valor Fondo</th>
                    {
                      this.validateValorFondoType(this.props.name) ? 
                      <th>Detalles</th> : ""
                    }
                    
                </tr>
                </thead>         
                { 
                  this.props.details.map(detail =>
                    <tbody className="fontSizeDetail">
                      <tr key={detail.id} className={cls({'alert alert-danger': detail.valor == 0, 'alert alert-info': typeof detail.valor == "undefined"})}>
                        <td>{detail.codigoPortafolio}</td>
                        <td className="alignNumber">{detail.codigoContabilidad}</td>
                        <td className="alignNumber">{new Intl.NumberFormat('en-US').format(detail.valor)}</td>
                        {
                          this.validateValorFondoType(this.props.name) ?
                            <td>
                              <button className="btn btn-default btn-xs" 
                                type="button" data-toggle="collapse" 
                                data-target={"#"+detail.codigoPortafolio+"detalleCuentas"} aria-expanded="false" aria-controls="collapseExample"
                              >
                                <span className="glyphicon glyphicon-list-alt" aria-hidden="true"/>
                              </button>                     
                            </td> : ""                          
                        } 
                      </tr>   
                      {
                        this.validateValorFondoType(this.props.name) ?
                        <tr>                    
                          <td colSpan = "4">
                            <div className="collapse" id={detail.codigoPortafolio+"detalleCuentas"}>
                              <table className="table table-bordered table-hover table-condensed">
                                <thead>
                                  <tr>
                                    <th>Cuenta Contable</th>
                                    <th>Saldo</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {
                                    detail.valorFondoDetalle.sort(
                                      (a, b) => {
                                        if(a.idCuentaContable > b.idCuentaContable) {
                                          return 1;
                                        } 
                                        if(a.idCuentaContable < b.idCuentaContable) {
                                          return -1;
                                        } 
                                        return 0;
                                      }
                                    ).map(subItem => 
                                      <tr>
                                        <td className="alignNumber">{subItem.idCuentaContable}</td>
                                        <td className="alignNumber">{subItem.saldo}</td>
                                      </tr>
                                    )
                                  }
                                </tbody>
                              </table>
                            </div>
                          </td>                   
                        </tr> : ""                    
                      }                              
                    </tbody>
                  ) 
                }
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
    listValorFondo: state.listarValorFondo.listaValorFondo 
  }
}

export default connect(mapStateToProps, {}
                      )(ModalValorFondo)
