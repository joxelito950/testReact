import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import {
    showProcessTypes, SHOW_TYPES_PROCESS, darBajaPreciosManual, checkId, CHECKLIST, checkIdNavs, CHECKLIST_NAVS,
    findDetails, FIND_DETAILS, obtenerFechaProceso, FECHA_PROCESO, obtenerListaPrecioManual,
    LISTAR_PRECIOS_MANUAL, actualizarTiposProcesos, UPDATE_PROCESS_TYPE, ocultar, OCULTAR,
    obtenerListaParametrosPortafolio, LISTAR_PARAMETROS_PORTAFOLIO, validacionFallida, VALIDACION_FALLIDA,
    validacionExitosa, VALIDACION_EXITOSA, guardarParametroPortafolio, GUARDAR_PARAMETRO_PORTAFOLIO,
    ejecutarValorFondo, EJECUTAR_VALOR_FONDO, showProcessNavs, SHOW_PROCESS_NAVS, listarValorFondo,
    LISTAR_VALOR_FONDO, listaPrecioManualProcess
} from '../actions';

var mock = new MockAdapter(Axios);

describe('Test para showProcessTypes', () => {
    it('Debe despachar con el type SHOW_TYPES_PROCESS y con la respuesta del axios', () => {
        mock.onPost('/ControlSpiritServices/rest/app/tipoProceso/getAllTipoProceso').reply(200, 'respuesta');
        const funcionShowProcessTypes = showProcessTypes('');
        funcionShowProcessTypes(evaluarShowProcesType);
    })
    const evaluarShowProcesType = async (parametro) => {
        expect(parametro.type).toEqual(SHOW_TYPES_PROCESS);
        expect(parametro.payload).toEqual('respuesta');
    }
})

describe('Test para darBajaPreciosManual', () => {
    mock.onPost('service').reply(200, { data: 'respuesta' });
    it('Debe despachar con el type REMOVE_ITEM_PRECIO', () => {
        const funcionGenerarArchivo = darBajaPreciosManual([{ id: 1 }, { id: 'prueba' }]);
        const evaluarGuardarArchivo = async (parametro) => {
            expect(parametro).toBeDefined()
        }
        funcionGenerarArchivo(evaluarGuardarArchivo);
    })
})

describe('Test para checkId', () => {
    it('Debe despachar con el type CHECKLIST y el idProcess enviado', () => {
        const funcionChekId = checkId('2');
        const evaluarChekId = async (parametro) => {
            expect(parametro.type).toEqual(CHECKLIST);
            expect(parametro.idProcess).toEqual('2');
        }
        funcionChekId(evaluarChekId);
    })
})

describe('Test para checkIdNavs', () => {
    it('Debe despachar con el type CHECKLIST_NAVS y el idProcess enviado', () => {
        const funcionCheckIdNavs = checkIdNavs('3');
        const evaluarCheckIdNavs = async (parametro) => {
            expect(parametro.type).toEqual(CHECKLIST_NAVS);
            expect(parametro.idProcess).toEqual('3');
        }
        funcionCheckIdNavs(evaluarCheckIdNavs);
    })
})

describe('Test para findDetails', () => {
    it('Debe despachar con el type FIND_DETAILS y con la data de la respuuesta del axios', () => {
        mock.onPost('/ControlSpiritServices/rest/app/prices/service').reply(200, 'respuesta');
        const funcionFindDetails = findDetails('id', 'service');
        const evaluarFindDetail = async (parametro) => {
            expect(parametro.type).toEqual(FIND_DETAILS);
            expect(parametro.payload).toEqual('respuesta');
        }
        funcionFindDetails(evaluarFindDetail);
    })
})

