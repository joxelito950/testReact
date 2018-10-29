import {
    SHOW_PROCESS_PRICES, GENERAR_ARCHIVO, CHECKLIST, FIND_DETAILS, SHOW_TYPES_PROCESS,
    GUARDAR_PRECIOS_MANUAL, FECHA_PROCESO, UPDATE_PROCESS_TYPE, LISTAR_PRECIOS_MANUAL, OCULTAR,
    VALIDACION_FALLIDA, VALIDACION_EXITOSA, LISTAR_PARAMETROS_PORTAFOLIO, GUARDAR_PARAMETRO_PORTAFOLIO, EJECUTAR_VALOR_FONDO,
    SHOW_PROCESS_NAVS, SHOW_PROCESS_NAVS_TO_EXECUTE, CHECKLIST_NAVS, LISTAR_VALOR_FONDO, SHOW_PROCESS_ALADDIN,
    ACTUALIZAR_FECHA_PROCESO, LISTAR_TIPO_PRECIOS_MANUAL, SHOW_ALERT_PROGRESS, ADD_ITEM, REMOVE_ITEM,
    LISTAR_FACTOR_OPCION, GUARDAR_FACTOR_OPCION, BORRAR_FACTOR_OPCION, LISTAR_PRECIOS_MANUAL_POR_TIPO,
    MOSTRAR, ADD_ITEM_PRECIO_MANUAL, REMOVE_ITEM_PRECIO_MANUAL, SAVE_ITEM_PRECIO_MANUAL, ID_TIPO_PRECIO_MANUAL,
    LOGIN, UPDATE_STATE_LOCAL_STORAGE, LOCAL_STORAGE_CLEAN, ADD_ITEM_PARAMETRO_PORTAFOLIO, REMOVE_ITEM_PARAMETRO_PORTAFOLIO,
    SAVE_ITEM_PARAMETRO_PORTAFOLIO, BAJA_PARAMETRO_PORTAFOLIO, REPLICATE_PROCESS_RVL, FIND_DETAILS_PRECIO_MANUAL_FCP,
    ADD_ITEM_PRECIO_MANUAL_DETALLE, OBTENER_LISTA_PROCESOS_FTP, SHOW_TYPES_PROCESS_FTP, REMOVE_ITEM_PRECIO_MANUAL_DETALLE, GUARDAR_PRECIO_MANUAL_DETALLE, SHOW_TYPES_PROCESS_PRICE,
    GET_LISTA_CONTROL, ADD_ITEM_LISTA_CONTROL, GUARDAR_LISTA_CONTROL, ELIMINAR_LISTA_CONTROL, ELIMINAR_ITEM_LISTA_CONTROL, ID_PROCESO,
    REINTENTAR_CARGUE_PROCESO, REINTENTAR_PROCESO_FTP, APPLY_LOADING_BAR_FORMATO, APPLY_LOADING_BAR_SCORE, EJECUTAR_FORMATO_REGULATORIO,
    OBTENER_SCORE, OBTENER_FORMATO_REGULATORIO, LISTAR_TIPO_PROCESO_CURVA, LISTAR_TIPO_PROCESO_CURVA_FECHA, CHECKLIST_CURVAS,
    DETALLE_CURVAS, REINTENTAR_CURVAS_FORWARD, OBTENER_CRG_POSICIONES, OBTENER_F_351, LISTAR_TIPOS_PROCESOS_CVA_DVA,
    LISTAR_PROCESOS_POR_FECHA_CVA_DVA, OBTENER_VAL_OPCT, OBTENER_VAL_OPCT_TTVRV, OBTENER_OPC_VALO_FUT, OBTENER_CLS_EVNT_CONT,
    OBTENER_SEC_MASTER, EJECUTAR_SEC_MASTER, OBTENER_VAL_POS, OBTENER_PARAMETRO_DIAS_FESTIVOS,
    OBTENER_DIAS_FESTIVOS, GUARDAR_DIAS_FESTIVOS, VERIFICAR_DIAS_FESTIVOS, REPLICATE_PROCESS_FUTUROS, DOWNLOAD_FTP,
    OBTENER_CONTRAPARTES, EJECUTAR_CONTRAPARTES, OBTENER_F_471, OBTENER_CRG_VEN_OPER,
    OBTENER_CRG_VEN_CASHWF, OBTENER_CRG_VAL_FUT, OBTENER_EVENTO_OPER, OBTENER_EVENTO_VENCIM,
    OBTENER_EVENTO_OPCT, OBTENER_EVENTO_FX, OBTENER_EVENTO_FUT, OBTENER_EVENTO_POS,
    OBTENER_CRG_VEN_WEEK, OBTENER_CRG_VEN_PAY_FAILS, OBTENER_CRG_VAL_FX_SWAP,
    OBTENER_CRG_OPERACIONES_TRD, OBTENER_CRG_OPER_TRD_AJST, OBTENER_CRG_OPERACIONES_REP,
    OBTENER_CRG_OPERACIONES_COLL, LISTAR_DCV,
    EJECUTAR_UPDATE_LISTA_CONTROL, OBTENER_UPDATE_LISTA_CONTROL, ADD_ITEM_ISIN_DCV, REMOVE_ITEM_ISIN_DCV,
    SAVE_LIST_ISIN_DCV, LISTAR_CUENTAS_BANCARIAS, ADD_ITEM_CUENTA_BANCARIA,
    SAVE_LIST_CUENTAS_BANCARIAS, REMOVE_CUENTA_BANCARIA, LISTAR_SM_INVERSION, UPDATE_SM_INVERSION,
    OBTENER_CRG_OPERACIONES_CMAT, BORRAR_FACTOR_OPCION_BY_ID,
    OBTENER_VALOR_FONDO_VOLUNTARIO, OBTENER_VALOR_FONDO_CESANTIAS, DETALLES_LISTA_CONTROL, OBTENER_VAL_POS_GAR_REP,
    OBTENER_F_468, OBTENER_CRG_VEN_SWAPPAY,OBTENER_F_397, OBTENER_CRG_FIXING, OBTENER_CRG_VEN_FIXING,
    OBTENER_CRG_VAL_FUT_PAGO, PROCESOS_EJECUTADOS_CONTROL_SERVICES,
    PROCESOS_EJECUTADOS_CONTROL_CURVAS, PROCESOS_EJECUTADOS_CONTROL_DERIVADOS,
    OBTENER_VAL_OPCT_TTVRF, OBTENER_CRG_VEN_EVENTOS, OBTENER_CRG_AJT_OPE_CMAT,
    ENVIO_ARCHIVO_GENERICO, SET_VALUE, LISTAR_ARCHIVOS_GENERICOS, OBTENER_CRG_OP_AJS_SPOT,
    FIND_SONS_ACCOUNTS_BANK_CUSIP, DELETE_SON_ACCOUNTS_BANK_CUSIP, ADD_SON_ACCOUNTS_BANK_CUSIP,
    SAVE_SONS_ACCOUNTS_BANK_CUSIP, UPDATE_LIST_SONS_ACCOUNTS_BANK_CUSIP, OBTENER_AJS_VENCIM,
    OBTENER_F_FUTURO, OBTENER_SPOT_FIXING_VENCIM,OBTENER_CRG_VEN_MAT,OBTENER_F_472, OBTENER_AJUSTE_FIX_VALO
} from '../actions';

import {replace} from '../utils/utils';

