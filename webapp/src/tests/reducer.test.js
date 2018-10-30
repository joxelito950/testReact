import {
    showProcessPrices, showProcessTypes, procesos, procesosNavs, findDetails, OBTENER_FORMATO_REGULATORIO,
    obtenerFechaProceso, actualizarTiposProcesos, obtenerListaPrecioManual, generarArchivo,
    validacionFallida, tableDynamicParametroPortafolio, ejecutarValorFondo, showProcessNavs, listarValorFondo, obtenerListaProcesosFtp, showProcessTypesFtp, downloadFtp, reintentarProcesoFtp, showProcessAladdin, actualizarFechaProceso, showProcessAlertProgress, tableDynamic, ejecutarValorFondo2, getIdTipoPrecio, login, tableDynamicPrecioManual, tableDynamicPrecioManualDetalle, getListaControl, ejecutarFormatoRegulatorio, ejecutarScore
} from '../reducers/reducers';
import {
    SHOW_TYPES_PROCESS, CHECKLIST, SHOW_PROCESS_NAVS, CHECKLIST_NAVS, GENERAR_ARCHIVO, FIND_DETAILS,
    GUARDAR_PRECIOS_MANUAL, FECHA_PROCESO, UPDATE_PROCESS_TYPE, OCULTAR, LISTAR_PRECIOS_MANUAL, LISTAR_PARAMETROS_PORTAFOLIO,
    VALIDACION_FALLIDA, VALIDACION_EXITOSA, GUARDAR_PARAMETRO_PORTAFOLIO, EJECUTAR_VALOR_FONDO, LISTAR_VALOR_FONDO,
    MOSTRAR, ADD_ITEM_PARAMETRO_PORTAFOLIO, REMOVE_ITEM_PARAMETRO_PORTAFOLIO, SHOW_PROCESS_PRICES, REPLICATE_PROCESS_RVL,
    REPLICATE_PROCESS_FUTUROS, OBTENER_LISTA_PROCESOS_FTP, SHOW_TYPES_PROCESS_FTP, DOWNLOAD_FTP, REINTENTAR_PROCESO_FTP,
    SHOW_PROCESS_ALADDIN, ACTUALIZAR_FECHA_PROCESO, SHOW_ALERT_PROGRESS, REINTENTAR_CARGUE_PROCESO, OBTENER_SCORE,
    LISTAR_TIPO_PROCESO_CURVA_FECHA, REINTENTAR_CURVAS_FORWARD, LISTAR_PROCESOS_POR_FECHA_CVA_DVA, LISTAR_SM_INVERSION,
    ENVIO_ARCHIVO_GENERICO, LISTAR_ARCHIVOS_GENERICOS, FIND_SONS_ACCOUNTS_BANK_CUSIP, LISTAR_FACTOR_OPCION,
    ADD_ITEM, REMOVE_ITEM, GUARDAR_FACTOR_OPCION, BORRAR_FACTOR_OPCION, BORRAR_FACTOR_OPCION_BY_ID, SHOW_PROCESS_NAVS_TO_EXECUTE,
    OBTENER_VALOR_FONDO_VOLUNTARIO, OBTENER_VALOR_FONDO_CESANTIAS, ID_TIPO_PRECIO_MANUAL, UPDATE_STATE_LOCAL_STORAGE,
    LOCAL_STORAGE_CLEAN, LISTAR_PRECIOS_MANUAL_POR_TIPO, ADD_ITEM_PRECIO_MANUAL, REMOVE_ITEM_PRECIO_MANUAL,
    FIND_DETAILS_PRECIO_MANUAL_FCP, ADD_ITEM_PRECIO_MANUAL_DETALLE, REMOVE_ITEM_PRECIO_MANUAL_DETALLE,
    GUARDAR_PRECIO_MANUAL_DETALLE, GET_LISTA_CONTROL, ADD_ITEM_LISTA_CONTROL, GUARDAR_LISTA_CONTROL,
    ELIMINAR_ITEM_LISTA_CONTROL, ID_PROCESO, SHOW_TYPES_PROCESS_PRICE, OBTENER_CRG_POSICIONES, OBTENER_F_351,
    OBTENER_F_471, OBTENER_F_468, OBTENER_F_397, OBTENER_F_FUTURO, OBTENER_F_472, EJECUTAR_FORMATO_REGULATORIO,
    OBTENER_CRG_OPER_TRD_AJST, OBTENER_CRG_OPERACIONES_TRD, OBTENER_CRG_OPERACIONES_REP, OBTENER_CRG_OPERACIONES_COLL, OBTENER_CRG_OPERACIONES_CMAT, OBTENER_CRG_AJT_OPE_CMAT, OBTENER_CRG_OP_AJS_SPOT, OBTENER_CRG_VEN_OPER, OBTENER_CRG_VEN_CASHWF, OBTENER_CRG_VEN_WEEK, OBTENER_CRG_VEN_PAY_FAILS, OBTENER_CRG_VEN_EVENTOS, OBTENER_CRG_FIXING, OBTENER_AJS_VENCIM, OBTENER_VAL_OPCT, OBTENER_VAL_OPCT_TTVRV, OBTENER_VAL_OPCT_TTVRF, OBTENER_VAL_POS, OBTENER_AJUSTE_FIX_VALO, OBTENER_VAL_POS_GAR_REP, OBTENER_CRG_VAL_FUT, OBTENER_CRG_VAL_FUT_PAGO, OBTENER_OPC_VALO_FUT, OBTENER_CRG_VAL_FX_SWAP, OBTENER_CRG_VEN_SWAPPAY, OBTENER_EVENTO_OPER, OBTENER_EVENTO_VENCIM, OBTENER_EVENTO_OPCT, OBTENER_EVENTO_FX, OBTENER_EVENTO_FUT, OBTENER_EVENTO_POS, OBTENER_CRG_VEN_FIXING, OBTENER_SPOT_FIXING_VENCIM, OBTENER_CRG_VEN_MAT, LISTAR_TIPO_PROCESO_CURVA,
} from '../actions';

import rootReducer from '../reducers';

describe('Test de showProcessPrices', () => {
    const initialState = {
        list: [],
        dateProcess: "",
        listRvl: [],
        listFuturos: []
    }
    it('No debe ingresar a ningun type y devolver estado enviado', () => {
        expect(showProcessPrices('estado', 'action')).toEqual('estado');
    });
    it('Debe ingresar al type SHOW_PROCESS_PRICES y modificar list y dateProccess', () => {
        expect(showProcessPrices(initialState, { type: SHOW_PROCESS_PRICES, payload: { data: [''], date: '1' } }))
            .toEqual({
                list: [''],
                dateProcess: "1",
                listRvl: [],
                listFuturos: []
            });
    });
    it('Debe ingresar al type REPLICATE_PROCESS_RVL y modificar listRvl', () => {
        expect(showProcessPrices(initialState, { type: REPLICATE_PROCESS_RVL, payload: { data: [''] } }))
            .toEqual({
                list: [],
                dateProcess: "",
                listRvl: [''],
                listFuturos: []
            });
    });
    it('Debe ingresar al type ', () => {
        expect(showProcessPrices(initialState, { type: REPLICATE_PROCESS_FUTUROS, payload: { data: [''] } }))
            .toEqual({
                list: [],
                dateProcess: "",
                listRvl: [],
                listFuturos: ['']
            });
    });
});

