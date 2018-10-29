import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reportGenerate, showAlertProgress} from '../actions';
import Control from './control';

class ReportsGenerate extends Component {

  generateFile(fileName, url) {
    this.props.showAlertProgress(true);
    this.props.reportGenerate(this.props.dateSearch, fileName, url);
  }

  buildReports() {
    return [
      {
        name: "Eventos no procesados", 
        fileName: "eventos_no_procesados_", 
        url: "/control-valoracion/rest/reporte/generate/"
      },
      {
        name: "Valoración", 
        fileName: "valoracion_", 
        url: "/control-valoracion/rest/reporteValoraciones/generate/"
      },
      {
        name: "Cuadre Contable", 
        fileName: "cuadreContable_", 
        url: "/navs-services/rest/cuadreContableService/generate/"
      }      
    ];
  }

  drawRows() {
    return this.buildReports().map(item =>
      <tr key={item.fileName+item.name}>
        <td>{item.name}</td>
        <td>
          <button type="button" className="btn btn-primary btn-xs glyphicon glyphicon-play"
            disabled={this.props.msg === "Ok" ? false : true}
            onClick={this.generateFile.bind(this, item.fileName, item.url)}
          />
        </td>
      </tr>
    );
  }

    render() {
        return (
          <div>
            <Control isGenerate={false} title={"Generar Reportes"}
              isText={false} placeholderSearch="YYYY-MM-DD" />
            <div id="reportsList" className="col-md-6 col-md-offset-3 row">
              <table className="table table-bordered table-hover table-condensed">
                <thead>
                  <tr>
                     <th>Tipo</th>
                     <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.drawRows()}
                </tbody>
              </table>
            </div>
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      msg: state.validacionFallida.msg,
      dateSearch: state.validacionFallida.dateSearch
    }
}

export default connect(mapStateToProps, {reportGenerate, showAlertProgress})(ReportsGenerate)