const initialState = {
    list: [],
    dateProcess: "",
    listRvl: [],
    listFuturos: []
}
export function showProcessPrices(state = initialState, action) {
    switch (action.type) {
        case SHOW_PROCESS_PRICES:
            return Object.assign(
              {}, state, {
                list: action.payload.data,
                dateProcess: action.payload.date
              }
            )
        case REPLICATE_PROCESS_RVL:
            return Object.assign({}, state, { listRvl: action.payload.data })
        case REPLICATE_PROCESS_FUTUROS:
            return Object.assign({}, state, { listFuturos: action.payload.data })
        default:
            return state
    }
}

const initialStateProcessTypes = {
    list: []
}
export function showProcessTypes(state = initialStateProcessTypes, action) {

    switch (action.type) {
        case SHOW_TYPES_PROCESS:
            return Object.assign(
              {}, state, { list: action.payload.filter(item => item.nombre !== "PRECIO_MANUAL_ARCHIVO") }
            )
        default:
            return state
    }
}

const initialStateListProcess = {
    list: [],
    size: 0,
    completed: false
}
export function procesos(state = initialStateListProcess, action) {
    switch (action.type) {
        case SHOW_PROCESS_PRICES:
            let listProcess = action.payload.data;
            return Object.assign({}, state, {
                size: listProcess.length,
                list: listProcess,
                completed: false
            })
        case CHECKLIST:
            var newState;
            state.list.filter(item => item.id === action.idProcess)
                .map(item => item.selected = !item.selected);
            var size = state.list.filter(item => item.selected === true);
            if (size.length === state.size) {
                newState = Object.assign({}, state, { list: state.list, completed: true });
            } else {
                newState = Object.assign({}, state, { completed: false });;
            }
            return newState;
        default:
            return state
    }
}

const initialStateListProcessNavs = {
    list: [],
    size: 0,
    completed: false
}
export function procesosNavs(state = initialStateListProcessNavs, action) {
    switch (action.type) {
        case SHOW_PROCESS_NAVS:
            let listProcess = action.payload.data.map(item => ({ id: item.proceso, selected: false }));
            return Object.assign({}, state, {
                size: listProcess.length,
                list: listProcess,
                completed: false
            })
        case CHECKLIST_NAVS:
            var newState;
            state.list.filter(item => item.id === action.idProcess)
                .map(item => item.selected = !item.selected);
            var size = state.list.filter(item => item.selected === true);
            if (size.length === state.size) {
                newState = Object.assign({}, state, { list: state.list, completed: true });
            } else {
                newState = Object.assign({}, state, { completed: false });
            }
            return newState;
        default:
            return state
    }
}

const initialStateDetails = {
    listDetails: [],
    variacionTotal: 0,
    estaFueraDeRango: false
}
export function findDetails(state = initialStateDetails, action) {
    switch (action.type) {
        case FIND_DETAILS:
            return Object.assign({}, state, { 
                listDetails: action.payload.detalle, 
                variacionTotal : action.payload.variacionTotal,
                estaFueraDeRango : action.payload.estaFueraDeRango
            });
        default:
            return state
    }
}

const initialStateFechaProceso = {
    fechaProceso: ''
}
export function obtenerFechaProceso(state = initialStateFechaProceso, action) {
    switch (action.type) {
        case FECHA_PROCESO:
            return Object.assign({}, state, { fechaProceso: action.payload });
        default:
            return state
    }
}

const initialStateProcessTypesUpdated = {
    showAlertprocessTypesUpdated: false
}
export function actualizarTiposProcesos(state = initialStateProcessTypesUpdated, action) {
    switch (action.type) {
        case UPDATE_PROCESS_TYPE:
            return Object.assign({}, state, { showAlertprocessTypesUpdated: true });
        case OCULTAR:
            return Object.assign({}, state, { showAlertprocessTypesUpdated: false });
        default:
            return state
    }
}

const initialStateListaPrecioManual = {
    listaPreciosManualByDate: []
}
export function obtenerListaPrecioManual(state = initialStateListaPrecioManual, action) {
    switch (action.type) {
        case LISTAR_PRECIOS_MANUAL:
            let key = 0;
            let listaPreciosManualByDate = action.payload.map((item) => ({
                identificador: item.identificador,
                nombre: item.nombre,
                precio: item.precio === undefined ? "" : item.precio,
                id: item.id === undefined ? key++ : item.id,
                tipoPrecio: item.tipoPrecio,
                proceso: item.proceso,
                fechaAlta: item.fechaAlta
            }));
            return Object.assign({}, state, { listaPreciosManualByDate: listaPreciosManualByDate });
        default:
            return state
    }
}

export function obtenerListaProcesosFtp(state = { lista: [], searchDate: null }, action) {
    switch (action.type) {
        case OBTENER_LISTA_PROCESOS_FTP:
            return Object.assign({}, state, { lista: action.payload.data, searchDate: action.payload.searchDate });
        default:
            return state
    }
}

export function showProcessTypesFtp(state = { lista: [] }, action) {
    switch (action.type) {
        case SHOW_TYPES_PROCESS_FTP:
            return Object.assign({}, state, { lista: action.payload })
        default:
            return state
    }
}

export function downloadFtp(state = { mensaje: undefined }, action) {
    switch (action.type) {
        case DOWNLOAD_FTP:
            return Object.assign({}, state, { mensaje: action.payload })
        default:
            return state
    }
}

export function reintentarProcesoFtp(state = { procesoFtp: undefined }, action) {
    switch (action.type) {
        case REINTENTAR_PROCESO_FTP:
            return Object.assign({}, state, {
                procesoFtp: action.payload
            });
            break;
        default:
            return state;
    }
}

const initialStateGenerateFile = {
    showAlertprocessTypesUpdated: false
}
export function generarArchivo(state = initialStateGenerateFile, action) {

    switch (action.type) {
        case GENERAR_ARCHIVO:
            return Object.assign({}, state, { msg: action.msg, showAlertprocessTypesUpdated: true });
        case OCULTAR:
            return Object.assign({}, state, { showAlertprocessTypesUpdated: false });
        default:
            return state
    }
}

const initialStateValidacion = {
    error: '',
    msg: '',
    icon: '',
    dateSearch: null
}
export function validacionFallida(state = initialStateValidacion, action) {
    switch (action.type) {
        case VALIDACION_FALLIDA:
            return Object.assign({}, state, {
                error: 'form-group has-error has-feedback', msg: action.msg, icon: 'glyphicon glyphicon-remove form-control-feedback'
            });
        case VALIDACION_EXITOSA:
            return Object.assign({}, state, {
                error: 'form-group has-success has-feedback',
                msg: 'Ok',
                icon: 'glyphicon glyphicon-ok form-control-feedback',
                dateSearch: action.dateSearch
            });
        default:
            return state
    }
}

const initialStateValorFondo = {
    listProcessNavs: [],
    fechaProceso: '',
    options: '',
    listProcessTypes: [],
    optionOfProgress: '',
    idProgressBar: '',
    estado: '',
    estadoOfProgress: ''
}
export function ejecutarValorFondo(state = initialStateValorFondo, action) {
    switch (action.type) {
        case EJECUTAR_VALOR_FONDO:
            return Object.assign({}, state, {
                estado: "Cargado",
                estadoOfProgress: "Cargado",
                options: "progress-bar progress-bar-success",
                optionOfProgress: 'progress-bar progress-bar-success',
                idProgressBar: state.idProgressBar
            });
        case MOSTRAR:
            return Object.assign({}, state, {
                estado: "Cargado",
                estadoOfProgress: "En progreso...",
                optionOfProgress: "progress-bar progress-bar-striped progress-bar-warning active",
                options: 'progress-bar progress-bar-success',
                idProgressBar: action.idProgressBar
            });
        case SHOW_PROCESS_NAVS:
            return Object.assign({}, state, { listProcessNavs: action.payload.data, options: "progress-bar progress-bar-success", estado: "Cargado" })
        case SHOW_TYPES_PROCESS:
            return Object.assign(
              {}, state, {
                listProcessTypes: action.payload.filter(item => item.nombre !== "PRECIO_MANUAL_ARCHIVO"),
                options: "progress-bar",
                estado: "No Cargado"
              }
            )
        default:
            return state
    }
}

