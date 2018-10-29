import { combineReducers } from 'redux';
import { showProcessPrices, procesos, findDetails, showProcessTypes,
          obtenerFechaProceso, actualizarTiposProcesos,
          obtenerListaPrecioManual, generarArchivo,
          validacionFallida,ejecutarValorFondo,showProcessNavs, showProcessAladdin,
          procesosNavs, listarValorFondo, actualizarFechaProceso,listarTipoPrecioManual,showProcessAlertProgress,
          tableDynamic, ejecutarValorFondo2, getIdTipoPrecio,login,tableDynamicParametroPortafolio,
          tableDynamicPrecioManual,tableDynamicPrecioManualDetalle, getListaControl,
          obtenerListaProcesosFtp, showProcessTypesFtp, reintentarProcesoFtp,ejecutarFormatoRegulatorio,
          ejecutarScore,obtenerListaProcesoCurvas, listarTiposProcesosCVA_DVA,
          listarProcesosPorFechaCVA_DVA, ejecutarInformacionDiaria, obtenerParametroDiasFestivos,
          obtenerDiasFestivos, guardarDiasFestivos, verificarDiasFestivos, downloadFtp,
          codigosDcv, cuentasBancarias, smInversiones, verificarProcesosEjecutados, archivosGenericos
        } from './reducers';

const rootReducer = combineReducers({
  showProcessPrices, procesos, findDetails, showProcessTypes,
  obtenerFechaProceso, actualizarTiposProcesos, obtenerListaPrecioManual, generarArchivo,
  validacionFallida,ejecutarValorFondo,
  showProcessNavs, procesosNavs, listarValorFondo, showProcessAladdin, actualizarFechaProceso,listarTipoPrecioManual,
  showProcessAlertProgress,tableDynamic,ejecutarValorFondo2, getIdTipoPrecio,login,tableDynamicParametroPortafolio,
  tableDynamicPrecioManual,  tableDynamicPrecioManualDetalle, getListaControl, obtenerListaProcesosFtp,reintentarProcesoFtp,
  showProcessTypesFtp,ejecutarFormatoRegulatorio, ejecutarScore,obtenerListaProcesoCurvas, listarTiposProcesosCVA_DVA,
  listarProcesosPorFechaCVA_DVA, ejecutarInformacionDiaria, obtenerParametroDiasFestivos,
  obtenerDiasFestivos, guardarDiasFestivos, verificarDiasFestivos, downloadFtp,
  codigosDcv, cuentasBancarias, smInversiones, verificarProcesosEjecutados, archivosGenericos
});

export default rootReducer;