describe('Test para listaPrecioManualProcess', () => {
    const fechaProceso = 20082020;
    it('Debe no hacer nada con los valores enviados', () => {
        var entidad1 = { id: 1 };
        var listPrecioOriginal = [{ id: 'test' }];
        var precioManual = {};

        listaPrecioManualProcess(entidad1, listPrecioOriginal, precioManual, fechaProceso);

        expect(entidad1).toEqual({ id: 1 });
        expect(listPrecioOriginal).toEqual([{ id: 'test' }])
        expect(precioManual).toEqual({})
    });
    it('Debe agregar a preciomanula.listaPrecioManualNuevo el objeto entidad', () => {
        var entidad2 = { id: 'prueba' };
        var listPrecioOriginal = [{ id: 'test' }];
        var precioManual = { listaPrecioManualNuevo: [] };

        listaPrecioManualProcess(entidad2, listPrecioOriginal, precioManual, fechaProceso);

        expect(entidad2).toEqual({});
        expect(listPrecioOriginal).toEqual([{ id: 'test' }])
        expect(precioManual).toEqual({ listaPrecioManualNuevo: [entidad2] })
    });
    it('Debe agregar a precioManual.listaPrecioManualNuevo el objeto entidad', () => {
        var entidad3 = { id: 1, nombre: '1', precio: 1 };
        var listPrecioOriginal = [{ id: 1, nombre: 'prueba', precio: 321 }, { id: 'test', nombre: 'test', precio: 'test' }];
        var precioManual = { listaPrecioManualNuevo: [], listaPrecioManualEliminado: [], listaPrecioManualActualizado: [] };

        listaPrecioManualProcess(entidad3, listPrecioOriginal, precioManual, fechaProceso);

        expect(entidad3).toEqual({ id: 1, nombre: '1', precio: 1 });
        expect(listPrecioOriginal).toEqual([{ id: 1, nombre: 'prueba', precio: 321 }, { id: 'test', nombre: 'test', precio: 'test' }])
        expect(precioManual.listaPrecioManualNuevo).toEqual([]);
        expect(precioManual.listaPrecioManualActualizado).toEqual([{ id: 1, nombre: '1', precio: 1 }]);
        expect(precioManual.listaPrecioManualEliminado).toEqual([{ id: 1, nombre: 'prueba', precio: 321 }]);
    });
})

describe('Test para obtenerFechaProceso', () => {
    it('Debe despachar con el type FECHA_PROCESO y con la fecha enviada', () => {
        mock.onPost('/ControlSpiritServices/rest/app/parametros/parametro').reply(200, 'year/month/day');
        const funcionObtenerFechaProceso = obtenerFechaProceso();
        const evaluarObtenerFechaProceso = async (parametro) => {
            expect(parametro.type).toEqual(FECHA_PROCESO);
            expect(parametro.payload).toEqual('year/month/day');
        }
        funcionObtenerFechaProceso(evaluarObtenerFechaProceso);
    })
})


describe('Test para obtenerListaPrecioManual', () => {
    it('Debe despachar con el type LISTAR_PRECIOS_MANUAL y con la respuesta del axios', () => {
        mock.onPost('/ControlSpiritServices/rest/app/prices/listar/preciosManual').reply(200, { data: 'respuesta' });
        const funcionObtenerListaPrecioManual = obtenerListaPrecioManual();
        const evaluarObtenerListaPrecioManual = async (parametro) => {
            expect(parametro.type).toEqual(LISTAR_PRECIOS_MANUAL);
            expect(parametro.payload).toEqual('respuesta');
        }
        funcionObtenerListaPrecioManual(evaluarObtenerListaPrecioManual);
    })
})

describe('Test para actualizarTiposProcesos', () => {
    it('Debe despachar con el type UPDATE_PROCESS_TYPE y la respuesta del axios', () => {
        mock.onPost('/ControlSpiritServices/rest/app/tipoProceso/actualizarVariacion').reply(200, 'respuesta');
        const funcionActualizarTiposProcesosOk = actualizarTiposProcesos([]);
        const evaluarActualizarTiposProvesosOk = async (parametro) => {
            expect(parametro.type).toEqual(UPDATE_PROCESS_TYPE);
        }
        funcionActualizarTiposProcesosOk(evaluarActualizarTiposProvesosOk);
    })
    it('Debe despachar con el type UPDATE_PROCESS_TYPE y el error del axios', () => {
        mock.onPost('/ControlSpiritServices/rest/app/tipoProceso/actualizarVariacion').reply(400);
        const funcionActualizarTiposProcesosFalla = actualizarTiposProcesos([]);
        const evaluarActualizarTiposProvesosFalla = async (parametro) => {
            expect(parametro.type).toEqual(UPDATE_PROCESS_TYPE);
        }
        funcionActualizarTiposProcesosFalla(evaluarActualizarTiposProvesosFalla);
    })
})

describe('Test para ocultar', () => {
    it('Debe despachar con el type OCULTAR y con el showAlertprocess false', () => {
        const funcionOcultar = ocultar();
        const evaluarOcultar = async (parametro) => {
            expect(parametro.type).toEqual(OCULTAR);
            expect(parametro.showAlertprocessTypesUpdated).toBeFalsy();
        }
        funcionOcultar(evaluarOcultar);
    })
})