const initialStateNavs = {
    list: [],
    dateProcess: null
}
export function showProcessNavs(state = initialStateNavs, action) {
    switch (action.type) {
        case SHOW_PROCESS_NAVS:
            return Object.assign({}, state, { list: action.payload.data, searchDate: action.payload.searchDate, showAlertProgress: false })
        default:
            return state
    }
}

const initialStateProcesosAladdin = {
    list: [],
    dateProcess: ""
}
export function showProcessAladdin(state = initialStateProcesosAladdin, action) {

    switch (action.type) {
        case SHOW_PROCESS_ALADDIN:
            return Object.assign({}, state, { list: action.payload.data, dateProcess: action.payload.date })
        default:
            return state
    }

}

const initialStateListarValorFondo = {
    listaValorFondo: [],
    showAlertprocessTypesUpdated: false
}
export function listarValorFondo(state = initialStateListarValorFondo, action) {

    switch (action.type) {
        case LISTAR_VALOR_FONDO:
            return Object.assign({}, state, { listaValorFondo: action.payload, showAlertprocessTypesUpdated: true });
        case OCULTAR:
            return Object.assign({}, state, { showAlertprocessTypesUpdated: false });
        default:
            return state
    }
}

const initialStateActualizarFechaProceso = {
    showAlertprocessTypesUpdated: false
}
export function actualizarFechaProceso(state = initialStateActualizarFechaProceso, action) {
    switch (action.type) {
        case ACTUALIZAR_FECHA_PROCESO:
            return Object.assign({}, state, { showAlertprocessTypesUpdated: true });
        case OCULTAR:
            return Object.assign({}, state, { showAlertprocessTypesUpdated: false });
        default:
            return state
    }
}

const initialStateListarTipoPrecioManual = {
    listaTipoPrecioManual: [],
    showAlertprocessTypesUpdated: false
}
export function listarTipoPrecioManual(state = initialStateListarTipoPrecioManual, action) {
    switch (action.type) {
        case LISTAR_TIPO_PRECIOS_MANUAL:
            return Object.assign({}, state, { listaTipoPrecioManual: action.payload, showAlertprocessTypesUpdated: true });
        case OCULTAR:
            return Object.assign({}, state, { showAlertprocessTypesUpdated: false });
        default:
            return state
    }
}

const initialStateAlertProgress = {
    showAlertProgress: false
}
export function showProcessAlertProgress(state = initialStateAlertProgress, action) {
    switch (action.type) {
        case SHOW_ALERT_PROGRESS:
            return Object.assign({}, state, { showAlertProgress: action.showAlertProgress })
        case SHOW_PROCESS_NAVS:
            return Object.assign({}, state, { showAlertProgress: false })
        case SHOW_PROCESS_PRICES:
            return Object.assign({}, state, { showAlertProgress: false })
        case SHOW_PROCESS_ALADDIN:
            return Object.assign({}, state, { showAlertProgress: false })
        case REPLICATE_PROCESS_RVL:
            return Object.assign({}, state, { showAlertProgress: false })
        case OBTENER_LISTA_PROCESOS_FTP:
            return Object.assign({}, state, { showAlertProgress: false })
        case REINTENTAR_CARGUE_PROCESO:
            return Object.assign({}, state, { showAlertProgress: false })
        case REINTENTAR_PROCESO_FTP:
            return Object.assign({}, state, { showAlertProgress: false })
        case GENERAR_ARCHIVO:
            return Object.assign({}, state, { showAlertProgress: false })
        case OBTENER_FORMATO_REGULATORIO:
            return Object.assign({}, state, { showAlertProgress: false })
        case OBTENER_SCORE:
            return Object.assign({}, state, { showAlertProgress: false })
        case LISTAR_TIPO_PROCESO_CURVA_FECHA:
            return Object.assign({}, state, { showAlertProgress: false })
        case REINTENTAR_CURVAS_FORWARD:
            return Object.assign({}, state, { showAlertProgress: false })
        case LISTAR_PROCESOS_POR_FECHA_CVA_DVA:
            return Object.assign({}, state, { showAlertProgress: false })
        case REPLICATE_PROCESS_FUTUROS:
            return Object.assign({}, state, { showAlertProgress: false })
        case DOWNLOAD_FTP:
            return Object.assign({}, state, { showAlertProgress: false })
        case LISTAR_SM_INVERSION:
            return Object.assign({}, state, { showAlertProgress: false })
        case ENVIO_ARCHIVO_GENERICO:
            return Object.assign({}, state, { showAlertProgress: false })
        case LISTAR_ARCHIVOS_GENERICOS:
            return Object.assign({}, state, { showAlertProgress: false })
        case FIND_SONS_ACCOUNTS_BANK_CUSIP:
            return Object.assign({}, state, { showAlertProgress: false })
        default:
            return state
    }
}

const initialStateTableDynamic = {
    listSize: 0,
    listFactors: [],
    showAlertprocessTypesUpdated: false,
    listFactorsToDelete: [],
    borrado: false
}
export function tableDynamic(state = initialStateTableDynamic, action) {
    switch (action.type) {
        case LISTAR_FACTOR_OPCION:
            return Object.assign({}, state, { listFactors: action.payload, borrado: false });

        case ADD_ITEM:
            return Object.assign({}, state, {
                listFactors:
                state.listFactors.concat(
                    [{
                        id: (+ new Date() + Math.floor(Math.random() * 999999)).toString(36),
                        identificador: '',
                        factor: ''
                    }]),
                listSize: (action.payload.listSize + 1)
            }
            );

        case REMOVE_ITEM:

            if (state.listFactors.filter((item) => item.id === action.idItem).length > 0) {
                let itemIndex = state.listFactors.findIndex((item) => item.id == action.idItem);
                let newListFactors = state.listFactors;
                if (!isNaN(newListFactors[itemIndex].id)) {
                    state.listFactorsToDelete.push(newListFactors[itemIndex]);
                }
                newListFactors.splice(itemIndex, 1);
                return Object.assign({}, state, { listFactors: newListFactors, listSize: (state.listSize - 1), listFactorsToDelete: state.listFactorsToDelete })
            }

        case GUARDAR_FACTOR_OPCION:
            return Object.assign({}, state, { listFactors: action.payload, showAlertprocessTypesUpdated: true });

        case BORRAR_FACTOR_OPCION:
            return Object.assign({}, state, { listFactorsToDelete: [] });
        case BORRAR_FACTOR_OPCION_BY_ID:
            return Object.assign({}, state, { borrado: true });
        case OCULTAR:
            return Object.assign({}, state, { showAlertprocessTypesUpdated: false });
        default:
            return state
    }
}