describe('Test de showProcessTypes ', () => {
    it('Debe No encuentrar type:"SHOW_TYPES_PROCESS" y retorna el mismo estado enviado', () => {
        expect(showProcessTypes('estado', "action")).toEqual('estado');
    })
    it('Debe ingresar al type:"SHOW_TYPES_PROCESS" y setea los datos', () => {
        expect(showProcessTypes('', { type: SHOW_TYPES_PROCESS, payload: ['datos'] }))
            .toEqual({ list: ['datos'] });
    })
})

describe('Test de procesos', () => {
    it('Debe No ingresar a ningun type y retorna el mismo estado enviado', () => {
        expect(procesos('estado', 'action')).toEqual('estado');
    })
    it('Debe Ingresar al type:"SHOW_PROCESS_PRICES" y setea los datos del estado', () => {
        expect(procesos({ list: [], size: 0, completed: true }, { type: SHOW_PROCESS_PRICES, payload: { data: [{ id: 0 }] } }))
            .toEqual({ list: [{ id: 0 }], size: 1, completed: false });
    })
    describe('Debe ingresar al type:"CHECKLIST"', () => {
        it('Debe hacer .map de la lista y cambiar el selected del item con el id correcto', () => {
            expect(
                procesos({
                    list: [{ id: 0, selected: true, case: 0 }, { id: 11, selected: false, case: 1 }, { id: 12, selected: false, case: 2 }],
                    size: 2, completed: false
                }, { type: CHECKLIST, idProcess: 11 }))
                .toEqual({
                    list: [{ id: 0, selected: true, case: 0 }, { id: 11, selected: true, case: 1 }, { id: 12, selected: false, case: 2 }],
                    size: 2, completed: true
                });
        })
        it('Debe ingresar al primer if(size.length === state.size) y cambiar completed de false a true', () => {
            expect(
                procesos({ list: [], size: 0, completed: false }, { type: CHECKLIST, payload: { idProcess: 0 } }))
                .toEqual({ list: [], size: 0, completed: true });
        })
        it('Debe No ingresar al if y cambiar completed de true a false', () => {
            expect(procesos({ list: [], size: 1, completed: true }, { type: CHECKLIST, payload: { idProcess: 0 } }))
                .toEqual({ list: [], size: 1, completed: false });
        })
    })
})

describe('Test de procesosNavs', () => {
    it('Debe NO ingresar a ningun type y retornar el mismo estado que le envio', () => {
        expect(procesosNavs('estado', 'action')).toEqual('estado');
    })
    it('Debe ingresar al type:"SHOW_PROCESS_NAVS" y setear los datos del estado', () => {
        expect(procesosNavs('', { type: SHOW_PROCESS_NAVS, payload: { data: [] } }))
            .toEqual({ list: [], size: 0, completed: false });
    })
    describe('Debe Ingresar al type:"CHECKLIST_NAVS"', () => {
        it('Debe infresar el if y cambiar el completed de false a true', () => {
            expect(
                procesosNavs(
                    { list: [{ id: 0, selected: true }], size: 0, completed: false }, { type: CHECKLIST_NAVS, idProcess: 0 }))
                .toEqual({ list: [{ id: 0, selected: false }], size: 0, completed: true });
        })
        it('No debe ingresar al if y debe cambiar el completed de true a false', () => {
            expect(
                procesosNavs(
                    { list: [{ id: 0, selected: true }], size: 1, completed: true }, { type: CHECKLIST_NAVS, idProcess: 0 }))
                .toEqual({ list: [{ id: 0, selected: false }], size: 1, completed: false });
        })
    })
})

describe('Test de findDetails', () => {
    it('No debe ingresar a ningun TYPE y retornar el mismo estado que le envio', () => {
        expect(findDetails('estado', 'action')).toEqual('estado');
    })
    it('Debe ingresar al type:"FIND_DETAILS"', () => {
        expect(findDetails(
            '',
            { type: FIND_DETAILS, payload: { detalle: [], variacionTotal: 0, estaFueraDeRango: 'No' } }
        )).toEqual({
            listDetails: [],
            variacionTotal: 0,
            estaFueraDeRango: 'No'
        });
    })
})

describe('Test de obtenerFechaProceso', () => {
    it('No debe ingresar a ningun type y debe retornar el mismo estado que le envio', () => {
        expect(obtenerFechaProceso('estado', "action")).toEqual('estado');
    })
    it('Debe ingresar al type:"FECHA_PROCESO" y setear fechaProceso', () => {
        expect(obtenerFechaProceso('', { type: FECHA_PROCESO, payload: "" })).toEqual({ fechaProceso: '' })
    })
})

describe('Test de actualizarTiposProcesos', () => {
    it('No debe ingresar a ningun type y debe retornar el mismo estado que le envio', () => {
        expect(actualizarTiposProcesos('estado', 'action')).toEqual('estado');
    })
    it('debe ingresar al type: UPDATE_PROCESS_TYPE y setear alert con true', () => {
        expect(actualizarTiposProcesos('', { type: UPDATE_PROCESS_TYPE }))
            .toEqual({ showAlertprocessTypesUpdated: true });
    })
    it('debe ingresar al type: OCULTAR y setear alert con false', () => {
        expect(actualizarTiposProcesos('', { type: OCULTAR }))
            .toEqual({ showAlertprocessTypesUpdated: false });
    })
})

describe('Test de obtenerListaPrecioManual', () => {
    it('No debe ingresar a ningun type y debe retornar el mismo estado que le envio', () => {
        expect(obtenerListaPrecioManual('estado', 'action')).toEqual('estado');
    })
    it('Debe ingresar al tipe LISTAR_PRECIOS_MANUAL y retornar lista vacia', () => {
        expect(obtenerListaPrecioManual('', { type: LISTAR_PRECIOS_MANUAL, payload: [] }))
            .toEqual({ listaPreciosManualByDate: [] });
    })
    it('Debe ingresar al tipe LISTAR_PRECIOS_MANUAL y retornar lista con un dato', () => {
        expect(obtenerListaPrecioManual('', {
            type: LISTAR_PRECIOS_MANUAL,
            payload: [{ identificador: '1', nombre: 'prueba', precio: 1, id: 1 }]
        }))
            .toEqual({ listaPreciosManualByDate: [{ identificador: '1', nombre: 'prueba', precio: 1, id: 1 }] });
    })
    it('Debe ingresar al tipe LISTAR_PRECIOS_MANUAL y retornar lista con un dato con los campos precio y id', () => {
        expect(obtenerListaPrecioManual('', {
            type: LISTAR_PRECIOS_MANUAL,
            payload: [{ identificador: '1', nombre: 'prueba' }]
        }))
            .toEqual({ listaPreciosManualByDate: [{ identificador: '1', nombre: 'prueba', precio: '', id: 0 }] });
    })
})

