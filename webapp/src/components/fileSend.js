import React, {Component} from 'react';
import { connect } from 'react-redux';
import {showAlertProgress, envioArchivoGenerico, setValue} from '../actions';
import {showMessage} from "../utils/utils";

let fileToSend = null, destination = null, fileName = null, extensions = [".csv", ".txt"];

class FileSend extends Component {

    selectFile(file) {
        let reader  = new FileReader();
    
        if (file) {
            reader.readAsBinaryString(file);
            fileName = file.name;
            document.getElementById("nameFile").value = fileName;
    
            reader.onload = function (readerEvt) {
                fileToSend = btoa(readerEvt.target.result);  
            }
        }      
    }

    validateExtension(e) {
        if(typeof e.target.files[0] != 'undefined') {
            let file = e.target.files[0];
            if(extensions.includes(file.name.substring((file.name.length-4), file.name.length))) {
                this.selectFile(file);
            } else {
                showMessage("El archivo no es válido. Sólo se admiten archivos planos (.csv - .txt)", "warning", () => {}, false);
            }
        }
    }

    selectDestination(e) {
       destination = e.target.value;
    }

    sendFile(result) {
        this.props.showAlertProgress(true);
        this.props.envioArchivoGenerico(result);
    }

    validSend() {
        if(destination == null || destination == 0 || fileToSend == null) {
            showMessage("Debe seleccionar un archivo y un destino", "error", () => {}, false);
        } else {
            this.sendFile({
                ruta: destination,
                archivo: fileToSend,
                nombre: fileName
            });
        }
    }

    render() {
        if(this.props.fileSend === "OK") {
            showMessage("Archivo cargado con éxito", "success", this.props.setValue, false, "");
        }
        return (
            <div className="row">
                <div className="input-group">
                    <label className="input-group-btn">
                        <span className="btn btn-default">
                            Seleccionar
                            <input type="file" style={{display: 'none'}} 
                                onChange={this.validateExtension.bind(this)} 
                                accept={extensions}
                            />        
                        </span>
                    </label> 
                    <input id="nameFile" type="text" className="form-control" aria-label="..." disabled value="No ha seleccionado un archivo"/> 
                    <div className="input-group-btn my-group">
                        <select className="form-control" onChange={this.selectDestination.bind(this)}>
                            <option value="0">---Destino---</option>
                            <option value="ALADDIN_DIR">toAladdin</option>
                            <option value="ALADDIN_DIR2">tobfm</option>
                        </select>  
                    </div>                        
                    <div className="input-group-btn">
                        <span className="btn btn-primary" onClick={this.validSend.bind(this)}>
                            Enviar        
                        </span>
                    </div>                         
                </div>                    
            </div>  
        );
    }
}

function mapStateToProps(state) {
  return {
      fileSend: state.archivosGenericos.fileSend
  }
}

export default connect(mapStateToProps, {showAlertProgress, envioArchivoGenerico, setValue})(FileSend)