const initialStateValorFondo2 = {
    listProcessNavs: [],
    fechaProceso: '',
    options: '',
    listProcessTypes: [],
    optionOfProgress: '',
    idProgressBar: '',
    estado: '',
    stateLabel: '',
    voluntarias: "",
    cesantias: ""
}
export function ejecutarValorFondo2(state = initialStateValorFondo2, action) {
    switch (action.type) {
        case EJECUTAR_VALOR_FONDO:
            return Object.assign({}, state, {
                estado: "Cargado",
                stateLabel: "CARGADO",
                options: "progress-bar progress-bar-success",
                optionOfProgress: 'progress-bar progress-bar-success',
                idProgressBar: state.idProgressBar
            });
        case MOSTRAR:
            return Object.assign({}, state, {
                estado: "Cargado",
                stateLabel: "CARGANDO",
                optionOfProgress: "progress-bar progress-bar-striped progress-bar-warning active",
                options: 'progress-bar progress-bar-success',
                idProgressBar: action.idProgressBar
            });
        case SHOW_PROCESS_NAVS_TO_EXECUTE:
            return Object.assign({}, state, {
                listProcessNavs: action.payload.data,
                options: "progress-bar progress-bar-success",
                estado: "Cargado",
                idProgressBar: ''
            })
        case OBTENER_VALOR_FONDO_VOLUNTARIO:
          let myVoluntarias = action.payload;
          myVoluntarias.tipoProceso = "VALOR_FONDO_VOLUNTARIO";
          myVoluntarias.nombre = "Valores de Fondo - Voluntarias";
          return Object.assign({}, state, {voluntarias: myVoluntarias});
        case OBTENER_VALOR_FONDO_CESANTIAS:
          let myCesantias = action.payload;
          myCesantias.tipoProceso = "VALOR_FONDO_CESANTIAS";
          myCesantias.nombre = "Valores de Fondo Mandatorios (OBL-CES-PPN)";
          return Object.assign({}, state, {cesantias: myCesantias});
        default:
            return state
    }
}

const initialStateIdTipoPrecio = {
    idTipoPrecio: ''
}
export function getIdTipoPrecio(state = initialStateIdTipoPrecio, action) {

    switch (action.type) {
        case ID_TIPO_PRECIO_MANUAL:
            return Object.assign({}, state, { idTipoPrecio: action.idTipoPrecio });

        default:
            return state
    }
}


const initialStateLogin = {
    token: '',
    fullName: '',
    msgStatus: '',
    isAutenthicated: false,
    user: '',
    directives : []
}
export function login(state = initialStateLogin, action) {
    switch (action.type) {
        case UPDATE_STATE_LOCAL_STORAGE:
            if (action.localStorage.hasOwnProperty('user')) {
                let { token, fullName, msgStatus, isAuthenticated, user, directives } = action.localStorage.user;
                return { token, fullName, msgStatus, isAuthenticated, user, directives };
            }
            return state;
        case LOCAL_STORAGE_CLEAN:
            return Object.assign({}, state, initialStateLogin);
        default:
            return state
    }
}

const initialStateTableDynamicParametrosPortafolio = {
    listSize: 0,
    listaParametro: [],
    showAlertprocessTypesUpdated: false,
    listParametrosToDelete: []
}
export function tableDynamicParametroPortafolio(state = initialStateTableDynamicParametrosPortafolio, action) {
    switch (action.type) {

        case LISTAR_PARAMETROS_PORTAFOLIO:

            return Object.assign({}, state, { listaParametro: action.payload });
        case ADD_ITEM_PARAMETRO_PORTAFOLIO:
            return Object.assign({}, state, {
                listaParametro:
                state.listaParametro.concat(
                    [{
                        id: (+ new Date() + Math.floor(Math.random() * 999999)).toString(36),
                        codigoNegocio: '',
                        codigoPortafolio: '',
                        nombrePortafolio: '',
                        codigoLineaNegocio: '',
                        codigoLineaProducto: '',
                        codigoAlternativa: '',
                        codigoContabilidad: '',
                        cuentaDepositoCentralValores: '',
                        cuentaDeceval: ''

                    }]),
                listSize: (action.payload.listSize + 1)
            }
            );

        case REMOVE_ITEM_PARAMETRO_PORTAFOLIO:
            if (state.listaParametro.filter((item) => item.id === action.idItem).length > 0) {
                let itemIndex = state.listaParametro.findIndex((item) => item.id == action.idItem);
                let newlistaParametro = state.listaParametro;
                newlistaParametro.splice(itemIndex, 1);
                return Object.assign({}, state, { listaParametro: newlistaParametro, listSize: (state.listSize - 1) })
            }
        case OCULTAR:
            return Object.assign({}, state, { showAlertprocessTypesUpdated: false });

        case GUARDAR_PARAMETRO_PORTAFOLIO:
            return Object.assign({}, state, { listaParametro: action.payload, showAlertprocessTypesUpdated: true });
        default:
            return state
    }
}

const initialStateTableDynamicPrecioManual = {
    listSize: 0,
    listPrecioManual: [],
    showAlertprocessTypesUpdated: false,
    listPrecioManualOrigin: []
}
export function tableDynamicPrecioManual(state = initialStateTableDynamicPrecioManual, action) {
    switch (action.type) {
        case LISTAR_PRECIOS_MANUAL_POR_TIPO:
            let key = 0;
            let listaPrecioManualPorTipoPrecio = action.payload.map((item) => ({
                identificador: item.identificador,
                nombre: item.nombre,
                precio: item.precio === undefined ? "" : item.precio,
                id: item.id === undefined ? key++ : item.id,
                tipoPrecio: item.tipoPrecio,
                proceso: item.proceso,
                fechaAlta: item.fechaAlta,
                origenArchivo: item.origenArchivo
            }));
            return Object.assign({}, state, { listPrecioManual: listaPrecioManualPorTipoPrecio, showAlertprocessTypesUpdated: false, listPrecioManualOrigin: listaPrecioManualPorTipoPrecio });

        case ADD_ITEM_PRECIO_MANUAL:
            return Object.assign({}, state, {
                listPrecioManual:
                state.listPrecioManual.concat(
                    [{
                        id: (+ new Date() + Math.floor(Math.random() * 999999)).toString(36),
                        identificador: '',
                        nombre: '',
                        precio: '',
                        tipoPrecio: { id: '' },
                        proceso: { id: '' },
                        origenArchivo: false
                    }]),
                listSize: (action.payload.listSize + 1)
            }
            );

        case REMOVE_ITEM_PRECIO_MANUAL:
            if (state.listPrecioManual.filter((item) => item.id === action.idItem).length > 0) {
                let itemIndex = state.listPrecioManual.findIndex((item) => item.id == action.idItem);
                let newListPrecioManual = state.listPrecioManual;

                newListPrecioManual.splice(itemIndex, 1);
                return Object.assign({}, state, { listPrecioManual: newListPrecioManual, listSize: (state.listSize - 1), showAlertprocessTypesUpdated: false })
            }
        case GUARDAR_PRECIOS_MANUAL:
            return Object.assign({}, state, { listPrecioManual: action.payload, showAlertprocessTypesUpdated: true });
        case OCULTAR:
            return Object.assign({}, state, { showAlertprocessTypesUpdated: false });
        default:
            return state
    }
}

