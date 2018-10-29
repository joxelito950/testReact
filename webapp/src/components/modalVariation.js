import React, {Component} from 'react';

export default class extends Component {

    render() {
      console.log(this.props.tipoProceso);
            
        return (
          <div id="myModalVariation" className="modal fade" role="dialog">
            <div className="modal-dialog modal-sm">
              <div className="modal-content">
                <div className="modal-header">
                <input className="form-control input-sm" type="text" value="input-sm" />
                  <button type="button" className="btn btn-default"  onClick={this.props.updateVariation.bind(this,this.props.listaTipoProceso)} data-toggle="modal" data-target="#myModalFile">Generar Archivo</button>
                <h4 className="modal-title">Spirit</h4>
                </div>
                  
               </div>
            </div>
          </div>
        );
    }
}