describe('Test de obtenerListaProcesosFtp', () => {
    it('No debe ingresar a ningun type y retornar el mismo estado enviado', () => {
        expect(obtenerListaProcesosFtp('state', 'action')).toEqual('state');
    });
    it('Debe ingresar al type OBTENER_LISTA_PROCESOS_FTP', () => {
        expect(obtenerListaProcesosFtp(
            '',
            { type: OBTENER_LISTA_PROCESOS_FTP, payload: { data: [''], searchDate: 'prueba' } }
        )).toEqual({ lista: [''], searchDate: 'prueba' });
    });
});

describe('Test de showProcessTypesFtp', () => {
    it('No debe ingresar a ningun type y retornar el mismo estado enviado', () => {
        expect(showProcessTypesFtp('state', 'action')).toEqual('state');
    });
    it('Debe ingresar al type ', () => {
        expect(showProcessTypesFtp('', { type: SHOW_TYPES_PROCESS_FTP, payload: [''] })).toEqual({ lista: [''] });
    });
});

describe('Test de downloadFtp', () => {
    it('No debe ingresar a nignu type y retornar el estado enviado', () => {
        expect(downloadFtp('state', 'action')).toEqual('state');
    });
    it('Debe ingresar al type ', () => {
        expect(downloadFtp('', { type: DOWNLOAD_FTP, payload: 'prueba' })).toEqual({ mensaje: 'prueba' });
    });
});

describe('Test de reintentarProcesoFtp', () => {
    it('No debe ingresar a ningun type y retornar el estado enviado ', () => {
        expect(reintentarProcesoFtp('state', 'action')).toEqual('state');
    });
    it('Debe ingresar al type ', () => {
        expect(reintentarProcesoFtp('', { type: REINTENTAR_PROCESO_FTP, payload: 'prueba' }))
            .toEqual({ procesoFtp: 'prueba' });
    });
});

describe('Test de generarArchivo', () => {
    it('No debe ingresar a ninguun type y retornar el mismo estado que le envio', () => {
        expect(generarArchivo('estado', 'action')).toEqual('estado');
    })
    it('Debe type GENERAR_ARCHIVO y modificar el alert de false a true', () => {
        expect(generarArchivo({ showAlertprocessTypesUpdated: false }, { type: GENERAR_ARCHIVO, msg: 'prueba' }))
            .toEqual({ msg: 'prueba', showAlertprocessTypesUpdated: true });
    })
    it('Debe ingresar type OCULTAR y modificar el alert de true a false', () => {
        expect(generarArchivo({ showAlertprocessTypesUpdated: true }, { type: OCULTAR }))
            .toEqual({ showAlertprocessTypesUpdated: false });
    })
})

describe('Test de validacionFallida', () => {
    it('No debe ingresar a ningun Type y retornar el mismo estado que le envio', () => {
        expect(validacionFallida('estado', 'action')).toEqual('estado');
    })
    it('Debe ingresar al type VALIDACION_FALLIDA y retornar estado error', () => {
        expect(validacionFallida('', { type: VALIDACION_FALLIDA, msg: 'test' }))
            .toEqual({ error: 'form-group has-error has-feedback', msg: 'test', icon: 'glyphicon glyphicon-remove form-control-feedback' });
    })
    it('Debe ingresar al type VALIDACION_EXITOSA y retornar el error succes', () => {
        expect(validacionFallida('', { type: VALIDACION_EXITOSA, dateSearch: 'prueba' }))
            .toEqual({
                error: 'form-group has-success has-feedback',
                msg: 'Ok',
                icon: 'glyphicon glyphicon-ok form-control-feedback',
                dateSearch: 'prueba'
            });
    })
})

describe('Test de ejecutarValorFondo', () => {
    it('No debe ingresar a ningun type y debe retornar el estado que le envio', () => {
        expect(ejecutarValorFondo('estado', 'action')).toEqual('estado');
    })
    it('Debe ingresar al type EJECUTAR_VALOR_FONDO y retornar nuevo estado', () => {
        expect(ejecutarValorFondo({ idProgressBar: 0 }, { type: EJECUTAR_VALOR_FONDO }))
            .toEqual({
                options: 'progress-bar progress-bar-success',
                optionOfProgress: 'progress-bar progress-bar-success',
                idProgressBar: 0,
                estado: 'Cargado',
                estadoOfProgress: 'Cargado',
            });
    })
    it('Debe ingresar al type MOSTRAR y cambiar estadoOfProgress: En Progreso...', () => {
        expect(ejecutarValorFondo(null, { type: MOSTRAR, idProgressBar: 0 }))
            .toEqual(
                {
                    options: 'progress-bar progress-bar-success',
                    idProgressBar: 0,
                    estado: 'Cargado',
                    estadoOfProgress: "En progreso...",
                    optionOfProgress: "progress-bar progress-bar-striped progress-bar-warning active",
                });
    })
    it('Debe ingresar al type SHOW_PROCESS_NAVS y cambiar listProcessNavs', () => {
        expect(ejecutarValorFondo(null, { type: SHOW_PROCESS_NAVS, payload: { data: ['test'] } }))
            .toEqual({
                listProcessNavs: ['test'],
                options: "progress-bar progress-bar-success",
                estado: "Cargado"
            });
    });
    it('Debe ingresar al type SHOW_TYPES_PROCESS y cambiar listProcessTypes', () => {
        expect(ejecutarValorFondo(null, {
            type: SHOW_TYPES_PROCESS,
            payload: [{ nombre: "PRECIO_MANUAL_ARCHIVO" }, { nombre: "test" }]
        }))
            .toEqual({
                listProcessTypes: [{ nombre: "test" }],
                options: "progress-bar",
                estado: "No Cargado"
            });
    });
})

describe('Test de showProcessNavs', () => {
    it('No debe ingresar a ningun type y debe retornar el estado que le envio', () => {
        expect(showProcessNavs('estado', 'action')).toEqual('estado');
    })
    it('Debe ingresar al type SHOW_PROCESS_NAVS y retornar el nuevo estado con list, searchDate y showAlertProgress', () => {
        expect(showProcessNavs('', { type: SHOW_PROCESS_NAVS, payload: { data: '', searchDate: '2018/10/15' } }))
            .toEqual({ list: '', searchDate: '2018/10/15', showAlertProgress: false });
    })
})

describe('Test de showProcessAladdin', () => {
    it('No debe ingresar a ningun type y debe retornar el estado enviado', () => {
        expect(showProcessAladdin('state', 'action')).toEqual('state');
    });
    it('Debe ingresar al type SHOW_PROCESS_ALADDIN', () => {
        expect(showProcessAladdin(
            '',
            { type: SHOW_PROCESS_ALADDIN, payload: { data: ['test'], date: 'prueba' } }
        )).toEqual({ list: ['test'], dateProcess: "prueba" });
    });
});