const initialStateFindDetailsPrecioManualFCP = {
    listPmdFCP: [],
    precioManualFCP: {},
    fechaProceso: null,
    listSize: 0,
    showAlertprocessTypesUpdated: false
}
export function tableDynamicPrecioManualDetalle(state = initialStateFindDetailsPrecioManualFCP, action) {
    switch (action.type) {
        case FIND_DETAILS_PRECIO_MANUAL_FCP:
            return Object.assign({}, state, {
                listPmdFCP: action.payload.data, precioManualFCP: action.payload.precioManualFCP,
                fechaProceso: action.payload.fechaProceso
            });
        case ADD_ITEM_PRECIO_MANUAL_DETALLE:
            return Object.assign({}, state, {
                listPmdFCP:
                state.listPmdFCP.concat(
                    [{
                        id: (+ new Date() + Math.floor(Math.random() * 999999)).toString(36),
                        identificador: state.precioManualFCP.identificador,
                        isin: '',
                        fechaAlta: state.fechaProceso
                    }]),
                listSize: (action.payload.listSize + 1)
            }
            );
        case REMOVE_ITEM_PRECIO_MANUAL_DETALLE:
            if (state.listPmdFCP.filter((item) => item.id === action.idItem).length > 0) {
                let itemIndex = state.listPmdFCP.findIndex((item) => item.id == action.idItem);
                let newListPmdFCP = state.listPmdFCP;
                newListPmdFCP.splice(itemIndex, 1);
                return Object.assign({}, state, { listPmdFCP: newListPmdFCP, listSize: (state.listSize - 1) })
            }
        case GUARDAR_PRECIO_MANUAL_DETALLE:
            return Object.assign({}, state, { showAlertprocessTypesUpdated: true });
        case OCULTAR:
            return Object.assign({}, state, { showAlertprocessTypesUpdated: false });
        default:
            return state
    }
}

const initialStateListaControl = {
    listControl: [],
    listSize: 0,
    showAlertprocessTypesUpdated: false,
    idProceso: 0,
    listTypePrice: []
}
export function getListaControl(state = initialStateListaControl, action) {
    switch (action.type) {
        case GET_LISTA_CONTROL:
            return Object.assign({}, state, { listControl: action.payload.data })

        case ADD_ITEM_LISTA_CONTROL:
            return Object.assign({}, state, {
                listControl:
                state.listControl.concat(
                    [{
                        id: (+ new Date() + Math.floor(Math.random() * 999999)).toString(36),
                        codigo: '',
                        fechaAlta: '',
                        tipoProceso: ''
                    }]),
                listSize: (action.payload.listSize + 1)
            }
            );

        case GUARDAR_LISTA_CONTROL:
            return Object.assign({}, state, { listControl: action.payload, showAlertprocessTypesUpdated: true });
        case ELIMINAR_ITEM_LISTA_CONTROL:
            if (state.listControl.filter((item) => item.id === action.idItem).length > 0) {
                let itemIndex = state.listControl.findIndex((item) => item.id == action.idItem);
                let newListControl = state.listControl;
                newListControl.splice(itemIndex, 1);

                return Object.assign({}, state, { listControl: newListControl, listSize: (state.listSize - 1) })
            }
        case ID_PROCESO:
            return Object.assign({}, state, { idProceso: action.idProceso })
        case OCULTAR:
            return Object.assign({}, state, { showAlertprocessTypesUpdated: false });
        case SHOW_TYPES_PROCESS_PRICE:
            for (var item in action.payload) {
                if (action.payload[item].nombre === "PRECIOS_MANUAL" || action.payload[item].nombre === "MONEDAS"
                    || action.payload[item].nombre === "PRECIO_MANUAL_ARCHIVO"
                ) {
                    delete action.payload[item];
                }
            }

            return Object.assign({}, state, { listTypePrice: action.payload, listControl: [] })
        default:
            return state
    }
}


const initialStateFormatoRegulatorio = {
    formato: "",
    crgPosiciones : "",
    f351 : "",
    f471 : "",
    f468: "",
    f397 : "",
    f_futuros: "",
    f472 : ""
}
export function ejecutarFormatoRegulatorio(state = initialStateFormatoRegulatorio, action) {
    switch (action.type) {
        case OBTENER_CRG_POSICIONES:
          let myCrgPosiciones = action.payload;
          myCrgPosiciones.title = "Cargue de Posiciones";
          myCrgPosiciones.task = "CRG_POSICIONES";
          return Object.assign({}, state, { crgPosiciones: myCrgPosiciones })
        case OBTENER_F_351:
          let myF351 = action.payload;
          myF351.title = "Formato 351";
          myF351.task = "F_351";
          return Object.assign({}, state, { f351: myF351 })
        case OBTENER_F_471:
          let myF471 = action.payload;
          myF471.title = "Formato 471";
          myF471.task = "F_471";
          return Object.assign({}, state, { f471: myF471 })
        case OBTENER_F_468:
          let myF468 = action.payload;
          myF468.title = "Formato 468";
          myF468.task = "F_468";
          return Object.assign({}, state, { f468: myF468 })
        case OBTENER_F_397:
          let myF397 = action.payload;
          myF397.title = "Formato 397";
          myF397.task = "F_397";
          return Object.assign({}, state, { f397: myF397 })
        case OBTENER_F_FUTURO:
          let myFuturo = action.payload;
          myFuturo.title = "Formato Futuros (XBRL)";
          myFuturo.task = "F_FUTURO";
          return Object.assign({}, state, { f_futuros: myFuturo })
        case OBTENER_F_472:
          let myF472 = action.payload;
          myF472.title = "Formato 472";
          myF472.task = "F_472";
          return Object.assign({}, state, { f472: myF472})
        case EJECUTAR_FORMATO_REGULATORIO:
          return Object.assign({}, state, { formato: action.payload })
        default:
            return state
    }
}

