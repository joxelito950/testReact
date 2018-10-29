import axios from 'axios';
import Moment from 'moment';
import { default as swal } from 'sweetalert2';
import { replace } from 'react-router-redux';
import {convertMillisecondsToDate, convertDateToMillisecondsReport,
        convertMillisecondsToDateWithoutSeparator} from "../utils/utils";

export const SHOW_PROCESS_PRICES = 'SHOW_PROCESS_PRICES'
export const GENERAR_ARCHIVO = 'GENERAR_ARCHIVO'
export const CHECKLIST = 'CHECKLIST'
export const FIND_DETAILS = 'FIND_DETAILS'
export const SHOW_TYPES_PROCESS = 'SHOW_TYPES_PROCESS'
export const GUARDAR_PRECIOS_MANUAL = 'GUARDAR_PRECIOS_MANUAL'
export const FECHA_PROCESO = 'FECHA_PROCESO'
export const UPDATE_PROCESS_TYPE = 'UPDATE_PROCESS_TYPE'
export const LISTAR_PRECIOS_MANUAL = 'LISTAR_PRECIOS_MANUAL'
export const OCULTAR = 'OCULTAR'
export const LISTAR_PARAMETROS_PORTAFOLIO = 'LISTAR_PARAMETROS_PORTAFOLIO'
export const VALIDACION_FALLIDA = 'VALIDACION_FALLIDA'
export const VALIDACION_EXITOSA = 'VALIDACION_EXITOSA'
export const GUARDAR_PARAMETRO_PORTAFOLIO = 'GUARDAR_PARAMETRO_PORTAFOLIO'
export const EJECUTAR_VALOR_FONDO = "EJECUTAR_VALOR_FONDO"
export const SHOW_PROCESS_NAVS = 'SHOW_PROCESS_NAVS'
export const SHOW_PROCESS_NAVS_TO_EXECUTE = 'SHOW_PROCESS_NAVS_TO_EXECUTE'
export const SHOW_PROCESS_ALADDIN = 'SHOW_PROCESS_ALADDIN'
export const CHECKLIST_NAVS = 'CHECKLIST_NAVS'
export const LISTAR_VALOR_FONDO = "LISTAR_VALOR_FONDO"
export const ACTUALIZAR_FECHA_PROCESO = "ACTUALIZAR_FECHA_PROCESO"
export const EJECUTAR_ARCHIVO_MANUAL_FTP = "EJECUTAR_ARCHIVO_MANUAL_FTP"
export const LISTAR_TIPO_PRECIOS_MANUAL = 'LISTAR_TIPO_PRECIOS_MANUAL'
export const SHOW_ALERT_PROGRESS = 'SHOW_ALERT_PROGRESS'
export const LISTAR_PRECIOS_MANUAL_POR_TIPO = 'LISTAR_PRECIOS_MANUAL_POR_TIPO'
export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const LISTAR_FACTOR_OPCION = 'LISTAR_FACTOR_OPCION'
export const GUARDAR_FACTOR_OPCION = 'GUARDAR_FACTOR_OPCION'
export const BORRAR_FACTOR_OPCION = 'BORRAR_FACTOR_OPCION'
export const MOSTRAR = 'MOSTRAR'
export const BORRAR_FACTOR_OPCION_BY_ID = 'BORRAR_FACTOR_OPCION_BY_ID'
export const ADD_ITEM_PRECIO_MANUAL = 'ADD_ITEM_PRECIO_MANUAL'
export const REMOVE_ITEM_PRECIO_MANUAL = 'REMOVE_ITEM_PRECIO_MANUAL'
export const SAVE_ITEM_PRECIO_MANUAL = 'SAVE_ITEM_PRECIO_MANUAL'
export const ID_TIPO_PRECIO_MANUAL = 'ID_TIPO_PRECIO_MANUAL'
export const LOGIN = 'LOGIN'
export const LOCAL_STORAGE_LOAD = 'LOCAL_STORAGE_LOAD'
export const LOCAL_STORAGE_SAVE = 'LOCAL_STORAGE_SAVE'
export const LOCAL_STORAGE_CLEAN = 'LOCAL_STORAGE_CLEAN'
export const UPDATE_STATE_LOCAL_STORAGE = 'UPDATE_STATE_LOCAL_STORAGE'
export const ADD_ITEM_PARAMETRO_PORTAFOLIO = 'ADD_ITEM_PARAMETRO_PORTAFOLIO'
export const REMOVE_ITEM_PARAMETRO_PORTAFOLIO = "REMOVE_ITEM_PARAMETRO_PORTAFOLIO"
export const SAVE_ITEM_PARAMETRO_PORTAFOLIO = "SAVE_ITEM_PARAMETRO_PORTAFOLIO"
export const BAJA_PARAMETRO_PORTAFOLIO = "BAJA_PARAMETRO_PORTAFOLIO"
export const REMOVE_ITEM_PRECIO = "REMOVE_ITEM_PRECIO"
export const REPLICATE_PROCESS_RVL = 'REPLICATE_PROCESS_RVL'
export const FIND_DETAILS_PRECIO_MANUAL_FCP = 'FIND_DETAILS_PRECIO_MANUAL_FCP'
export const ADD_ITEM_PRECIO_MANUAL_DETALLE = 'ADD_ITEM_PRECIO_MANUAL_DETALLE'
export const REMOVE_ITEM_PRECIO_MANUAL_DETALLE = 'REMOVE_ITEM_PRECIO_MANUAL_DETALLE'
export const GUARDAR_PRECIO_MANUAL_DETALLE = 'GUARDAR_PRECIO_MANUAL_DETALLE'
export const ACTUALIZAR_PRECIO_MANUAL_DETALLE = 'ACTUALIZAR_PRECIO_MANUAL_DETALLE'
export const OBTENER_LISTA_PROCESOS_FTP = 'OBTENER_LISTA_PROCESOS_FTP';
export const SHOW_TYPES_PROCESS_FTP = 'SHOW_TYPES_PROCESS_FTP';
export const SHOW_TYPES_PROCESS_PRICE  = 'SHOW_TYPES_PROCESS_PRICE'
export const GET_LISTA_CONTROL = 'GET_LISTA_CONTROL'
export const ADD_ITEM_LISTA_CONTROL = 'ADD_ITEM_LISTA_CONTROL'
export const GUARDAR_LISTA_CONTROL = 'SAVE_LISTA_CONTROL'
export const ELIMINAR_LISTA_CONTROL = 'ELIMINAR_LISTA_CONTROL'
export const ELIMINAR_ITEM_LISTA_CONTROL = 'ELIMINAR_ITEM_LISTA_CONTROL'
export const ID_PROCESO = 'ID_PROCESO'
export const REINTENTAR_CARGUE_PROCESO = 'REINTENTAR_CARGUE_PROCESO'
export const REINTENTAR_PROCESO_FTP= 'REINTENTAR_PROCESO_FTP'
export const APPLY_LOADING_BAR_FORMATO = 'APPLY_LOADING_BAR_FORMATO'
export const APPLY_LOADING_BAR_SCORE = 'APPLY_LOADING_BAR_SCORE'
export const OBTENER_CRG_POSICIONES = 'OBTENER_CRG_POSICIONES'
export const OBTENER_F_351 = 'OBTENER_F_351'
export const EJECUTAR_FORMATO_REGULATORIO = 'EJECUTAR_FORMATO_REGULATORIO'
export const OBTENER_SCORE = 'OBTENER_SCORE'
export const LISTAR_TIPO_PROCESO_CURVA = 'LISTAR_TIPO_PROCESO_CURVA'
export const LISTAR_TIPO_PROCESO_CURVA_FECHA = 'LISTAR_TIPO_PROCESO_CURVA_FECHA'
export const CHECKLIST_CURVAS = 'CHECKLIST_CURVAS'
export const DETALLE_CURVAS = 'DETALLE_CURVAS'
export const REINTENTAR_CURVAS_FORWARD = 'REINTENTAR_CURVAS_FORWARD'
export const LISTAR_TIPOS_PROCESOS_CVA_DVA = 'LISTAR_TIPOS_PROCESOS_CVA_DVA'
export const LISTAR_PROCESOS_POR_FECHA_CVA_DVA = 'LISTAR_PROCESOS_POR_FECHA_CVA_DVA'
export const OBTENER_VAL_OPCT = 'OBTENER_VAL_OPCT'
export const OBTENER_VAL_OPCT_TTVRV = 'OBTENER_VAL_OPCT_TTVRV'
export const OBTENER_CLS_EVNT_CONT = 'OBTENER_CLS_EVNT_CONT'
export const OBTENER_SEC_MASTER = 'OBTENER_SEC_MASTER'
export const EJECUTAR_SEC_MASTER = 'EJECUTAR_SEC_MASTER'
export const OBTENER_VAL_POS = 'OBTENER_VAL_POS'
export const OBTENER_PARAMETRO_DIAS_FESTIVOS = 'OBTENER_PARAMETRO_DIAS_FESTIVOS'
export const OBTENER_DIAS_FESTIVOS = 'OBTENER_DIAS_FESTIVOS'
export const OBTENER_OPC_VALO_FUT = 'OBTENER_OPC_VALO_FUT';
export const GUARDAR_DIAS_FESTIVOS = 'GUARDAR_DIAS_FESTIVOS'
export const VERIFICAR_DIAS_FESTIVOS = 'VERIFICAR_DIAS_FESTIVOS'
export const REPLICATE_PROCESS_FUTUROS = 'REPLICATE_PROCESS_FUTUROS'
export const DOWNLOAD_FTP = 'DOWNLOAD_FTP'
export const OBTENER_CONTRAPARTES = 'OBTENER_CONTRAPARTES'
export const EJECUTAR_CONTRAPARTES = 'EJECUTAR_CONTRAPARTES'
export const OBTENER_F_471 = 'OBTENER_F_471'
export const OBTENER_CRG_VEN_OPER = 'OBTENER_CRG_VEN_OPER'
export const OBTENER_CRG_VEN_CASHWF = 'OBTENER_CRG_VEN_CASHWF'
export const OBTENER_CRG_VAL_FUT = 'OBTENER_CRG_VAL_FUT'