describe('Test de listarValorFondo', () => {
    it('No debe ingresar a ningun type y debe retornar el miso estado que ele envio', () => {
        expect(listarValorFondo('estado', 'action')).toEqual('estado');
    })
    it('debe ingresar al type LISTAR_VALOR_FONDO y retornar un nuevo estado con listValorFondo y alert modificado a true', () => {
        expect(listarValorFondo(
            { showAlertprocessTypesUpdated: false },
            { type: LISTAR_VALOR_FONDO, payload: [''] }
        )).toEqual({ listaValorFondo: [''], showAlertprocessTypesUpdated: true });
    })
    it('Debe ingresar al type OCULTAR y modificar alert de true a false', () => {
        expect(listarValorFondo({ showAlertprocessTypesUpdated: true }, { type: OCULTAR }))
            .toEqual({ showAlertprocessTypesUpdated: false })
    })
})

describe('Test de actualizarFechaProceso', () => {
    it('No debe ingresar a nungun type y retornar el estado enviado', () => {
        expect(actualizarFechaProceso('state', 'action')).toEqual('state');
    });
    it('Debe ingresar al type ACTUALIZAR_FECHA_PROCESO', () => {
        expect(actualizarFechaProceso(
            { showAlertprocessTypesUpdated: false },
            { type: ACTUALIZAR_FECHA_PROCESO }
        )).toEqual({ showAlertprocessTypesUpdated: true });
    });
    it('Debe ingresar al type OCULTAR', () => {
        expect(actualizarFechaProceso(
            { showAlertprocessTypesUpdated: true },
            { type: OCULTAR }
        )).toEqual({ showAlertprocessTypesUpdated: false });
    });
});

describe('Test de showProcessAlertProgress', () => {
    const initialStateAlert = { showAlertProgress: true };
    const endStateAlert = { showAlertProgress: false };
    it('No debe ingresar a ningun type y retornar el estado enviado', () => {
        expect(showProcessAlertProgress(initialStateAlert, { type: 'test' })).toEqual(initialStateAlert);
    });
    it('Debe ingresar al type SHOW_ALERT_PROGRESS', () => {
        expect(showProcessAlertProgress(
            initialStateAlert,
            { type: SHOW_ALERT_PROGRESS, showAlertProgress: 'prueba' }
        )).toEqual({ showAlertProgress: 'prueba' });
    });
    it('Debe ingresar al type SHOW_PROCESS_NAVS', () => {
        expect(showProcessAlertProgress(initialStateAlert, { type: SHOW_PROCESS_NAVS }))
            .toEqual(endStateAlert);
    });
    it('Debe ingresar al type SHOW_PROCESS_PRICES', () => {
        expect(showProcessAlertProgress(initialStateAlert, { type: SHOW_PROCESS_PRICES }))
            .toEqual(endStateAlert);
    });
    it('Debe ingresar al type SHOW_PROCESS_ALADDIN', () => {
        expect(showProcessAlertProgress(initialStateAlert, { type: SHOW_PROCESS_ALADDIN }))
            .toEqual(endStateAlert);
    });
    it('Debe ingresar al type REPLICATE_PROCESS_RVL', () => {
        expect(showProcessAlertProgress(initialStateAlert, { type: REPLICATE_PROCESS_RVL }))
            .toEqual(endStateAlert);
    });
    it('Debe ingresar al type OBTENER_LISTA_PROCESOS_FTP', () => {
        expect(showProcessAlertProgress(initialStateAlert, { type: OBTENER_LISTA_PROCESOS_FTP }))
            .toEqual(endStateAlert);
    });
    it('Debe ingresar al type REINTENTAR_CARGUE_PROCESO', () => {
        expect(showProcessAlertProgress(initialStateAlert, { type: REINTENTAR_CARGUE_PROCESO }))
            .toEqual(endStateAlert);
    });
    it('Debe ingresar al type REINTENTAR_PROCESO_FTP', () => {
        expect(showProcessAlertProgress(initialStateAlert, { type: REINTENTAR_PROCESO_FTP }))
            .toEqual(endStateAlert);
    });
    it('Debe ingresar al type GENERAR_ARCHIVO', () => {
        expect(showProcessAlertProgress(initialStateAlert, { type: GENERAR_ARCHIVO }))
            .toEqual(endStateAlert);
    });
    it('Debe ingresar al type OBTENER_FORMATO_REGULATORIO', () => {
        expect(showProcessAlertProgress(initialStateAlert, { type: OBTENER_FORMATO_REGULATORIO }))
            .toEqual(endStateAlert);
    });
    it('Debe ingresar al type OBTENER_SCORE', () => {
        expect(showProcessAlertProgress(initialStateAlert, { type: OBTENER_SCORE }))
            .toEqual(endStateAlert);
    });
    it('Debe ingresar al type LISTAR_TIPO_PROCESO_CURVA_FECHA', () => {
        expect(showProcessAlertProgress(initialStateAlert, { type: LISTAR_TIPO_PROCESO_CURVA_FECHA }))
            .toEqual(endStateAlert);
    });
    it('Debe ingresar al type REINTENTAR_CURVAS_FORWARD', () => {
        expect(showProcessAlertProgress(initialStateAlert, { type: REINTENTAR_CURVAS_FORWARD }))
            .toEqual(endStateAlert);
    });
    it('Debe ingresar al type LISTAR_PROCESOS_POR_FECHA_CVA_DVA', () => {
        expect(showProcessAlertProgress(initialStateAlert, { type: LISTAR_PROCESOS_POR_FECHA_CVA_DVA }))
            .toEqual(endStateAlert);
    });
    it('Debe ingresar al type REPLICATE_PROCESS_FUTUROS', () => {
        expect(showProcessAlertProgress(initialStateAlert, { type: REPLICATE_PROCESS_FUTUROS }))
            .toEqual(endStateAlert);
    });
    it('Debe ingresar al type DOWNLOAD_FTP', () => {
        expect(showProcessAlertProgress(initialStateAlert, { type: DOWNLOAD_FTP }))
            .toEqual(endStateAlert);
    });
    it('Debe ingresar al type LISTAR_SM_INVERSION', () => {
        expect(showProcessAlertProgress(initialStateAlert, { type: LISTAR_SM_INVERSION }))
            .toEqual(endStateAlert);
    });
    it('Debe ingresar al type ENVIO_ARCHIVO_GENERICO', () => {
        expect(showProcessAlertProgress(initialStateAlert, { type: ENVIO_ARCHIVO_GENERICO }))
            .toEqual(endStateAlert);
    });
    it('Debe ingresar al type LISTAR_ARCHIVOS_GENERICOS', () => {
        expect(showProcessAlertProgress(initialStateAlert, { type: LISTAR_ARCHIVOS_GENERICOS }))
            .toEqual(endStateAlert);
    });
    it('Debe ingresar al type FIND_SONS_ACCOUNTS_BANK_CUSIP', () => {
        expect(showProcessAlertProgress(initialStateAlert, { type: FIND_SONS_ACCOUNTS_BANK_CUSIP }))
            .toEqual(endStateAlert);
    });
});