const initialStateScore = {
    crgOperacionesTrd : "",
    crgOperacionesRep : "",
    crgOperacionesColl : "",
    crgOperacionesCmat : "",
    crgAjtOperacionesCmat: "",
    crgVencimientoOp: "",
    crgVencimientoCashWF: "",
    crgOperTrdAjs: "",
    valOpct : "",
    valOpctTtvrv : "",
    valOpctTtvrf : "",
    valPos: "",
    ajusFixValo: "",
    valPosRep: "",
    crgValFut: "",
    valOpcValoFut: "",
    eventosOps : "",
    eventosVencim : "",
    eventosOpct : "",
    eventosFx : "",
    eventosFut : "",
    eventosPos : "",
    crgVencimientoWeek : "",
    crgVencimientoPayfail : "",
    crgValFxSwap : "",
    crgValVencimSwapPay: "",
    crgFixing: "",
    crgValFutPago: "",
    crgVencimEventos: "",
    crgVenFixing : "",
    crgOpAjsSpot: "",
    crgAjsVencim: "",
    crgSpotFixingVencim: "",
    crgVenMat: ""
}
export function ejecutarScore(state = initialStateScore, action) {
    switch (action.type) {
        case OBTENER_CRG_OPER_TRD_AJST:
            let myCrgOperacionesTrdAjst = action.payload;
            myCrgOperacionesTrdAjst.title = "Cargue de Operaciones - [AJUS]";
            return Object.assign({}, state, { crgOperTrdAjs: myCrgOperacionesTrdAjst })
        case OBTENER_CRG_OPERACIONES_TRD:
            let myCrgOperacionesTrd = action.payload;
            myCrgOperacionesTrd.title = "Cargue de Operaciones - [TRADES]";
            return Object.assign({}, state, { crgOperacionesTrd: myCrgOperacionesTrd })
        case OBTENER_CRG_OPERACIONES_REP:
            let myCrgOperacionesRep = action.payload;
            myCrgOperacionesRep.title = "Cargue de Operaciones - [REP]";
            return Object.assign({}, state, { crgOperacionesRep: myCrgOperacionesRep })
        case OBTENER_CRG_OPERACIONES_COLL:
            let myCrgOperacionesColl = action.payload;
            myCrgOperacionesColl.title = "Cargue de Operaciones - [GAR_REP]";
            return Object.assign({}, state, { crgOperacionesColl: myCrgOperacionesColl })
        case OBTENER_CRG_OPERACIONES_CMAT:
            let myCrgOperacionesCmat= action.payload;
            myCrgOperacionesCmat.title = "Cargue de Operaciones - [VENCIM_REP]";
            return Object.assign({}, state, { crgOperacionesCmat: myCrgOperacionesCmat })
        case OBTENER_CRG_AJT_OPE_CMAT:
            let myCrgAjtOperacionesCmat= action.payload;
            myCrgAjtOperacionesCmat.title = "Cargue de Operaciones - [AJT_CMAT]";
            return Object.assign({}, state, { crgAjtOperacionesCmat: myCrgAjtOperacionesCmat })
        case OBTENER_CRG_OP_AJS_SPOT:
            let myCrgOpAjsSpot= action.payload;
            myCrgOpAjsSpot.title = "Cargue de Operaciones - [AJT_SPOT]";
            return Object.assign({}, state, { crgOpAjsSpot: myCrgOpAjsSpot })
        case OBTENER_CRG_VEN_OPER :
            let myCrgVencimientoOp = action.payload;
            myCrgVencimientoOp.title = "Cargue de Vencimientos - [TRADES]";
            return Object.assign({}, state, { crgVencimientoOp: myCrgVencimientoOp })
        case OBTENER_CRG_VEN_CASHWF :
            let myCrgVencimientoCashWF = action.payload;
            myCrgVencimientoCashWF.title = "Cargue de Vencimientos - [CASH WF]";
            return Object.assign({}, state, { crgVencimientoCashWF: myCrgVencimientoCashWF })
        case OBTENER_CRG_VEN_WEEK :
            let myCrgVencimientoWeek = action.payload;
            myCrgVencimientoWeek.title = "Cargue de Vencimientos - [WEEKEND]";
            return Object.assign({}, state, { crgVencimientoWeek: myCrgVencimientoWeek })
        case OBTENER_CRG_VEN_PAY_FAILS :
            let myCrgVencimientoPayfail = action.payload;
            myCrgVencimientoPayfail.title = "Cargue de Vencimientos - [FAILS]";
            return Object.assign({}, state, { crgVencimientoPayfail: myCrgVencimientoPayfail })
        case OBTENER_CRG_VEN_EVENTOS :
            let myCrgVencimEventos = action.payload;
            myCrgVencimEventos.title = "Cargue de Vencimientos - [AJUSTES_EVENTOS]";
            return Object.assign({}, state, { crgVencimEventos: myCrgVencimEventos })
        case OBTENER_CRG_FIXING :
            let myCrgFixing = action.payload;
            myCrgFixing.title = "Cargue de Vencimientos - [FIXING]";
            return Object.assign({}, state, { crgFixing: myCrgFixing })
        case OBTENER_AJS_VENCIM :
            let myAjsVencim = action.payload;
            myAjsVencim.title = "Cargue de Vencimientos - [AJS_VENCIM]";
            return Object.assign({}, state, { crgAjsVencim: myAjsVencim })
        case OBTENER_VAL_OPCT:
            let myValOpct = action.payload;
            myValOpct.title = "Valoración - [OPCT]";
            return Object.assign({}, state, { valOpct: myValOpct })
        case OBTENER_VAL_OPCT_TTVRV:
            let myvalOpctTtvrv = action.payload;
            myvalOpctTtvrv.title = "Valoración - [OPCT TTVRV]";
            return Object.assign({}, state, { valOpctTtvrv: myvalOpctTtvrv })
        case OBTENER_VAL_OPCT_TTVRF:
            let myvalOpctTtvrf = action.payload;
            myvalOpctTtvrf.title = "Valoración - [OPCT TTVRF]";
            return Object.assign({}, state, { valOpctTtvrf: myvalOpctTtvrf })
        case OBTENER_VAL_POS:
            let myValPos = action.payload;
            myValPos.title = "Valoración - [POS]";
            return Object.assign({}, state, { valPos: myValPos })
        case OBTENER_AJUSTE_FIX_VALO:
            let myAjusFixValo = action.payload;
            myAjusFixValo.title = "Valoración - [AJUS_FIX_VALO]";
            return Object.assign({}, state, { ajusFixValo: myAjusFixValo })
        case OBTENER_VAL_POS_GAR_REP:
            let myValPosRep = action.payload;
            myValPosRep.title = "Valoración - [GAR_REP]";
            return Object.assign({}, state, { valPosRep: myValPosRep })
        case OBTENER_CRG_VAL_FUT :
            let myCrgValFut = action.payload;
            myCrgValFut.title = "Valoración - [FUT]";
            return Object.assign({}, state, { crgValFut: myCrgValFut })
        case OBTENER_CRG_VAL_FUT_PAGO :
            let myCrgValFutPago = action.payload;
            myCrgValFutPago.title = "Valoración - [FUT-PAGO]";
            return Object.assign({}, state, { crgValFutPago: myCrgValFutPago })
        case OBTENER_OPC_VALO_FUT :
            let myValOpcValoFut = action.payload;
            myValOpcValoFut.title = "Valoración - [OPT]";
            return Object.assign({}, state, { valOpcValoFut: myValOpcValoFut })
        case OBTENER_CRG_VAL_FX_SWAP :
            let myCrgValFxSwap = action.payload;
            myCrgValFxSwap.title = "Valoración - [FW_SW]";
            return Object.assign({}, state, { crgValFxSwap: myCrgValFxSwap })
        case OBTENER_CRG_VEN_SWAPPAY :
            let myCrgValVencimSwapPay = action.payload;
            myCrgValVencimSwapPay.title = "Valoración - [VENCIM_SW_PAY]";
            return Object.assign({}, state, { crgValVencimSwapPay: myCrgValVencimSwapPay })
        case OBTENER_EVENTO_OPER:
            let myEventosOps = action.payload;
            myEventosOps.title = "Eventos - [OPERACIONES]";
            return Object.assign({}, state, { eventosOps: myEventosOps })
        case OBTENER_EVENTO_VENCIM:
            let myEventosVencim = action.payload;
            myEventosVencim.title = "Eventos - [VENCIMIENTOS]";
            return Object.assign({}, state, { eventosVencim: myEventosVencim })
        case OBTENER_EVENTO_OPCT:
            let myEventosOpct = action.payload;
            myEventosOpct.title = "Eventos - [OPCT]";
            return Object.assign({}, state, { eventosOpct: myEventosOpct })
        case OBTENER_EVENTO_FX:
            let myEventosFx = action.payload;
            myEventosFx.title = "Eventos - [FX]";
            return Object.assign({}, state, { eventosFx: myEventosFx })
        case OBTENER_EVENTO_FUT:
            let myEventosFut = action.payload;
            myEventosFut.title = "Eventos - [FUTUROS]";
            return Object.assign({}, state, { eventosFut: myEventosFut })
        case OBTENER_EVENTO_POS:
            let myEventosPos = action.payload;
            myEventosPos.title = "Eventos - [POSICIONES]";
            return Object.assign({}, state, { eventosPos: myEventosPos })
        case OBTENER_CRG_VEN_FIXING:
            let myFxFixing = action.payload;
            myFxFixing.title = "Cargue de Vencimientos - [FX_FIXING]";
            return Object.assign({}, state, { crgVenFixing: myFxFixing })
        case OBTENER_SPOT_FIXING_VENCIM:
            let myCrgSpotFixingVencim = action.payload;
            myCrgSpotFixingVencim.title = "Cargue de Vencimientos - [SPOT_FIXING_VENCIM]";
            return Object.assign({}, state, { crgSpotFixingVencim: myCrgSpotFixingVencim })
        case OBTENER_CRG_VEN_MAT:
            let myCrgVenMat = action.payload;
            myCrgVenMat.title = "Cargue de Vencimientos - [CRG_VEN_MAT]";
            return Object.assign({}, state, { crgVenMat: myCrgVenMat })
        default:
            return state
    }
}