export const OBTENER_EVENTO_OPER = 'OBTENER_EVENTO_OPER'
export const OBTENER_EVENTO_VENCIM = 'OBTENER_EVENTO_VENCIM'
export const OBTENER_EVENTO_OPCT = 'OBTENER_EVENTO_OPCT'
export const OBTENER_EVENTO_FX = 'OBTENER_EVENTO_FX'
export const OBTENER_EVENTO_FUT = 'OBTENER_EVENTO_FUT'
export const OBTENER_EVENTO_POS = 'OBTENER_EVENTO_POS'
export const OBTENER_CRG_VEN_WEEK = 'OBTENER_CRG_VEN_WEEK'
export const OBTENER_CRG_VEN_PAY_FAILS = 'OBTENER_CRG_VEN_PAY_FAILS'
export const OBTENER_CRG_VAL_FX_SWAP = 'OBTENER_CRG_VAL_FX_SWAP'
export const OBTENER_CRG_OPERACIONES_TRD = 'OBTENER_CRG_OPERACIONES_TRD'
export const OBTENER_CRG_OPER_TRD_AJST = 'OBTENER_CRG_OPER_TRD_AJST';
export const OBTENER_CRG_OPERACIONES_REP = 'OBTENER_CRG_OPERACIONES_REP'
export const OBTENER_CRG_OPERACIONES_COLL = 'OBTENER_CRG_OPERACIONES_COLL'
export const OBTENER_CRG_OPERACIONES_CMAT = 'OBTENER_CRG_OPERACIONES_CMAT'
export const OBTENER_CRG_VEN_SWAPPAY = 'OBTENER_CRG_VEN_SWAPPAY'
export const OBTENER_VAL_POS_GAR_REP = 'OBTENER_VAL_POS_GAR_REP'
export const LISTAR_DCV = 'LISTAR_DCV'

export const EJECUTAR_UPDATE_LISTA_CONTROL = 'EJECUTAR_UPDATE_LISTA_CONTROL'
export const OBTENER_UPDATE_LISTA_CONTROL = 'OBTENER_UPDATE_LISTA_CONTROL'

export const ADD_ITEM_ISIN_DCV = 'ADD_ITEM_ISIN_DCV'
export const REMOVE_ITEM_ISIN_DCV = 'REMOVE_ITEM_ISIN_DCV'
export const SAVE_LIST_ISIN_DCV = 'SAVE_LIST_ISIN_DCV'
export const LISTAR_CUENTAS_BANCARIAS = 'LISTAR_CUENTAS_BANCARIAS'
export const ADD_ITEM_CUENTA_BANCARIA= 'ADD_ITEM_CUENTA_BANCARIA'
export const SAVE_LIST_CUENTAS_BANCARIAS = 'SAVE_LIST_CUENTAS_BANCARIAS'
export const REMOVE_CUENTA_BANCARIA = 'REMOVE_CUENTA_BANCARIA'
export const LISTAR_SM_INVERSION = 'LISTAR_SM_INVERSION'
export const UPDATE_SM_INVERSION = 'UPDATE_SM_INVERSION'

export const OBTENER_VALOR_FONDO_VOLUNTARIO = 'OBTENER_VALOR_FONDO_VOLUNTARIO'
export const OBTENER_VALOR_FONDO_CESANTIAS = 'OBTENER_VALOR_FONDO_CESANTIAS'

export const DETALLES_LISTA_CONTROL = 'DETALLES_LISTA_CONTROL'
export const OBTENER_F_468 = 'OBTENER_F_468'
export const OBTENER_F_397 = 'OBTENER_F_397'
export const OBTENER_CRG_FIXING = 'OBTENER_CRG_FIXING'
export const OBTENER_CRG_VEN_FIXING = 'OBTENER_CRG_VEN_FIXING'
export const OBTENER_CRG_VAL_FUT_PAGO = 'OBTENER_CRG_VAL_FUT_PAGO'
export const PROCESOS_EJECUTADOS_CONTROL_SERVICES = 'PROCESOS_EJECUTADOS_CONTROL_SERVICES'
export const PROCESOS_EJECUTADOS_CONTROL_CURVAS = 'PROCESOS_EJECUTADOS_CONTROL_CURVAS'
export const PROCESOS_EJECUTADOS_CONTROL_DERIVADOS = 'PROCESOS_EJECUTADOS_CONTROL_DERIVADOS'
export const OBTENER_VAL_OPCT_TTVRF = 'OBTENER_VAL_OPCT_TTVRF'
export const OBTENER_CRG_VEN_EVENTOS = 'OBTENER_CRG_VEN_EVENTOS'
export const OBTENER_CRG_AJT_OPE_CMAT = 'OBTENER_CRG_AJT_OPE_CMAT'