describe('Test de tableDynamic', () => {
    it('No debe ingresar a ningun type y debe retornar el mismo estado enviado', () => {
        expect(tableDynamic('state', 'action')).toEqual('state');
    });
    it('Debe ingresar al type LISTAR_FACTOR_OPCION', () => {
        expect(tableDynamic('', { type: LISTAR_FACTOR_OPCION, payload: [''] }))
            .toEqual({ listFactors: [''], borrado: false });
    });
    it('Debe ingresar al type ADD_ITEM', () => {
        expect(tableDynamic({ listFactors: [] }, { type: ADD_ITEM, payload: { listSize: 0 } })).toEqual({
            listSize: 1,
            listFactors: [{
                id: expect.any(String),
                identificador: '',
                factor: ''
            }],
        });
    });
    it('Debe ingresar al type REMOVE_ITEM', () => {
        expect(tableDynamic(
            {
                listFactorsToDelete: [],
                listFactors: [{ id: 0 }, { id: 1 }, { id: 'test' }, { id: 'prueba' }],
                listSize: 4
            },
            { type: REMOVE_ITEM, idItem: 1 }
        )).toEqual({
            listFactors: [{ id: 0 }, { id: 'test' }, { id: 'prueba' }],
            listFactorsToDelete: [{ id: 1 }],
            listSize: 3
        });
    });
    it('Debe ingresar al type GUARDAR_FACTOR_OPCION', () => {
        expect(tableDynamic({}, { type: GUARDAR_FACTOR_OPCION, payload: [''] }))
            .toEqual({ listFactors: [''], showAlertprocessTypesUpdated: true });
    });
    it('Debe ingresar al type BORRAR_FACTOR_OPCION', () => {
        expect(tableDynamic({}, { type: BORRAR_FACTOR_OPCION }))
            .toEqual({ listFactorsToDelete: [] });
    });
    it('Debe ingresar al type BORRAR_FACTOR_OPCION_BY_ID', () => {
        expect(tableDynamic({}, { type: BORRAR_FACTOR_OPCION_BY_ID }))
            .toEqual({ borrado: true });
    });
    it('Debe ingresar al type OCULTAR', () => {
        expect(tableDynamic({}, { type: OCULTAR }))
            .toEqual({ showAlertprocessTypesUpdated: false });
    });
});

describe('Test de ejecutarValorFondo2', () => {
    it('No debe ingresar a ningun type y debe retornar el mismo estado enviado', () => {
        expect(ejecutarValorFondo2('state', 'action')).toEqual('state');
    });
    it('Debe ingresar al type EJECUTAR_VALOR_FONDO', () => {
        expect(ejecutarValorFondo2({ idProgressBar: 1 }, { type: EJECUTAR_VALOR_FONDO })).toEqual({
            estado: "Cargado",
            stateLabel: "CARGADO",
            options: "progress-bar progress-bar-success",
            optionOfProgress: 'progress-bar progress-bar-success',
            idProgressBar: 1
        });
    });
    it('Debe ingresar al type MOSTRAR', () => {
        expect(ejecutarValorFondo2({}, { type: MOSTRAR, idProgressBar: 0 })).toEqual({
            estado: "Cargado",
            stateLabel: "CARGANDO",
            optionOfProgress: "progress-bar progress-bar-striped progress-bar-warning active",
            options: 'progress-bar progress-bar-success',
            idProgressBar: 0
        });
    });
    it('Debe ingresar al type SHOW_PROCESS_NAVS_TO_EXECUTE', () => {
        expect(ejecutarValorFondo2({}, { type: SHOW_PROCESS_NAVS_TO_EXECUTE, payload: { data: [] } }))
            .toEqual({
                listProcessNavs: [],
                options: "progress-bar progress-bar-success",
                estado: "Cargado",
                idProgressBar: ''
            });
    });
    it('Debe ingresar al type OBTENER_VALOR_FONDO_VOLUNTARIO', () => {
        expect(ejecutarValorFondo2(
            {},
            { type: OBTENER_VALOR_FONDO_VOLUNTARIO, payload: { test: 'prueba' } }
        )).toEqual({
            voluntarias: {
                test: 'prueba',
                nombre: 'Valores de Fondo - Voluntarias',
                tipoProceso: 'VALOR_FONDO_VOLUNTARIO'
            }
        });
    });
    it('Debe ingresar al type OBTENER_VALOR_FONDO_CESANTIAS', () => {
        expect(ejecutarValorFondo2({}, { type: OBTENER_VALOR_FONDO_CESANTIAS, payload: {} })).toEqual({
            cesantias: {
                nombre: 'Valores de Fondo Mandatorios (OBL-CES-PPN)',
                tipoProceso: 'VALOR_FONDO_CESANTIAS'
            }
        });
    });
});

describe('Test de getIdTipoPrecio', () => {
    it('No debe ingresar a ningun type y devolver el mismo estado', () => {
        expect(getIdTipoPrecio('state', 'actions')).toEqual('state');
    });
    it('Debe ingresar al type ID_TIPO_PRECIO_MANUAL', () => {
        expect(getIdTipoPrecio({}, { type: ID_TIPO_PRECIO_MANUAL, idTipoPrecio: 'prueba' }))
            .toEqual({ idTipoPrecio: 'prueba' });
    });
});

describe('Test de login', () => {
    it('No debe ingresar a ningun type y retornar el estado enviado', () => {
        expect(login('state', 'action')).toEqual('state');
    });
    it('Debe ingresar al type UPDATE_STATE_LOCAL_STORAGE y no modificar nada', () => {
        expect(login({}, { type: UPDATE_STATE_LOCAL_STORAGE, localStorage: {} })).toEqual({});
    });
    it('Debe ingresar al type UPDATE_STATE_LOCAL_STORAGE', () => {
        expect(login(
            {},
            {
                type: UPDATE_STATE_LOCAL_STORAGE,
                localStorage: {
                    user: {
                        token: 'test',
                        fullName: 'test',
                        msgStatus: 'msg',
                        isAuthenticated: true,
                        user: 'name',
                        directives: ['prueba']
                    }
                }
            }
        )).toEqual({
            token: 'test',
            fullName: 'test',
            msgStatus: 'msg',
            isAuthenticated: true,
            user: 'name',
            directives: ['prueba']
        });
    });
    it('Debe ingresar al type LOCAL_STORAGE_CLEAN', () => {
        expect({}, { type: LOCAL_STORAGE_CLEAN }).toEqual({});
    });
});

