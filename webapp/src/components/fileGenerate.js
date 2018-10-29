import React, {Component} from 'react';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { connect } from 'react-redux';
import {showAlertProgress} from '../actions';

class FileGenerate extends Component {

    generateFile(listaProcesos, service) {
      let forgeGenerate = document.getElementById("generateFileCheck");
      this.props.showAlertProgress(true);
      this.props.generarArchivo(listaProcesos, service, forgeGenerate == null ? false : forgeGenerate.checked);
    }

    render() {
        return (
          <div id="fileGenerate" className="row">
            
              {
                this.props.forceGenerate ? 
                <div className="col-md-6">
                <h6><label className="pull-left">
                <input type="checkbox" id="generateFileCheck" />Autorizar Envío
              </label></h6></div>  : ""
              }           
            
            <div className="col-md-6 pull-right">
              <button type="button" className="btn btn-primary pull-right" disabled={!this.props.completed} onClick={this.generateFile.bind(this,this.props.listaProcesos, this.props.service)}>Generar Archivo</button>              
            </div>
          </div>

        );
    }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps, {showAlertProgress})(FileGenerate)