export const ENVIO_ARCHIVO_GENERICO = 'ENVIO_ARCHIVO_GENERICO'
export const SET_VALUE = 'SET_VALUE'
export const LISTAR_ARCHIVOS_GENERICOS = 'LISTAR_ARCHIVOS_GENERICOS'

export const OBTENER_CRG_OP_AJS_SPOT = 'OBTENER_CRG_OP_AJS_SPOT'
export const FIND_SONS_ACCOUNTS_BANK_CUSIP = 'FIND_SONS_ACCOUNTS_BANK_CUSIP'
export const DELETE_SON_ACCOUNTS_BANK_CUSIP = 'DELETE_SON_ACCOUNTS_BANK_CUSIP'
export const ADD_SON_ACCOUNTS_BANK_CUSIP = 'ADD_SON_ACCOUNTS_BANK_CUSIP'
export const SAVE_SONS_ACCOUNTS_BANK_CUSIP = 'SAVE_SONS_ACCOUNTS_BANK_CUSIP'
export const UPDATE_LIST_SONS_ACCOUNTS_BANK_CUSIP = 'UPDATE_LIST_SONS_ACCOUNTS_BANK_CUSIP'
export const OBTENER_AJS_VENCIM = 'OBTENER_AJS_VENCIM'
export const OBTENER_F_FUTURO = 'OBTENER_F_FUTURO'
export const OBTENER_SPOT_FIXING_VENCIM = 'OBTENER_SPOT_FIXING_VENCIM'
export const OBTENER_CRG_VEN_MAT = 'OBTENER_CRG_VEN_MAT'
export const OBTENER_F_472 = 'OBTENER_F_472'
export const OBTENER_AJUSTE_FIX_VALO = 'OBTENER_AJUSTE_FIX_VALO'

//let urlServer = "https://localhost:9443";
let urlServer = "";
let messageError = "Ocurrió un error inesperado. Favor contactar al área de soporte.";

function convert(dateToConvert) {
  return Moment(dateToConvert, "YYYY-MM-DD").valueOf();
}

function generateRandom() {
    return (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
}

function showError(message, error, icon) {
  swal({
    title: 'Spirit',
    text: message,
    type: icon,
    confirmButtonColor: '#337ab7',
    confirmButtonText: 'Aceptar',
    allowEscapeKey:false,
    allowOutsideClick:false,
    width: 400
  }).then(function () {
      if (typeof error != "undefined" && error.response.status === 401) {
          window.location.reload();
      }
  });
}

axios.interceptors.request.use(
    function (config) {
        if (config.url.indexOf('/jano/') === -1 && config.url.indexOf('/public/') === -1) {
            config.headers['Authorization'] = 'Bearer ' + JSON.parse(localStorage['user']).token;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    let errorText = '';
    if (error.response.config.url.indexOf('/jano/') !== -1) {
        if (error.response.status === 401) {
            errorText = 'Usuario y/o contraseña incorrecto';
        } else if(error.response.status === 404) {
            errorText = messageError;
        } else {
            errorText = error.response.data.header.message;
        }
    } else {
        if (error.response.status === 400 && error.response.data.header === undefined) {
            errorText = 'No se encuentra autorizado para ingresar a la aplicación';
        } else if (error.response.status === 401) {
            errorText = 'Expiró su sesión';
            try {
                localStorage.clear();
            } catch (err) { }
        } else if(error.response.status === 404) {
            errorText = messageError;
        } else {
            errorText = error.response.headers['internal-error-message'];
        }
    }
    showError(errorText, error, 'error');
    return Promise.reject(error);
});

export function showProcessPrices(dateProcess) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/procesos/listar/PRECIOS',
            data: {
                value: dateProcess
            }
        }).then((response) => {
            dispatch(
                {
                    type: SHOW_PROCESS_PRICES,
                    payload: {
                            data: response.data
                                .filter(item => "PRECIO_MANUAL_ARCHIVO" !== item.tipoProceso.nombre)
                                .map(
                                    item =>
                                    {
                                        item.id = item.tipoProceso.nombre === "PRECIOS_MANUAL" ?
                                            generateRandom() :
                                            item.id;
                                        item.render = generateRandom()
                                        return item;
                                    }
                                ),
                            date: dateProcess
                        }
                    }
            );
        });
    }
}

export function showProcessTypes(groupName) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/tipoProceso/getAllTipoProceso',
            data: { value: groupName }
        }).then((response) => {
            dispatch({ type: SHOW_TYPES_PROCESS, payload: response.data });
        });
    }
}

export function obtenerListaProcesosFtp(searchDate) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/spirit-ftp-services/rest/ftp/date',
            data: {
                value: typeof searchDate == "string" ? convert(searchDate) : searchDate
            }
        }).then((response) => {
            dispatch({
                type: OBTENER_LISTA_PROCESOS_FTP,
                payload: {
                    data: response.data,
                    searchDate: typeof searchDate == "string" ? convert(searchDate) : searchDate
                }
            })
        });
    }
}

export function showProcessTypesFtp(groupName) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/spirit-ftp-services/rest/ftp/types'
        }).then((response) => {
            dispatch({ type: SHOW_TYPES_PROCESS_FTP, payload: response.data });
        });
    }
}

export function downloadFtp() {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/batch-processor/rest/manual/ftp'
        }).then((response) => {
            dispatch({ type: DOWNLOAD_FTP, payload: response.data });
        }).catch((error) => {
            dispatch(showAlertProgress(false));
            showError(error.response.headers['internal-error-message'], error, 'error');
        });
    }
}

export function reintentarProcesoFtp(idProcesoFtp, fechaConsulta) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/spirit-ftp-services/rest/ftp/retry',
            data: {
                value: idProcesoFtp
            }
        }).then((response) => {
            dispatch({
                type: REINTENTAR_PROCESO_FTP,
                payload: response.data
            });
            dispatch(obtenerListaProcesosFtp(fechaConsulta));
        }).catch((error) => {
            dispatch(showAlertProgress(false));
            showError(error.response.headers['internal-error-message'], error, 'error');
            dispatch(obtenerListaProcesosFtp(fechaConsulta));
        });;
    }
}

export function generarArchivo(list, service, forceGenerate) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + service,
            data: {processList: list.map(
                                    item =>
                                    isNaN(item.id) || typeof item.id == "undefined" ?
                                    item.proceso : item.id
                                ),
                    generate: forceGenerate
                    }
        }).then((response) => {
            dispatch({ type: GENERAR_ARCHIVO, msg: 'Archivo Generado' });
        }).catch(error => {
            dispatch(showAlertProgress(false));
            showError(error.response.headers['internal-error-message'], error, 'error');
        });
    }
}

export function checkId(idProc) {
    return (dispatch) => {
        dispatch({ type: CHECKLIST, idProcess: idProc });
    }
}

export function checkIdNavs(idProc) {
    return (dispatch) => {
        dispatch({ type: CHECKLIST_NAVS, idProcess: idProc });
    }
}

export function findDetails(idProcess, service, processDate) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/prices/details/' + service,
            data: {
                id: isNaN(idProcess) ? null : idProcess,
                fechaProceso: processDate
            }
        }).then((response) => {
            dispatch({ type: FIND_DETAILS, payload: response.data });
        });
    }
}

export function guardarPreciosManual(listaPrecioManual, accion, nombrePrecio, listaPrecioOriginal, fechaProceso) {
    return (dispatch) => {
        dispatch(validacionFallida(""));
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/prices/guardar/PreciosManual',
            data: newItemPrecioManual(listaPrecioManual, accion, listaPrecioOriginal, fechaProceso)
        }).then((response) => {
            dispatch({ type: GUARDAR_PRECIOS_MANUAL, payload: response.data });
            dispatch(obtenerListaPrecioManualPorTipoPrecio(nombrePrecio[0].nombre));
        });
    }
}