describe('Test de tableDynamicParametroPortafolio', () => {
    it('No debe ingresar a ningun type y debe retornar el mismo estado que le envio', () => {
        expect(tableDynamicParametroPortafolio('estado', 'action')).toEqual('estado');
    })
    it('Debe ingresar al type LISTAR_PARAMETROS_PORTAFOLIO y modificar listaParametro', () => {
        expect(tableDynamicParametroPortafolio(null, { type: LISTAR_PARAMETROS_PORTAFOLIO, payload: ['test'] }))
            .toEqual({ listaParametro: ['test'] });
    });
    it('Debe ingresar al type ADD_ITEM_PARAMETRO_PORTAFOLIO y modificar listSize', () => {
        expect(tableDynamicParametroPortafolio({ listaParametro: [] }, { type: ADD_ITEM_PARAMETRO_PORTAFOLIO, payload: { listSize: 0 } })).toEqual({
            listaParametro: [{
                id: expect.any(String),
                codigoNegocio: '',
                codigoPortafolio: '',
                nombrePortafolio: '',
                codigoLineaNegocio: '',
                codigoLineaProducto: '',
                codigoAlternativa: '',
                codigoContabilidad: '',
                cuentaDepositoCentralValores: '',
                cuentaDeceval: ''

            }],
            listSize: 1
        });
    });
    it('Debe ingresar al type REMOVE_ITEM_PARAMETRO_PORTAFOLIO y modificar listaParametro y listSize', () => {
        expect(tableDynamicParametroPortafolio(
            { listaParametro: [{ id: 2 }, { id: 3 }, { id: 4 }], listSize: 3 },
            { type: REMOVE_ITEM_PARAMETRO_PORTAFOLIO, idItem: 3 }))
            .toEqual({ listaParametro: [{ id: 2 }, { id: 4 }], listSize: 2 });
    });
    it('Debe ingresar al type GUARDAR_PARAMETRO_PORTAFOLIO y retornar un nuevo estado con listParametros y alert modificado a true', () => {
        expect(tableDynamicParametroPortafolio('', { type: GUARDAR_PARAMETRO_PORTAFOLIO, payload: 'test' }))
            .toEqual({ listaParametro: 'test', showAlertprocessTypesUpdated: true });
    })
    it('Debe ingresar al type OCULTAR y cambiar alert de true a false', () => {
        expect(tableDynamicParametroPortafolio({ showAlertprocessTypesUpdated: true }, { type: OCULTAR }))
            .toEqual({ showAlertprocessTypesUpdated: false });
    })
})

describe('Test de tableDynamicPrecioManual', () => {
    it('No debe ingresar a ningun type y retornar el valor enviado', () => {
        expect(tableDynamicPrecioManual('state', 'actions')).toEqual('state');
    });
    it('Debe ingresar al type LISTAR_PRECIOS_MANUAL_POR_TIPO', () => {
        expect(tableDynamicPrecioManual(
            {},
            {
                type: LISTAR_PRECIOS_MANUAL_POR_TIPO,
                payload: [
                    {
                        identificador: 'test',
                        nombre: 'test',
                        precio: 'test',
                        id: 'test',
                        tipoPrecio: 'test',
                        proceso: 'test',
                        fechaAlta: 'test',
                        origenArchivo: 'test'
                    },
                    {
                        identificador: 'test',
                        nombre: 'test',
                        tipoPrecio: 'test',
                        proceso: 'test',
                        fechaAlta: 'test',
                        origenArchivo: 'test'
                    }
                ]
            }
        )).toEqual({
            listPrecioManual: [
                {
                    identificador: 'test',
                    nombre: 'test',
                    precio: 'test',
                    id: 'test',
                    tipoPrecio: 'test',
                    proceso: 'test',
                    fechaAlta: 'test',
                    origenArchivo: 'test'
                },
                {
                    identificador: 'test',
                    nombre: 'test',
                    precio: '',
                    id: 0,
                    tipoPrecio: 'test',
                    proceso: 'test',
                    fechaAlta: 'test',
                    origenArchivo: 'test'
                }
            ],
            showAlertprocessTypesUpdated: false,
            listPrecioManualOrigin: [
                {
                    identificador: 'test',
                    nombre: 'test',
                    precio: 'test',
                    id: 'test',
                    tipoPrecio: 'test',
                    proceso: 'test',
                    fechaAlta: 'test',
                    origenArchivo: 'test'
                },
                {
                    identificador: 'test',
                    nombre: 'test',
                    precio: '',
                    id: 0,
                    tipoPrecio: 'test',
                    proceso: 'test',
                    fechaAlta: 'test',
                    origenArchivo: 'test'
                }
            ]
        });
    });
    it('Debe ingresar al type ADD_ITEM_PRECIO_MANUAL', () => {
        expect(tableDynamicPrecioManual(
            { listPrecioManual: [] },
            { type: ADD_ITEM_PRECIO_MANUAL, payload: { listSize: 0 } }
        )).toEqual({
            listPrecioManual: [{
                id: expect.any(String),
                identificador: '',
                nombre: '',
                precio: '',
                tipoPrecio: { id: '' },
                proceso: { id: '' },
                origenArchivo: false
            }],
            listSize: 1
        });
    });
    it('Debe ingresar al type REMOVE_ITEM_PRECIO_MANUAL', () => {
        expect(tableDynamicPrecioManual(
            { listPrecioManual: [{ id: 12 }, { id: 123 }], listSize: 2 },
            { type: REMOVE_ITEM_PRECIO_MANUAL, idItem: 123 }
        )).toEqual({
            listPrecioManual: [{ id: 12 }],
            showAlertprocessTypesUpdated: false,
            listSize: 1
        });
    });
    it('Debe ingresar al type GUARDAR_PRECIOS_MANUAL', () => {
        expect(tableDynamicPrecioManual({}, { type: GUARDAR_PRECIOS_MANUAL, payload: [''] }))
            .toEqual({ listPrecioManual: [''], showAlertprocessTypesUpdated: true });
    });
    it('Debe ingresar al type OCULTAR', () => {
        expect(tableDynamicPrecioManual({}, { type: OCULTAR }))
            .toEqual({ showAlertprocessTypesUpdated: false });
    });
});

describe('test de tableDynamicPrecioManualDetalle', () => {
    it('No debe ingresar a ningun type y retornar el valor enviado', () => {
        expect(tableDynamicPrecioManualDetalle('state', 'actions')).toEqual('state');
    });
    it('Debe ingresar al type FIND_DETAILS_PRECIO_MANUAL_FCP', () => {
        expect(tableDynamicPrecioManualDetalle({}, {
            type: FIND_DETAILS_PRECIO_MANUAL_FCP,
            payload:
            {
                data: 'test',
                precioManualFCP: 'test',
                fechaProceso: 'test'
            }
        })).toEqual({
            listPmdFCP: 'test',
            precioManualFCP: 'test',
            fechaProceso: 'test'
        });
    });
    it('Debe ingresar al type ADD_ITEM_PRECIO_MANUAL_DETALLE', () => {
        expect(tableDynamicPrecioManualDetalle(
            { listPmdFCP: [], precioManualFCP: { identificador: 'test' }, fechaProceso: '' },
            {
                type: ADD_ITEM_PRECIO_MANUAL_DETALLE,
                payload:
                {
                    listSize: 0
                }
            })).toEqual({
                fechaProceso: '',
                listPmdFCP: [{
                    fechaAlta: '',
                    id: expect.any(String),
                    identificador: 'test',
                    isin: ''
                }],
                listSize: 1,
                precioManualFCP: {
                    identificador: 'test'
                }
            });
    });
    it('Debe ingresar al type REMOVE_ITEM_PRECIO_MANUAL_DETALLE', () => {
        expect(tableDynamicPrecioManualDetalle(
            { listPmdFCP: [{ id: 1 }, { id: 8 }], listSize: 2 },
            {
                type: REMOVE_ITEM_PRECIO_MANUAL_DETALLE,
                idItem: 1
            }
        )).toEqual({ listPmdFCP: [{ id: 8 }], listSize: 1 });
    });
    it('Debe ingresar al type GUARDAR_PRECIO_MANUAL_DETALLE', () => {
        expect(tableDynamicPrecioManualDetalle({},
            {
                type: GUARDAR_PRECIO_MANUAL_DETALLE
            }
        )).toEqual({ showAlertprocessTypesUpdated: true });
    });
    it('Debe ingresar al type OCULTAR', () => {
        expect(tableDynamicPrecioManualDetalle({},
            {
                type: OCULTAR
            }
        )).toEqual({ showAlertprocessTypesUpdated: false });
    });
});