const initialStateTipoProcesoCurvas = {
    listaTipoProceso: [],
    lista: [],
    dateProcess: '',
    size: 0,
    completed: false,
    detalle: []
}
export function obtenerListaProcesoCurvas(state = initialStateTipoProcesoCurvas, action) {
    switch (action.type) {
        case LISTAR_TIPO_PROCESO_CURVA:
            return Object.assign({}, state, { listaTipoProceso: action.payload })
        case LISTAR_TIPO_PROCESO_CURVA_FECHA:
            let stateButton = null;
            if(action.payload.data.length == 0)  {
               stateButton = false;
            } else {
                let listNotCharged = action.payload.data.
                                        filter(item => item.estado != "CARGADO");
                if(listNotCharged.length != 0) {
                    stateButton = false;
                } else {
                    stateButton = true;
                }
            }
            return Object.assign({}, state, { lista: action.payload.data,
                                              dateProcess: action.payload.date,
                                              completed: stateButton,
                                              size: action.payload.data.length})
        case DETALLE_CURVAS:
            return Object.assign({}, state, { detalle: action.payload })
        default:
            return state
    }
}

const initialStateListarTiposProcesosCVA_DVA = {
  listProcessTypes : []
}
export function listarTiposProcesosCVA_DVA(state = initialStateListarTiposProcesosCVA_DVA, action) {
  switch (action.type) {
    case LISTAR_TIPOS_PROCESOS_CVA_DVA:
      return Object.assign({}, state, { listProcessTypes: action.payload });
    default:
      return state;
  }
}

const initialStateListarProcesosPorFechaCVA_DVA = {
  listProcess : [],
  searchDate: ""
}
export function listarProcesosPorFechaCVA_DVA(state = initialStateListarProcesosPorFechaCVA_DVA, action) {
  switch (action.type) {
    case LISTAR_PROCESOS_POR_FECHA_CVA_DVA:
      return Object.assign({}, state, { listProcess: action.payload.data, searchDate: action.payload.searchDate });
    default:
      return state;
  }
}

const initialStateInformacionDiaria = {
    secMaster: "",
    contrapartes: "",
    listaControl: "",
    details: []
}
export function ejecutarInformacionDiaria(state = initialStateInformacionDiaria, action) {
    let newObjet;
    switch (action.type) {
        case OBTENER_SEC_MASTER:
            newObjet = action.payload;
            newObjet.nombre = "SEC_MASTER";
            newObjet.descripcion = "Secutiry Master";
            newObjet.url = "/procesos-security-master/rest/securityMaster/execute";
            newObjet.urlDelete = "/procesos-security-master/rest/securityMaster/deleteExecute";
            return Object.assign({}, state, { secMaster: newObjet });
        case EJECUTAR_SEC_MASTER:
            newObjet = action.payload;
            newObjet.nombre = "SEC_MASTER";
            newObjet.descripcion = "Secutiry Master";
            newObjet.url = "/procesos-security-master/rest/securityMaster/execute";
            newObjet.urlDelete = "/procesos-security-master/rest/securityMaster/deleteExecute";
            return Object.assign({}, state, { secMaster: newObjet });
        case OBTENER_CONTRAPARTES:
            newObjet = action.payload;
            newObjet.nombre = "CONTRAPARTES";
            newObjet.descripcion = "Contrapartes";
            newObjet.url = "/procesos-contrapartes/rest/contrapartes/execute";
            newObjet.urlDelete = "/procesos-contrapartes/rest/contrapartes/deleteExecute";
            return Object.assign({}, state, { contrapartes: newObjet });
        case EJECUTAR_CONTRAPARTES:
            newObjet = action.payload;
            newObjet.nombre = "CONTRAPARTES";
            newObjet.descripcion = "Contrapartes";
            newObjet.url = "/procesos-contrapartes/rest/contrapartes/execute";
            newObjet.urlDelete = "/procesos-contrapartes/rest/contrapartes/deleteExecute";
            return Object.assign({}, state, { contrapartes: newObjet });
        case OBTENER_UPDATE_LISTA_CONTROL:
            newObjet = action.payload;
            newObjet.nombre = "UPDATE_LISTA_CONTROL";
            newObjet.descripcion = "Lista Control";
            newObjet.url = "/procesos-lista-control/rest/lista-control/execute";
            newObjet.urlDelete = "/procesos-lista-control/rest/lista-control/deleteExecute";
            return Object.assign({}, state, { listaControl: newObjet });
        case EJECUTAR_UPDATE_LISTA_CONTROL:
            newObjet = action.payload;
            newObjet.nombre = "UPDATE_LISTA_CONTROL";
            newObjet.descripcion = "Lista Control";
            newObjet.url = "/procesos-lista-control/rest/lista-control/execute";
            newObjet.urlDelete = "/procesos-lista-control/rest/lista-control/deleteExecute";
            return Object.assign({}, state, { listaControl: newObjet });
        case DETALLES_LISTA_CONTROL:
            return Object.assign({}, state, { details: action.payload });
        default:
            return state;
    }
}

const initialStateParametroDiasFestivos = {
    parametroDiasFestivos: 0,
}
export function obtenerParametroDiasFestivos(state = initialStateParametroDiasFestivos, action) {
    switch (action.type) {
        case OBTENER_PARAMETRO_DIAS_FESTIVOS:
            return Object.assign({}, state, { parametroDiasFestivos: action.payload });
        default:
            return state;
    }
}

const initialStateDiasFestivos = {
    diasFestivos: [],
}
export function obtenerDiasFestivos(state = initialStateDiasFestivos, action) {
    switch (action.type) {
        case OBTENER_DIAS_FESTIVOS:
            return Object.assign({}, state, { diasFestivos: action.payload });
        default:
            return state;
    }
}

const initialStateGuardarDiasFestivos = {
    diasFestivosGuardados: [],
    showAlertprocessTypesUpdated: false
}
export function guardarDiasFestivos(state = initialStateGuardarDiasFestivos, action) {
    switch (action.type) {
        case GUARDAR_DIAS_FESTIVOS:
            return Object.assign({}, state, { diasFestivosGuardados: action.payload, showAlertprocessTypesUpdated: true });
        case OCULTAR:
            return Object.assign({}, state, { showAlertprocessTypesUpdated: false });
        default:
            return state;
    }
}

const initialStateVerificarDiasFestivos = {
    diasFestivosVerificados: false,
    contador: 0
}
export function verificarDiasFestivos(state = initialStateVerificarDiasFestivos, action) {
    switch (action.type) {
        case VERIFICAR_DIAS_FESTIVOS:
            return Object.assign(
                {},
                state,
                {
                    diasFestivosVerificados: action.payload,
                    contador: action.payload ? 1 : 0
                }
            );
        default:
            return state;
    }
}