export function obtenerFechaProceso() {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/parameters/process-date'
        }).then((response) => {
            dispatch({ type: FECHA_PROCESO, payload: response.data });
            dispatch({
                type: LOCAL_STORAGE_SAVE, key: 'fechaProceso', data: response.data
            });
        });
    }
}

function buildUrlSocket(url) {
    //return "wss://localhost:9443"+url;
    return "wss://"+window.location.host+url;
}

export function obtenerListaPrecioManual() {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/prices/listar/preciosManual'
        }).then((response) => {
            dispatch({ type: LISTAR_PRECIOS_MANUAL, payload: response.data });
        });
    }
}

var newItemPrecioManual = function (listaEntidad, accion, listaPrecioOriginal, fechaProceso) {
    let precioManual = {
        "listaPrecioManualEliminado": [],
        "listaPrecioManualNuevo": [],
        "listaPrecioManualActualizado": []
    }

    for (var i = 0; i < listaEntidad.length; i++) {
        if (!isNaN(parseInt(listaEntidad[i].id)) === true && accion == "delete") {
            precioManual.listaPrecioManualEliminado.push(listaEntidad[i], );
        } else if (accion == "save") {
            listaPrecioManualProcess(listaEntidad[i], listaPrecioOriginal, precioManual, fechaProceso);
        }
    }
     eliminarIdPrecioActualizado(precioManual.listaPrecioManualActualizado,fechaProceso);
    return precioManual;
};

export function actualizarTiposProcesos(list) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/tipoProceso/actualizarVariacion',
            data: list
        }).then((response) => {
            dispatch({ type: UPDATE_PROCESS_TYPE, payload: response.data });
        }).catch((error) => {
            dispatch({ type: UPDATE_PROCESS_TYPE, msg: error });
        });
    }
}

export function ocultar() {
    return (dispatch) => {
        dispatch({ type: OCULTAR, showAlertprocessTypesUpdated: false });
    }
}

export function obtenerListaParametrosPortafolio() {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/parametros/listar/portafolio'
        }).then((response) => {
            dispatch({ type: LISTAR_PARAMETROS_PORTAFOLIO, payload: response.data });
        }).catch((error) => {
            dispatch({ type: LISTAR_PARAMETROS_PORTAFOLIO, msg: error });
        });
    }
}

export function validacionFallida(msg) {
    return (dispatch) => {
        dispatch({ type: VALIDACION_FALLIDA, msg: msg });
    }
}

export function validacionExitosa(dateSearch) {
    return (dispatch) => {
        dispatch({ type: VALIDACION_EXITOSA, dateSearch: dateSearch });
    }
}

export function guardarParametroPortafolio(listaPortafolio, accion,fechaProceso) {
    return (dispatch) => {
        dispatch(validacionFallida(""));
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/parametros/guardar/portafolio',
            data: newItemPortafolio(listaPortafolio, accion,fechaProceso)
        }).then((response) => {
            dispatch({ type: GUARDAR_PARAMETRO_PORTAFOLIO, payload: response.data });
            dispatch(obtenerListaParametrosPortafolio());
        });
    }
}

var newItemPortafolio = function (listaPortafolio, accion,fechaProceso) {
    let parametros = {
        "listaPortafolioEliminado": [],
        "listaPortafolioNuevo": [],
        "fechaProceso" : fechaProceso
    }
    for (var i = 0; i < listaPortafolio.length; i++) {
        if (!isNaN(parseInt(listaPortafolio[i].id)) === true && accion == "delete") {
            parametros.listaPortafolioEliminado.push(listaPortafolio[i]);
        } else if (accion == "save") {
            parametros.listaPortafolioNuevo.push(listaPortafolio[i]);
        }
    }
    return parametros;
};

var cleanListPortafolio = function (listaPortafolio) {
    listaPortafolio.listaPortafolioNuevo.length = 0;
    listaPortafolio.listaPortafolioEliminado.length = 0;

    return listaPortafolio;
}

var cleanListPrecioManual = function (listaPrecioManual) {
    listaPrecioManual.listaPrecioManualNuevo.length = 0;
    listaPrecioManual.listaPrecioManualEliminado.length = 0;
    return listaPrecioManual;
}

export function ejecutarValorFondo(value) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/batch-processor/rest/portafolios/cargar',
            data: { value: value }
        }).then((response) => {
            dispatch({ type: EJECUTAR_VALOR_FONDO, payload: response.data });
        });
    }
}

export function ejecutarValorFondo2(value) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/navs-services/rest/valores-fondo/load',
            data: value
        }).then((response) => {
            dispatch({ type: EJECUTAR_VALOR_FONDO, payload: response.data });
            //dispatch(showProcessNavsToExecute(value.fechaProceso));
        });
    }
}

export function showProcessNavs(searchDate) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/navs-services/rest/process/date',
            data: {
                value: typeof searchDate == "string" ? convert(searchDate) : searchDate
            }
        }).then((response) => {
            dispatch(
                {
                    type: SHOW_PROCESS_NAVS,
                    payload: {
                                data: response.data.map(
                                    item => {
                                        item.render = generateRandom();
                                        return item;
                                    }
                                ),
                                searchDate: searchDate
                            }
                }
            );
        });
    }
}

export function showProcessNavsToExecute(dateProcess) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/navs-services/rest/process/date',
            data: {
                value: dateProcess
            }
        }).then((response) => {
            dispatch({ type: SHOW_PROCESS_NAVS_TO_EXECUTE, payload: { data: response.data } });
        });
    }
}

export function showProcessAladdin(dateProcess) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/procesos/listar/ALADDIN',
            data: {
                value: dateProcess
            }
        }).then((response) => {
            dispatch({ type: SHOW_PROCESS_ALADDIN, payload: { data: response.data, date: dateProcess } });
        });
    }
}

export function listarValorFondo(value) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/navs-services/rest/valores-fondo/detail',
            data: { value: value }
        }).then((response) => {
            dispatch({ type: LISTAR_VALOR_FONDO, payload: response.data });
        });
    }
}

export function actualizarFechaProceso(fechaProceso) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/spirit-control-services/rest/control/update-date',
            data: { value: typeof fechaProceso == "string" ? convert(fechaProceso) : fechaProceso }
        }).then((response) => {
            dispatch({ type: ACTUALIZAR_FECHA_PROCESO, payload: response.data });
            dispatch(obtenerFechaProceso());
        });
    }
}

export function listarTipoPrecioManual() {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/prices/listar/tipoPreciosManual',

        }).then((response) => {
            dispatch({ type: LISTAR_TIPO_PRECIOS_MANUAL, payload: response.data });
        });
    }
}

export function showAlertProgress(flat) {
    return (dispatch) => {
        dispatch({ type: SHOW_ALERT_PROGRESS, showAlertProgress: flat });
    }
}

export function addItem(size, listFactors) {
    return (dispatch) => {
        dispatch({ type: ADD_ITEM, payload: { listSize: size, factors: listFactors } });
    }
}

export function removeItem(id) {
    return (dispatch) => {
        dispatch({ type: REMOVE_ITEM, idItem: id });
        dispatch(borrarFactorOpcion(id));
    }
}

export function listarFactoresOpciones() {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/prices/listar/factorOpcion',
        }).then((response) => {
            dispatch({ type: LISTAR_FACTOR_OPCION, payload: response.data });
        });
    }
}

