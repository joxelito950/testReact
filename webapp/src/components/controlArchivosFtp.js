import React, { Component } from 'react';
import { connect } from 'react-redux';
import {listarArchivosGenericos} from '../actions'
import Search from './search';
import Control from './control';
import {replace} from '../utils/utils';
import 'sweetalert2/dist/sweetalert2.min.css';
import {default as swal} from 'sweetalert2';

class ControlArchivosFtp extends Component {

    buildFilesList() {
        return this.props.filesList.map((file) => {
              return (
                  <tr key={file.id}>
                      <td>{file.fileName}</td>
                      <td>{file.usuario}</td>
                      <td>{file.destino}</td>
                  </tr>
              )
          })
  
    }

    render() {
        return (
            <div >
                <Control showProcess={this.props.listarArchivosGenericos}
                    title={"Enviar Archivos"} dateProcess={this.props.searchDate} isGenerate={false} isSend={true}
                    isSearch={true} isText={false} placeholderSearch="YYYY-MM-DD" />
                <br />  
                              
                <div id="listItems" className="table-responsive row">                    
                    <table id="listItemsTable" className="table table-bordered table-hover table-condensed">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Usuario</th>
                                <th>Destino</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.filesList != [] ? this.buildFilesList() : ""}
                        </tbody>
                    </table>
                </div>
            </div >

        )
    }
}
function mapStateToProps(state) {
    return {
        filesList: state.archivosGenericos.filesList,
        searchDate: state.archivosGenericos.searchDate
    }
}
export default connect(mapStateToProps, {listarArchivosGenericos})(ControlArchivosFtp)