const initialStateCodigosDcv = {
    list: [],
    listSize: 0,
    unsubscribeDCV: "",
    listSaved: false
}
export function codigosDcv(state = initialStateCodigosDcv, action) {
    switch (action.type) {
        case LISTAR_DCV:
            return Object.assign({}, state, { list: action.payload.data, listSize: action.payload.data.length });
        case ADD_ITEM_ISIN_DCV:
            return Object.assign({}, state, {
                list:
                state.list.concat(
                    [{
                        id: (+ new Date() + Math.floor(Math.random() * 999999)).toString(36),
                        isin: '',
                        codigoEmisionDcv: ''
                    }]),
                listSize: (action.payload.listSize + 1)
              }
            );
        case REMOVE_ITEM_ISIN_DCV:
            if (state.list.filter((item) => item.id === action.idItem).length > 0) {
                let itemIndex = state.list.findIndex((item) => item.id == action.idItem);
                let newListIsinsDcv = state.list;
                newListIsinsDcv.splice(itemIndex, 1);
                return Object.assign({}, state, { list: newListIsinsDcv, listSize: (state.listSize - 1) })
            }
        case SAVE_LIST_ISIN_DCV:
            return Object.assign({}, state, { listSaved: true });
        case OCULTAR:
            return Object.assign({}, state, { listSaved: false });
        default:
            return state;
    }
}

const initialStateCuentasBancarias = {
    list: [],
    listSons: [],
    listSize: 0,
    listSaved: false,
    portafolio: "",
    cusipPadre: "",
    listSizeSons: 0,
    itemSaved: false
}
export function cuentasBancarias(state = initialStateCuentasBancarias, action) {
    switch (action.type) {
        case LISTAR_CUENTAS_BANCARIAS:
            return Object.assign({}, state, { list: action.payload.data, listSize: action.payload.data.length,
              portafolio: action.payload.portafolio
             });
        case ADD_ITEM_CUENTA_BANCARIA:
            return Object.assign({}, state, {
                list:
                state.list.concat(
                    [{
                        id: (+ new Date() + Math.floor(Math.random() * 999999)).toString(36),
                        codigoPortafolio: action.payload.portafolio,
                        cusip: '',
                        nombre: '',
                        numeroCuenta: ''
                    }]),
                listSize: (action.payload.listSize + 1)
              }
            );
        case SAVE_LIST_CUENTAS_BANCARIAS:
            return Object.assign({}, state, { listSaved: true });
        case OCULTAR:
            return Object.assign({}, state, { listSaved: false });
        case REMOVE_CUENTA_BANCARIA:
            if (state.list.filter((item) => item.id === action.idItem).length > 0) {
                let itemIndex = state.list.findIndex((item) => item.id == action.idItem);
                let newListIsinsDcv = state.list;
                newListIsinsDcv.splice(itemIndex, 1);
                return Object.assign({}, state, { list: newListIsinsDcv, listSize: (state.listSize - 1) })
            }
        case FIND_SONS_ACCOUNTS_BANK_CUSIP:
            return Object.assign(
              {}, state, {
                  listSons: action.payload.data,
                  cusipPadre: action.payload.cusipPadre,
                  listSizeSons: action.payload.data.length ,
                  itemSaved: false
                }
            )
        case DELETE_SON_ACCOUNTS_BANK_CUSIP:
            if (state.listSons.filter((item) => item.id === action.idItem).length > 0) {
                let itemIndex = state.listSons.findIndex((item) => item.id == action.idItem);
                let newListIsinsDcv = state.listSons;
                newListIsinsDcv.splice(itemIndex, 1);
                return Object.assign({}, state, { listSons: newListIsinsDcv, listSizeSons: (state.listSizeSons - 1) })
            }
        case ADD_SON_ACCOUNTS_BANK_CUSIP:
            return Object.assign({}, state, {
                listSons:
                    state.listSons.concat(
                        [{
                            id: (+ new Date() + Math.floor(Math.random() * 999999)).toString(36),
                            cusipCuenta: state.cusipPadre,
                            cusipGarantia: ''
                    }]),
                    listSizeSons: (state.listSizeSons + 1)
                }
            );
        case SAVE_SONS_ACCOUNTS_BANK_CUSIP:
            return Object.assign({}, state, {itemSaved: true});
        case UPDATE_LIST_SONS_ACCOUNTS_BANK_CUSIP:
            state.listSons.find(item => item.id === action.payload.item.id).cusipGarantia = action.payload.value.toUpperCase();
            return Object.assign({}, state, {listSons: state.listSons});
        default:
            return state;
    }
}

const initialStateSmInversion = {
    smInversion: "",
    cusip: "",
    isUpdate: false
}
export function smInversiones(state = initialStateSmInversion, action) {
    switch (action.type) {
        case LISTAR_SM_INVERSION:
            return Object.assign({}, state, { smInversion: action.payload.data, cusip: action.payload.cusip });
        case UPDATE_SM_INVERSION:
            return Object.assign({}, state, { smInversion: action.payload.data,
                cusip: action.payload.data.smCusip, isUpdate: true
              }
            );
        case OCULTAR:
            return Object.assign({}, state, { isUpdate: false });
        default:
            return state;
    }
}

const initialStateProcesosEjecutados = {
    procesosEjecutadosServices: [],
    procesosEjecutadosCurvas: [],
    procesosEjecutadosDerivados: [],
    contadorServices: 0,
    contadorCurvas: 0,
    contadorDerivados: 0
}
export function verificarProcesosEjecutados(state = initialStateProcesosEjecutados, action) {
    switch (action.type) {
        case PROCESOS_EJECUTADOS_CONTROL_SERVICES:
            let processServices = action.payload.filter(item => item.estado === "NO_CARGADO");
            return Object.assign(
                {},
                state,
                {
                    procesosEjecutadosServices: processServices,
                    contadorServices: processServices.length
                }
            );
        case PROCESOS_EJECUTADOS_CONTROL_CURVAS:
            let processCurves = action.payload.filter(item => item.estado === "NO_CARGADO");
            return Object.assign(
                {},
                state,
                {
                    procesosEjecutadosCurvas: processCurves,
                    contadorCurvas: processCurves.length
                }
            );
        case PROCESOS_EJECUTADOS_CONTROL_DERIVADOS:
            let processDeri = action.payload.filter(item => item.estado === "NO_CARGADO");
            return Object.assign(
                {},
                state,
                {
                    procesosEjecutadosDerivados: processDeri,
                    contadorDerivados: processDeri.length
                }
            );
        default:
            return state;
    }
}

const initialStateEnvioArchivoGenerico = {
    fileSend: "",
    searchDate: "",
    filesList: [],
    searchDate: ""
}
export function archivosGenericos(state = initialStateEnvioArchivoGenerico, action) {
    switch (action.type) {
        case ENVIO_ARCHIVO_GENERICO:
            return Object.assign(
              {}, state, { fileSend: action.payload }
            )
        case SET_VALUE:
            return Object.assign(
              {}, state, { fileSend: action.payload }
            )
        case LISTAR_ARCHIVOS_GENERICOS:
            return Object.assign(
              {}, state, { filesList: action.payload.list, searchDate: action.payload.searchDate }
            )
        default:
            return state
    }
}