export function guardarFactoresOpciones(listFactors) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/prices/guardar/factorOpcion',
            data: listFactors
        }).then((response) => {
            dispatch({ type: GUARDAR_FACTOR_OPCION, payload: response.data });
        });
    }
}

export function borrarFactoresOpciones(listFactorsToDelete) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/prices/borrar/factorOpcion',
            data: listFactorsToDelete
        }).then((response) => {
            dispatch({ type: BORRAR_FACTOR_OPCION, payload: response.data })
        });
    }
}

export function mostrar(idProgressBar) {
    return (dispatch) => {
        dispatch({ type: MOSTRAR, idProgressBar: idProgressBar });
    }
}

export function obtenerListaPrecioManualPorTipoPrecio(tipoPrecio) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/prices/listar/tipo/preciosManual',
            data: { nombre: tipoPrecio }
        }).then((response) => {
            dispatch({ type: LISTAR_PRECIOS_MANUAL_POR_TIPO, payload: response.data });
        })
    }
}

export function borrarFactorOpcion(idFactor) {
    if (!isNaN(idFactor)) {
        return (dispatch) => {
            axios({
                method: 'post',
                url: urlServer + '/ControlSpiritServices/rest/app/prices/borrar/factorOpcionById',
                data: { value: idFactor }
            }).then((response) => {
                dispatch({ type: BORRAR_FACTOR_OPCION_BY_ID, payload: response.data });
                dispatch(listarFactoresOpciones());
            });
        }
    }
}

export function addItemPrecioManual(size, listFactors) {
     return (dispatch) => {
        dispatch({ type: ADD_ITEM_PRECIO_MANUAL, payload: { listSize: size, factors: listFactors } });
    }
}

export function removeItemPrecioManual(item, nombrePrecio) {
    return (dispatch) => {
        let listaPrecio = [];
        let accion = "delete";
        listaPrecio.push(item);
        dispatch({ type: REMOVE_ITEM_PRECIO_MANUAL, idItem: item.id });
        dispatch(darBajaPreciosManual(listaPrecio, accion, nombrePrecio));
        dispatch(validacionFallida("Ok"));
    }
}

export function saveItemPrecioManual(listaPrecio, nombrePrecio, listaPrecioOriginal, fechaProceso) {
    return (dispatch) => {
        let accion = "save";
        dispatch({ type: SAVE_ITEM_PRECIO_MANUAL });
        dispatch(guardarPreciosManual(listaPrecio, accion, nombrePrecio, listaPrecioOriginal, fechaProceso));
    }
}

export function getIdTipoPrecio(id) {
    return (dispatch) => {
        dispatch({ type: ID_TIPO_PRECIO_MANUAL, idTipoPrecio: id });
    }
}

export function session(userSpirit) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/public/session',
            data: {value: userSpirit.user},
        }).then((response) => {
            dispatch(login(userSpirit));
        }).catch((error) => {console.log(error)});
    }
}

export function login(userSpirit) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/spirit-jano-services/rest/jano/auth',
            data: userSpirit
        }).then((response) => {
            dispatch(directives(response, userSpirit)); 
        });
    }
}


export function directives(loginData, userSpirit){
    return (dispatch) => {
        axios({
          method: 'get',
          headers: { 'Authorization': 'Bearer ' + loginData.data.body.data.token },
          url: urlServer + '/spirit-jano-services/rest/jano/get-directives'
        }).then((response) => {
          dispatch({
              type: LOCAL_STORAGE_SAVE, key: 'user', data: {
                  token: loginData.data.body.data.token,
                  fullName: loginData.data.body.data.userProperties.fullname,
                  msgStatus: loginData.data.header.message,
                  isAuthenticated: true,
                  user: userSpirit.user,
                  directives: response.data.body.data.directives
              }
          });
        });
    }
}

export function logOut() {
    return (dispatch) => {
        axios({
            method: 'get',
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage['user']).token },
            url: urlServer + '/spirit-jano-services/rest/jano/logout'
        }).then((response) => {
            dispatch({ type: LOCAL_STORAGE_CLEAN });
        });
    }
}

export function logOutExpired() {
    return (dispatch) => {
        dispatch({ type: LOCAL_STORAGE_CLEAN });
    }
}

export function loginRedirect(url) {
    return (dispatch) => {
        dispatch(replace(url));
    }
}

export function addItemParametrosPortafolio(size, listParametro) {
    return (dispatch) => {
        dispatch({ type: ADD_ITEM_PARAMETRO_PORTAFOLIO, payload: { listSize: size, factors: listParametro } });
    }
}

export function removeItemParametroPortafolio(item,fechaProceso) {
    return (dispatch) => {
        let listaParametros = [];
        let accion = "delete";
        listaParametros.push(item);
        dispatch({ type: REMOVE_ITEM_PARAMETRO_PORTAFOLIO, idItem: item.id });
        dispatch(darBajaParametroPortafolio(listaParametros, accion,fechaProceso));
        dispatch(validacionFallida("Ok"));
    }
}

export function saveItemParametroPortafolio(listaPrecio) {
    return (dispatch) => {
        let accion = "save";
        dispatch({ type: SAVE_ITEM_PARAMETRO_PORTAFOLIO });
        dispatch(guardarParametroPortafolio(listaPrecio, accion));
    }
}

export function darBajaParametroPortafolio(listaPortafolio, accion,fechaProceso) {
    return (dispatch) => {
        dispatch(validacionFallida(""));
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/parametros/guardar/portafolio',
            data: newItemPortafolio(listaPortafolio, accion,fechaProceso)
        }).then((response) => {
            dispatch({ type: REMOVE_ITEM_PARAMETRO_PORTAFOLIO });
        });
    }
}

export function darBajaPreciosManual(listaPrecioManual, nombrePrecio) {
    let accion = "delete";
    return (dispatch) => {
        dispatch(validacionFallida(""));
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/prices/guardar/PreciosManual',
            data: newItemPrecioManual(listaPrecioManual, accion)
        }).then((response) => {
            dispatch({ type: REMOVE_ITEM_PRECIO, payload: response.data });
        });
    }
}

export function listaPrecioManualProcess(entidad, listPrecioOriginal, precioManual, fechaProceso) {
    for (var item in listPrecioOriginal) {
        if (listPrecioOriginal[item].id == entidad.id && (listPrecioOriginal[item].nombre != entidad.nombre || listPrecioOriginal[item].precio != entidad.precio)) {
            if (fechaProceso > listPrecioOriginal[item].fechaAlta) {
                listPrecioOriginal[item].fechaBaja = listPrecioOriginal[item].fechaAlta;
                precioManual.listaPrecioManualEliminado.push(listPrecioOriginal[item]);
                precioManual.listaPrecioManualActualizado.push(entidad);
            } else {
                precioManual.listaPrecioManualEliminado.push(listPrecioOriginal[item]);
                precioManual.listaPrecioManualActualizado.push(entidad);
            }
        }
    }

    if (isNaN(entidad.id)) {
         delete entidad.id;
        precioManual.listaPrecioManualNuevo.push(entidad);
    }
}

export function eliminarIdPrecioActualizado(listaPrecioActualizado,fechaProceso){
    for(var precio in listaPrecioActualizado){
       if(fechaProceso > listaPrecioActualizado[precio].fechaAlta){
            delete listaPrecioActualizado[precio].id;
       }
    }
}