describe('test de getListaControl', () => {
    it('No debe ingresar a ningun type y retornar el valor enviado', () => {
        expect(getListaControl('state', 'actions'))
            .toEqual('state');
    });
    it('Debe ingresar al type GET_LISTA_CONTROL', () => {
        expect(getListaControl({}, {
            type: GET_LISTA_CONTROL,
            payload:
            {
                data: 'test'
            }
        })).toEqual({
            listControl: 'test'
        });
    });
    it('Debe ingresar al type ADD_ITEM_LISTA_CONTROL', () => {
        expect(getListaControl(
            {
                listControl: [
                    {
                        codigo: '',
                        fechaAlta: '',
                        id: '',
                        tipoProceso: ''
                    }]
            },
            {
                type: ADD_ITEM_LISTA_CONTROL,
                payload:
                {
                    listSize: 0
                }
            }))
            .toEqual({
                listControl:
                    [{
                        id: expect.any(String),
                        codigo: '',
                        fechaAlta: '',
                        tipoProceso: ''

                    },
                    {
                        codigo: '',
                        fechaAlta: '',
                        id: expect.any(String),
                        tipoProceso: ''
                    }],
                listSize: 1
            });
    });
    it('Debre indresar al type GUARDAR_LISTA_CONTROL', () => {
        expect(getListaControl({},
            {
                type: GUARDAR_LISTA_CONTROL
            })).toEqual({ showAlertprocessTypesUpdated: true });
    });
    it('Debe ingresar al type ELIMINAR_ITEM_LISTA_CONTROL', () => {
        expect(getListaControl(
            { listControl: [{ id: 1 }, { id: 8 }], listSize: 2 },
            { type: ELIMINAR_ITEM_LISTA_CONTROL, idItem: 8 }
        )).toEqual({ listControl: [{ id: 1 }], listSize: 1 });
    });
    it('Debe ingresar al type ID_PROCESO', () => {
        expect(getListaControl({},
            {
                type: ID_PROCESO,
                idProceso: 'state'
            })).toEqual({ idProceso: 'state' });
    });
    it('Dbe ingresar al type OCULTAR', () => {
        expect(getListaControl({}, {
            type: OCULTAR
        })).toEqual({ showAlertprocessTypesUpdated: false });
    });
    it('Debe ingresar al type SHOW_TYPES_PROCESS_PRICE', () => {
        expect(getListaControl({}, {
            type: SHOW_TYPES_PROCESS_PRICE,
            payload: [
                { nombre: 'PRECIOS_MANUAL' },
                { nombre: 'MONEDAS' },
                { nombre: 'PRECIO_MANUAL_ARCHIVO' },
                { nombre: 'test' }
            ],
        })).toEqual({
            listControl: [],
            listTypePrice: [
                undefined,
                undefined,
                undefined,
                { nombre: 'test' }
            ]
        });
    });
});