describe('Test para obtenerListaParametrosPortafolio', () => {
    it('Debe despachar con el type LISTAR_PARAMETROS_PORTAFOLIO y ', () => {
        mock.onPost('/ControlSpiritServices/rest/app/parametros/listar/portafolio').reply(200, 'respuesta');
        const funcionObtenerListaParametrosPortafolioOk = obtenerListaParametrosPortafolio();
        const evaluarObtenerListaParametrosPortafolioOk = async (parametro) => {
            expect(parametro.type).toEqual(LISTAR_PARAMETROS_PORTAFOLIO);
        }
        funcionObtenerListaParametrosPortafolioOk(evaluarObtenerListaParametrosPortafolioOk);
    })
    it('Debe despachar con el type LISTAR_PARAMETROS_PORTAFOLIO y ', () => {
        mock.onPost('/ControlSpiritServices/rest/app/parametros/listar/portafolio').reply(400);
        const funcionObtenerListaParametrosPortafolioFalla = obtenerListaParametrosPortafolio();
        const evaluarObtenerListaParametrosPortafolioFalla = async (parametro) => {
            expect(parametro.type).toEqual(LISTAR_PARAMETROS_PORTAFOLIO);
        }
        funcionObtenerListaParametrosPortafolioFalla(evaluarObtenerListaParametrosPortafolioFalla);
    })
})

describe('Test para validacionFallida', () => {
    it('Debe despachar con el type VALIDACION_FALLIDA y el msg enviado', () => {
        const funcionValidacionFallida = validacionFallida('fallo');
        const evaluarValidacionFallida = async (parametro) => {
            expect(parametro.type).toEqual(VALIDACION_FALLIDA);
            expect(parametro.msg).toEqual('fallo');
        }
        funcionValidacionFallida(evaluarValidacionFallida);
    })
})

describe('Test para validacionExitosa', () => {
    it('Debe despachar con el type VALIDACION_EXITOSA', () => {
        const funcionValidacionExitosa = validacionExitosa();
        const evaluarValidacionExitosa = async (parametro) => {
            expect(parametro.type).toEqual(VALIDACION_EXITOSA);
        }
        funcionValidacionExitosa(evaluarValidacionExitosa);
    })
})

describe('Test para guardarParametroPortafolio', () => {
    it('Debe despachar con el type GUARDAR_PARAMETRO_PORTAFOLIO y la respuesta del axios', () => {
        mock.onPost('/ControlSpiritServices/rest/app/parametros/guardar/portafolio').reply(200, 'respuesta');
        const funcionGuardarParametroPortafolio = guardarParametroPortafolio(
            [
                { id: '2', codigoAlternativa: 'listaEntidad' },
                { id: 'e', codigoAlternativa: 'listaEntidad' },
                { id: 3, codigoAlternativa: '' }
            ], {
                listaPortafolioNuevo: [],
                listaPortafolioEliminado: [],
            }

        );
        const evaluarTypeGuardarParametroPortafolio = async (parametro) => {
            if (parametro.type !== undefined) {
                expect(parametro.type).toEqual(GUARDAR_PARAMETRO_PORTAFOLIO);
                expect(parametro.payload).toEqual('respuesta');
            }
        }
        funcionGuardarParametroPortafolio(evaluarTypeGuardarParametroPortafolio);
    })
})

describe('Test para ejecutarValorFondo', () => {
    it('Debe despachar con el type EJECUTAR_VALOR_FONDO y la respuesta del axios', () => {
        mock.onPost('/batch-processor/rest/portafolios/cargar').reply(200, 'respuesta');
        const funcionEjecutarValorFondo = ejecutarValorFondo('value');
        const evaluarEjecutarValorFondo = async (parametro) => {
            expect(parametro.type).toEqual(EJECUTAR_VALOR_FONDO);
            expect(parametro.payload).toEqual('respuesta');
        }
        funcionEjecutarValorFondo(evaluarEjecutarValorFondo);
    })
})

describe('Test para showProcessNavs', () => {
    it('Debe despachar con el type SHOW_PROCESS_NAVS y la respuesta del axios con el date enviado', () => {
        mock.onPost('/ControlSpiritServices/rest/app/procesos/listarNavs').reply(200, []);
        const funcionShowProcessNavs = showProcessNavs('year/month/day');
        const evaluarShowProcessNavs = async (parametro) => {
            expect(parametro.type).toEqual(SHOW_PROCESS_NAVS);
            expect(parametro.payload.data).toEqual([]);
            expect(parametro.payload.date).toEqual('year/month/day');
        }
        funcionShowProcessNavs(evaluarShowProcessNavs);
    })
})

describe('Test para listarValorFondo', () => {
    it('Debe despachar con el type LISTAR_VALOR_FONDO y la respuesta del axios', () => {
        mock.onPost('/ControlSpiritServices/rest/app/navs/detalle').reply(200, 'respuesta');
        const funcionListarValorFondo = listarValorFondo('value');
        const evaluarListarValorFondo = async (parametro) => {
            expect(parametro.type).toEqual(LISTAR_VALOR_FONDO);
            expect(parametro.payload).toEqual('respuesta');
        }
        funcionListarValorFondo(evaluarListarValorFondo);
    })
})