export function replicateProcessRvl(dateProcess) {
    return (dispatch) => {
    	axios({
    		  method: 'post',
    		  url: urlServer+'/ControlSpiritServices/rest/app/rentaVariableLocal/copiar',
    		  data: {
    		    value: dateProcess
    		  }
    	}).then((response) => {
        dispatch({ type: REPLICATE_PROCESS_RVL, payload: {data: response.data} });
        dispatch(showProcessPrices(dateProcess));
    	}).catch((error) => {
        dispatch(showAlertProgress(false));
        showError(error.response.headers['internal-error-message'], error, 'error');
      });
    }
}

export function findDetailsPreciosManualDetalleFCP(precioManualFCP, fechaProceso) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/preciosManualDetalle/listar',
            data: {"identificador":precioManualFCP.identificador, "fechaAlta":fechaProceso}
        }).then((response) => {
            dispatch({ type: FIND_DETAILS_PRECIO_MANUAL_FCP, payload: { data: response.data, precioManualFCP: precioManualFCP,
                                                                        fechaProceso: fechaProceso}
                    });
        });
    }
}

export function addItemPrecioManualDetalleFCP(size, listPmdFCP) {
    return (dispatch) => {
        dispatch({ type: ADD_ITEM_PRECIO_MANUAL_DETALLE, payload: { listSize: size, listPmdFCP: listPmdFCP } });
    }
}

export function removeItemPrecioManualDetalleFCP(id, pmdFCP) {
    return (dispatch) => {
        dispatch({ type: REMOVE_ITEM_PRECIO_MANUAL_DETALLE, idItem: id });
        if (!isNaN(id)) {
          dispatch(actualizarPrecioManualDetalleFCP(pmdFCP));
        }
    }
}

export function guardarPrecioManualDetalleFCP(listPmdFCP, precioManualFCP, fechaProceso) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/preciosManualDetalle/guardar',
            data: listPmdFCP
        }).then((response) => {
            dispatch({ type: GUARDAR_PRECIO_MANUAL_DETALLE, payload: response.data });
            dispatch(findDetailsPreciosManualDetalleFCP(precioManualFCP, fechaProceso));
        });
    }
}

export function actualizarPrecioManualDetalleFCP(pmdFCP) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/preciosManualDetalle/actualizar',
            data: pmdFCP
        }).then((response) => {
            dispatch({ type: ACTUALIZAR_PRECIO_MANUAL_DETALLE, payload: response.data });
        });
    }
}

export function reintentarCargueProceso(proceso, procesos, dateProcess) {
    return (dispatch) => {
      let processPar = null;
      if(proceso["tipoProceso"].nombre === "OPCIONES") {
        processPar = procesos.filter(item => item.tipoProceso.nombre === "NOTAS_ESTRUCTURADAS");
      } else if(proceso["tipoProceso"].nombre === "NOTAS_ESTRUCTURADAS") {
        processPar = procesos.filter(item => item.tipoProceso.nombre === "OPCIONES");
      }
      delete proceso["variacion"];
      dispatch(reintentarCargue(proceso, dateProcess));
      if(processPar != null) {
        delete processPar[0].variacion;
        dispatch(reintentarCargue(processPar[0], dateProcess));
      }
    }
}

export function reintentarCargueCurvas(proceso, dateProcess) {
  return (dispatch) => {
      axios({
          method: 'post',
          url: urlServer + '/curvas-services/rest/curvas/retry',
          data: {value:proceso["proceso"]}
      }).then((response) => {
          dispatch(showAlertProgress(false));
          dispatch(obtenerTiposProcesoCurvasPorFecha(dateProcess));
      }).catch(error => {
          dispatch(showAlertProgress(false));
          showError(error.response.headers['internal-error-message'], error, 'error');
      });
  }
}

export function addItemListaControl(size) {
     return (dispatch) => {
        dispatch({ type: ADD_ITEM_LISTA_CONTROL, payload: { listSize: size } });
    }
}

export function guardarListaControl(listaControl,proceso){
       return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/listaControl/guardar',
            data: listaControl
        }).then((response) => {
            dispatch({ type: GUARDAR_LISTA_CONTROL, payload: response.data });
            dispatch(getListaControl(proceso));
        })
   }
}

export function showProcessTypesPrice() {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/tipoProceso/getAllTipoProceso',
            data: { value: 'PRECIOS' }
        }).then((response) => {
            dispatch({ type: SHOW_TYPES_PROCESS_PRICE, payload: response.data });
        });
    }
}

export function removeItemListaControl(item, proceso) {
    return (dispatch) => {
        dispatch({ type: ELIMINAR_ITEM_LISTA_CONTROL, idItem: item.id })
        if (!isNaN(item.id)) {
          dispatch(darBajaListaControl(item,proceso));
        }
    }
}
export function darBajaListaControl(item,proceso){
       return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/listaControl/eliminar',
            data: item
        }).then((response) => {
            dispatch({ type: ELIMINAR_LISTA_CONTROL, payload: response.data });
        }).catch(error => {
            dispatch(getListaControl(proceso));
        });
    }
}

export function getIdProceso(idProceso){
     return (dispatch) => {
        dispatch({ type: ID_PROCESO, idProceso: idProceso });
    }
}

export function getListaControl(proceso) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/listaControl/listar',
            data:proceso
        }).then((response) => {
            dispatch({ type: GET_LISTA_CONTROL, payload: {data: response.data, tipoProceso: proceso["tipoProceso"]} });
        });
    }
}

export function reintentarCargue(proceso, dateProcess) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/procesos/reintentar',
            data: {value:proceso["id"]}
        }).then((response) => {
            dispatch({ type: REINTENTAR_CARGUE_PROCESO, payload: response.data });
            if(proceso.tipoProceso.grupoProceso.nombre === "ALADDIN") {
              dispatch(showProcessAladdin(dateProcess));
            } else {
              dispatch(showProcessPrices(dateProcess));
            }
        }).catch(error => {
          dispatch(showAlertProgress(false));
          showError(error.response.headers['internal-error-message'], error, 'error');
        });
    }
}

export function applyLoadingBar(type, flat) {
  return (dispatch) => {
    dispatch({ type: type, flat: flat });
 }
}



export function ejecutarFormatoRegulatorio(dateProcess, task){
  return (dispatch) => {
    axios({
        method: 'post',
        url: urlServer + '/procesos-score/rest/formatos/execute/'+task,
        data:{value:dateProcess}
    }).then((response) => {
        dispatch({ type: EJECUTAR_FORMATO_REGULATORIO, payload: response.data });
    });
  }
}

export function ejecutarScore(processToExecute){
  return (dispatch) => {
    axios({
        method: 'post',
        url: urlServer + '/control-valoracion/rest/control/execute',
        data: processToExecute
    });
  }
}

export function obtenerTiposProcesoCurvas() {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/curvas-services/rest/types/all'
        }).then((response) => {
            dispatch({ type: LISTAR_TIPO_PROCESO_CURVA, payload: response.data });
        });
    }
}

export function obtenerTiposProcesoCurvasPorFecha(dateProcess) {
    let date = Moment(dateProcess,'YYYY-MM-DD').valueOf();
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/curvas-services/rest/process/date',
             data: {
                value: date
            }
        }).then((response) => {
            dispatch({ type: LISTAR_TIPO_PROCESO_CURVA_FECHA, payload: { data: response.data, date: dateProcess } });
        });
    }
}

export function checkIdCurvas(idProc) {
    return (dispatch) => {
        dispatch({ type: CHECKLIST_CURVAS, idProcess: idProc });
    }
}