describe('test de ejecutarFormatoRegulatorio', () => {
    it('No debe ingresar aningun type y retornar el valor enviado ', () => {
        expect(ejecutarFormatoRegulatorio('state', 'actions'))
            .toEqual('state');
    });
    it('debe ingresar al type OBTENER_CRG_POSICIONES', () => {
        expect(ejecutarFormatoRegulatorio({},
            {
                type: OBTENER_CRG_POSICIONES,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgPosiciones: {
                test: 'test',
                title: 'Cargue de Posiciones',
                task: 'CRG_POSICIONES'
            }
        });
    });
    it('Debe ingresar al type OBTENER_F_351', () => {
        expect(ejecutarFormatoRegulatorio({},
            {
                type: OBTENER_F_351,
                payload: {
                    test: 'test'
                }
            })).toEqual({
                f351: {
                    test: 'test',
                    title: 'Formato 351',
                    task: 'F_351'
                }
            });
    });
    it('Debe ingresar al type OBTENER_F_471', () => {
        expect(ejecutarFormatoRegulatorio({},
            {
                type: OBTENER_F_471,
                payload: {
                    test: 'test'
                }
            })).toEqual({
                f471: {
                    test: 'test',
                    title: 'Formato 471',
                    task: 'F_471'
                }
            });
    });
    it('Debe ingresar al type OBTENER_F_468', () => {
        expect(ejecutarFormatoRegulatorio({},
            {
                type: OBTENER_F_468,
                payload: {
                    test: 'test'
                }
            })).toEqual({
                f468: {
                    test: 'test',
                    title: 'Formato 468',
                    task: 'F_468'
                }
            });
    });
    it('Debe ingresar al type OBTENER_F_397', () => {
        expect(ejecutarFormatoRegulatorio({},
            {
                type: OBTENER_F_397,
                payload: {
                    test: 'test'
                }
            })).toEqual({
                f397: {
                    test: 'test',
                    title: 'Formato 397',
                    task: 'F_397'
                }
            });
    });
    it('Debe ingresar el type OBTENER_F_FUTURO', () => {
        expect(ejecutarFormatoRegulatorio({},
            {
                type: OBTENER_F_FUTURO,
                payload: {
                    test: 'test'
                }
            })).toEqual({
                f_futuros: {
                    test: 'test',
                    title: 'Formato Futuros (XBRL)',
                    task: 'F_FUTURO'
                }
            });
    });
    it('Debe ingresar al type OBTENER_F_472', () => {
        expect(ejecutarFormatoRegulatorio({},
            {
                type: OBTENER_F_472,
                payload: {
                    test: 'test'
                }
            })).toEqual({
                f472: {
                    test: 'test',
                    title: 'Formato 472',
                    task: 'F_472'
                }
            });
    });
    it('Debe ingresar al type EJECUTAR_FORMATO_REGULATORIO', () => {
        expect(ejecutarFormatoRegulatorio({},
            {
                type: EJECUTAR_FORMATO_REGULATORIO,
                payload:
                {
                    cosa: {}
                }
            })).toEqual({
                formato: {
                    cosa: {}
                }
            });
    });
});
describe('test de ejecutarScore', () => {
    it('No debe ingresar aningun type y retornar el valor enviado', () => {
        expect(ejecutarScore('state', 'actions'))
            .toEqual('state');
    });
    it('Debe ingresar al type OBTENER_CRG_OPER_TRD_AJST', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_CRG_OPER_TRD_AJST,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgOperTrdAjs: {
                test: 'test',
                title: 'Cargue de Operaciones - [AJUS]',
            }
        });
    });
    it('Debe ingresar al type OBTENER_CRG_OPERACIONES_TRD', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_CRG_OPERACIONES_TRD,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgOperacionesTrd: {
                test: 'test',
                title: 'Cargue de Operaciones - [TRADES]',
            }
        });
    });
    it('debe ingresar al type OBTENER_CRG_OPERACIONES_REP', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_CRG_OPERACIONES_REP,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgOperacionesRep: {
                test: 'test',
                title: 'Cargue de Operaciones - [REP]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_CRG_OPERACIONES_COLL', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_CRG_OPERACIONES_COLL,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgOperacionesColl: {
                test: 'test',
                title: 'Cargue de Operaciones - [GAR_REP]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_CRG_OPERACIONES_CMAT', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_CRG_OPERACIONES_CMAT,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgOperacionesCmat: {
                test: 'test',
                title: 'Cargue de Operaciones - [VENCIM_REP]'
            }
        });
    });
    it('Debe ingresar el type OBTENER_CRG_AJT_OPE_CMAT', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_CRG_AJT_OPE_CMAT,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgAjtOperacionesCmat: {
                test: 'test',
                title: 'Cargue de Operaciones - [AJT_CMAT]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_CRG_OP_AJS_SPOT', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_CRG_OP_AJS_SPOT,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgOpAjsSpot: {
                test: 'test',
                title: 'Cargue de Operaciones - [AJT_SPOT]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_CRG_VEN_OPER', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_CRG_VEN_OPER,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgVencimientoOp: {
                test: 'test',
                title: 'Cargue de Vencimientos - [TRADES]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_CRG_VEN_CASHWF', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_CRG_VEN_CASHWF,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgVencimientoCashWF: {
                test: 'test',
                title: 'Cargue de Vencimientos - [CASH WF]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_CRG_VEN_WEEK', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_CRG_VEN_WEEK,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgVencimientoWeek: {
                test: 'test',
                title: 'Cargue de Vencimientos - [WEEKEND]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_CRG_VEN_PAY_FAILS', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_CRG_VEN_PAY_FAILS,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgVencimientoPayfail: {
                test: 'test',
                title: 'Cargue de Vencimientos - [FAILS]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_CRG_VEN_EVENTOS', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_CRG_VEN_EVENTOS,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgVencimEventos: {
                test: 'test',
                title: 'Cargue de Vencimientos - [AJUSTES_EVENTOS]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_CRG_FIXING', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_CRG_FIXING,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgFixing: {
                test: 'test',
                title: 'Cargue de Vencimientos - [FIXING]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_AJS_VENCIM', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_AJS_VENCIM,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgAjsVencim: {
                test: 'test',
                title: 'Cargue de Vencimientos - [AJS_VENCIM]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_VAL_OPCT', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_VAL_OPCT,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            valOpct: {
                test: 'test',
                title: 'Valoración - [OPCT]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_VAL_OPCT_TTVRV', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_VAL_OPCT_TTVRV,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            valOpctTtvrv: {
                test: 'test',
                title: 'Valoración - [OPCT TTVRV]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_VAL_OPCT_TTVRF', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_VAL_OPCT_TTVRF,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            valOpctTtvrf: {
                test: 'test',
                title: 'Valoración - [OPCT TTVRF]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_VAL_POS', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_VAL_POS,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            valPos: {
                test: 'test',
                title: 'Valoración - [POS]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_AJUSTE_FIX_VALO', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_AJUSTE_FIX_VALO,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            ajusFixValo: {
                test: 'test',
                title: 'Valoración - [AJUS_FIX_VALO]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_VAL_POS_GAR_REP', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_VAL_POS_GAR_REP,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            valPosRep: {
                test: 'test',
                title: 'Valoración - [GAR_REP]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_CRG_VAL_FUT', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_CRG_VAL_FUT,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgValFut: {
                test: 'test',
                title: 'Valoración - [FUT]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_CRG_VAL_FUT_PAGO', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_CRG_VAL_FUT_PAGO,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgValFutPago: {
                test: 'test',
                title: 'Valoración - [FUT-PAGO]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_OPC_VALO_FUT', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_OPC_VALO_FUT,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            valOpcValoFut: {
                test: 'test',
                title: 'Valoración - [OPT]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_CRG_VAL_FX_SWAP', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_CRG_VAL_FX_SWAP,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgValFxSwap: {
                test: 'test',
                title: 'Valoración - [FW_SW]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_CRG_VEN_SWAPPAY', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_CRG_VEN_SWAPPAY,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgValVencimSwapPay: {
                test: 'test',
                title: 'Valoración - [VENCIM_SW_PAY]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_EVENTO_OPER', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_EVENTO_OPER,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            eventosOps: {
                test: 'test',
                title: 'Eventos - [OPERACIONES]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_EVENTO_VENCIM', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_EVENTO_VENCIM,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            eventosVencim: {
                test: 'test',
                title: 'Eventos - [VENCIMIENTOS]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_EVENTO_OPCT', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_EVENTO_OPCT,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            eventosOpct: {
                test: 'test',
                title: 'Eventos - [OPCT]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_EVENTO_FX', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_EVENTO_FX,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            eventosFx: {
                test: 'test',
                title: 'Eventos - [FX]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_EVENTO_FUT', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_EVENTO_FUT,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            eventosFut: {
                test: 'test',
                title: 'Eventos - [FUTUROS]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_CRG_VEN_FIXING', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_CRG_VEN_FIXING,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgVenFixing: {
                test: 'test',
                title: 'Cargue de Vencimientos - [FX_FIXING]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_SPOT_FIXING_VENCIM', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_SPOT_FIXING_VENCIM,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgSpotFixingVencim: {
                test: 'test',
                title: 'Cargue de Vencimientos - [SPOT_FIXING_VENCIM]'
            }
        });
    });
    it('Debe ingresar al type OBTENER_CRG_VEN_MAT', () => {
        expect(ejecutarScore({},
            {
                type: OBTENER_CRG_VEN_MAT,
                payload: {
                    test: 'test'
                }
            }
        )).toEqual({
            crgVenMat: {
                test: 'test',
                title: 'Cargue de Vencimientos - [CRG_VEN_MAT]'
            }
        });
    });
});

describe('test de obtenerListaProcesoCurvas', () => {
    it('No debe ingresar a ningun type y retornar el valor enviado', () => {
        expect(getListaControl('state', 'actions'))
            .toEqual('state');
    });
    it('Debe ingresar al type LISTAR_TIPO_PROCESO_CURVA', () => {
        expect(obtenerListaProcesoCurvas({
            type: LISTAR_TIPO_PROCESO_CURVA,
            payload: {
                
            }
        })).toEqual();
    });
});