export function listarDetalleCurvas(idProceso) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/curvas-services/rest/curvas/detail',
             data: {
                value: idProceso
            }
        }).then((response) => {
            dispatch({ type: DETALLE_CURVAS, payload: response.data });
        });
    }
}

export function listarTiposProcesosCVA_DVA() {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/cva-dva-services/rest/types/all',
        }).then((response) => {
            dispatch({ type: LISTAR_TIPOS_PROCESOS_CVA_DVA, payload: response.data });
        });
    }
}

export function listarProcesosPorFechaCVA_DVA(searchDate) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/cva-dva-services/rest/process/date',
            data: {
              value: typeof searchDate == "string" ? convert(searchDate) : searchDate
            }
        }).then((response) => {
            dispatch({ type: LISTAR_PROCESOS_POR_FECHA_CVA_DVA, payload: {data: response.data, searchDate: searchDate } });
        });
    }
}

export function reintentarProcesoCVA_DVA(idProceso, searchDate) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/cva-dva-services/rest/cva-dva/retry',
            data: {
              value: idProceso
            }
          }).then((response) => {
              dispatch(showAlertProgress(false));
              dispatch(listarProcesosPorFechaCVA_DVA(searchDate));
          }).catch(error => {
              dispatch(showAlertProgress(false));
              showError(error.response.headers['internal-error-message'], error, 'error');
          });
    }
}

export function obtenerInformacionDiaria(dateProcess, nameProcess, serviceProcess){
  return (dispatch) => {
    axios({
      method: 'post',
      url: urlServer + serviceProcess,
      data:{name : nameProcess, date : dateProcess}
    }).then((response) => {
      let respType = 'OBTENER_' + nameProcess;
      dispatch({ type: respType, payload: response.data });
    }).catch(error => {
      dispatch(showAlertProgress(false));
    });
  }
}

export function ejecutarInformacionDiaria(dateProcess, nameProcess, serviceProcess){
  return (dispatch) => {
    axios({
        method: 'post',
        url: urlServer + serviceProcess,
        data:{value:dateProcess}
    }).then((response) => {
        let respType = 'EJECUTAR_' + nameProcess;
        dispatch({ type: respType, payload: response.data });
    });
  }
}

export function obtenerParametroDiasFestivos(){
  return (dispatch) => {
    axios({
        method: 'post',
        url: urlServer + '/ControlSpiritServices/rest/app/parameters/holidays'
    }).then((response) => {
        dispatch({ type: OBTENER_PARAMETRO_DIAS_FESTIVOS, payload: response.data });
    });
  }
}

export function obtenerDiasFestivos(year){
  return (dispatch) => {
    axios({
        method: 'post',
        url: urlServer + '/ControlSpiritServices/rest/app/dias-no-habil/listar',
        data:{value:Moment(year+"-01-01",'YYYY-MM-DD').valueOf()}
    }).then((response) => {
        dispatch({ type: OBTENER_DIAS_FESTIVOS, payload: response.data });
    });
  }
}

export function guardarDiasFestivos(holidays, year){
  return (dispatch) => {
    axios({
        method: 'post',
        url: urlServer + '/ControlSpiritServices/rest/app/dias-no-habil/guardar/'+year,
        data:holidays
    }).then((response) => {
        dispatch({ type: GUARDAR_DIAS_FESTIVOS, payload: response.data });
        dispatch(obtenerDiasFestivos(year));
        dispatch(verificarDiasFestivos());
    });
  }
}

export function verificarDiasFestivos(){
  return (dispatch) => {
    axios({
        method: 'post',
        url: urlServer + '/ControlSpiritServices/rest/app/dias-no-habil/verificar'
    }).then((response) => {
      dispatch({ type: VERIFICAR_DIAS_FESTIVOS, payload: response.data });
    });
  }
}

export function replicateProcessFuturos(dateProcess) {
    return (dispatch) => {
    	axios({
    		  method: 'post',
    		  url: urlServer+'/ControlSpiritServices/rest/app/futuro/replicar',
    		  data: {
    		    value: dateProcess
    		  }
    	}).then((response) => {
        dispatch({ type: REPLICATE_PROCESS_FUTUROS, payload: {data: response.data} });
        dispatch(showProcessPrices(dateProcess));
    	}).catch((error) => {
        dispatch(showAlertProgress(false));
        showError(error.response.headers['internal-error-message'], error, 'error');
      });
    }
}

export function reportGenerate(dateSearch, fileName, urlService) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + urlService,
            data: {
              value: dateSearch
            },
            responseType:'arraybuffer'
        }).then((response) => {
          let blob = new Blob(
            [response.data],
            {type: "application/vnd.ms-excel"}
          );
          var a = document.createElement("a");
          document.body.appendChild(a);
          a.href = window.URL.createObjectURL(blob);
          a.target = "_blank"
          a.download = fileName+convertDateToMillisecondsReport(dateSearch)+".xls";
          a.click();
          dispatch(showAlertProgress(false));
        }).catch(error => {
          dispatch(showAlertProgress(false));
          showError(error.response.headers['internal-error-message'], error, 'error');
        });
    }
}

export function deleteControlValoracion(dateProcess){
  return (dispatch) => {
    axios({
        method: 'post',
        url: urlServer + '/control-valoracion/rest/control/deleteExecute',
        data:{value : dateProcess}
    });
  }
}

export function listarDCV(processDate) {
    processDate = processDate === "" ? localStorage.getItem('fechaProceso') : processDate;
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/mapeoIsinDcv/listar',
            data: {
              value: processDate
            }
        }).then((response) => {
            dispatch({ type: LISTAR_DCV, payload: {data: response.data, processDate: processDate } });
        });
    }
}

export function unsubscribeDCV(processDate, dcv) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/mapeoIsinDcv/unsuscribe/'+
                  convertMillisecondsToDateWithoutSeparator(processDate),
            data: dcv
        }).then((response) => {
            dispatch(listarDCV(processDate));
        });
    }
}

export function addItemIsinDcv(size) {
    return (dispatch) => {
        dispatch({ type: ADD_ITEM_ISIN_DCV, payload: {listSize: size} });
        dispatch(validacionFallida("Vacío"));
    }
}

export function removeItemIsinDcv(processDate, dcv) {
    return (dispatch) => {
        dispatch({ type: REMOVE_ITEM_ISIN_DCV, idItem: dcv.id });
        if(!isNaN(dcv.id)) {
          dispatch(unsubscribeDCV(processDate, dcv));
        }
    }
}

export function saveListIsinDcv(listCvd, processDate) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/mapeoIsinDcv/save/'+
                          convertMillisecondsToDateWithoutSeparator(processDate),
            data: listCvd
        }).then((response) => {
          dispatch({ type: SAVE_LIST_ISIN_DCV });
          dispatch(listarDCV(processDate));
        });
    }
}

export function listarCuentasBancarias(processDate, portafolio) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/cuentaAhorros/listar/'+portafolio,
            data: {
              value: typeof processDate == "string" ? convert(processDate) : processDate
            }
        }).then((response) => {
            dispatch({ type: LISTAR_CUENTAS_BANCARIAS, payload: {data: response.data, processDate: processDate,
              portafolio: portafolio
             } });
        });
    }
}

export function addItemCuentaBancaria(size, portafolio) {
    return (dispatch) => {
        dispatch({ type: ADD_ITEM_CUENTA_BANCARIA, payload: { listSize: size, portafolio: portafolio } });
        dispatch(validacionFallida("Vacío"));
    }
}

export function saveListCuentasBancarias(listCuentas, processDate, portafolio) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/cuentaAhorros/guardar/'+
                      convertMillisecondsToDate(processDate),
            data: listCuentas
        }).then((response) => {
          dispatch({ type: SAVE_LIST_CUENTAS_BANCARIAS });
          dispatch(listarCuentasBancarias(processDate, portafolio));
        });
    }
}

export function unsubscribeCuentaBancaria(processDate, cuentaBancaria, portafolio) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/cuentaAhorros/borrar',
            data: cuentaBancaria
        }).then((response) => {
            dispatch(listarCuentasBancarias(processDate, portafolio));
        });
    }
}

export function removeCuentaBancaria(processDate, cuentaBancaria, portafolio) {
    return (dispatch) => {
        dispatch({ type: REMOVE_CUENTA_BANCARIA, idItem: cuentaBancaria.id });
        if(!isNaN(cuentaBancaria.id)) {
          dispatch(unsubscribeCuentaBancaria(processDate, cuentaBancaria, portafolio));
        }
    }
}

export function deleteFormatosRegulatios(dateProcess, task){
  return (dispatch) => {
    axios({
        method: 'post',
        url: urlServer + '/procesos-score/rest/formatos/deleteExecute/'+task,
        data:{value : dateProcess}
    });
  }
}

export function deleteTaskProcess(dateProcess, url){
  return (dispatch) => {
    axios({
        method: 'post',
        url: urlServer + url,
        data:{value : dateProcess}
    });
  }
}

export function listSmInversion(cusip) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/procesos-security-master/rest/securityMaster/listar',
            data: {value : cusip}
        }).then((response) => {
            dispatch({ type: LISTAR_SM_INVERSION, payload: {data: response.data, cusip: cusip} });
        }).catch(error => {
          dispatch(showAlertProgress(false));
          dispatch({ type: LISTAR_SM_INVERSION, payload: {data: "", cusip: cusip} });
          showError(error.response.headers['internal-error-message'], error, 'error');
        });
    }
}

export function updateSmInversion(smInversion) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/procesos-security-master/rest/securityMaster/update',
            data: smInversion
        }).then((response) => {
            dispatch({ type: UPDATE_SM_INVERSION, payload: {data: response.data} });
        });
    }
}

export function obtenerNavs(dateProcess, name){
  return (dispatch) => {
    axios({
        method: 'post',
        url: urlServer + '/navs-services/rest/valores-fondo/status',
        data:{tipoProceso : name, fechaProceso : dateProcess}
    }).then((response) => {
        let respType = 'OBTENER_' + name;
        dispatch({ type: respType, payload: response.data });
    });
  }
}

export function detalleInformacionDiaria(dateProcess) {
  return (dispatch) => {
    axios({
        method: 'post',
        url: urlServer + '/procesos-lista-control/rest/lista-control/details',
        data:{value : dateProcess}
    }).then((response) => {
        dispatch({ type: DETALLES_LISTA_CONTROL, payload: response.data });
    }).catch((error) => {
        dispatch({ type: DETALLES_LISTA_CONTROL, payload: []});
        showError(error.response.headers['internal-error-message'], error, 'info');
    });
  }
}

export function launchSocket(fechaProceso) {
    return (dispatch) => {
        dispatch(webSocketSpirit(PROCESOS_EJECUTADOS_CONTROL_SERVICES, fechaProceso, buildUrlSocket("/ControlSpiritServices/notification")));
        dispatch(webSocketSpirit(PROCESOS_EJECUTADOS_CONTROL_CURVAS, fechaProceso, buildUrlSocket("/curvas-services/notification")));
        dispatch(webSocketSpirit(PROCESOS_EJECUTADOS_CONTROL_DERIVADOS, fechaProceso, buildUrlSocket("/cva-dva-services/notification")));
    }
}

function webSocketSpirit(actionType, fechaProceso, service) {
    return (dispatch) => {
        let connection = new WebSocket(service);

        connection.onopen = function () {
            connection.send(fechaProceso);
        };

        connection.onmessage = function (e) {
            dispatch(showAlertProgress(false));
            dispatch({type: actionType, payload: $.parseJSON(e.data)});
        };
    }
}

export function webSocketSpiritValoracion(fechaProceso, procesos, service) {
    if(fechaProceso == null || fechaProceso == "") {
        fechaProceso = localStorage.getItem('fechaProceso');
    }
    return (dispatch) => {
        let connection = new WebSocket(buildUrlSocket(service));

        connection.onopen = function () {
            procesos.map(
                proceso => connection.send(JSON.stringify({"name": proceso,"date": fechaProceso}))
            );
        };

        connection.onmessage = function (e) {
            let proceso = $.parseJSON(e.data);
            dispatch(showAlertProgress(false));
            dispatch({type: 'OBTENER_' + proceso.nombre, payload: proceso});
        };
    }
}

export function envioArchivoGenerico(toSend){
    return (dispatch) => {
      axios({
          method: 'post',
          url: urlServer + '/spirit-ftp-services/rest/upload/to',
          data:toSend
      }).then((response) => {
          dispatch({ type: ENVIO_ARCHIVO_GENERICO, payload: response.data });
      });
    }
  }

  export function setValue(value){
    return (dispatch) => {
        dispatch({ type: SET_VALUE, payload: value });
    }
  }

  export function listarArchivosGenericos(searchDate){
    return (dispatch) => {
      axios({
        method: 'post',
        url: urlServer + '/spirit-ftp-services/rest/upload/log',
        data: {
            value: typeof searchDate == "string" ? convert(searchDate) : searchDate
        }
      }).then((response) => {
          dispatch({ type: LISTAR_ARCHIVOS_GENERICOS, payload: {list: response.data, searchDate: searchDate} });
      });
    }
  }

  export function findSonsAccountBankCusip(cusipPadre) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/cuentaBancariaCusip/listar',
            data: {value: cusipPadre}
        }).then((response) => {
            dispatch(
                {
                    type: FIND_SONS_ACCOUNTS_BANK_CUSIP,
                    payload: {data: response.data, cusipPadre: cusipPadre}
                }
            );
        });
    }
}

export function deleteSonAccountBankCusip(item, cusipPadre) {
    return (dispatch) => {
        dispatch({ type: DELETE_SON_ACCOUNTS_BANK_CUSIP, idItem: item.id });
        if(!isNaN(item.id)) {
          dispatch(unsubscribeSonAccountBankCusip(item.id));
        }
    }
}

export function unsubscribeSonAccountBankCusip(id) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/cuentaBancariaCusip/borrar',
            data: {value: id}
        });
    }
}

export function addSonAccountBankCusip() {
    return (dispatch) => {
        dispatch({ type: ADD_SON_ACCOUNTS_BANK_CUSIP });
    }
}

export function saveSonsAccountBankCusip(list, cusipPadre) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: urlServer + '/ControlSpiritServices/rest/app/cuentaBancariaCusip/guardar',
            data: list.map(item => isNaN(item.id) ? buildObject(item) : item)
        }).then((response) => {
            dispatch(findSonsAccountBankCusip(cusipPadre));
            dispatch({type: SAVE_SONS_ACCOUNTS_BANK_CUSIP});
        });
    }
}

function buildObject(item) {
    item.id = null;
    return item;
}

export function updateListSonsAccountBankCusip(value, item) {
    return (dispatch) => {
        dispatch({ type: UPDATE_LIST_SONS_ACCOUNTS_BANK_CUSIP, payload: {value: value, item: item} });
    }
}
