import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { configure, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import ConnectedControlPrices from '../../components/controlPrices';
import { checkId } from '../../actions';

const mockStore = configureStore([thunk]);

configure({ adapter: new Adapter() });

describe('Test para controlPrices', () => {
    it('Debe renderizar el componente con datos en showProcess tipoProceso RENTA_Variable_local y sin estado', () => {
        const store = mockStore({
            showProcess: {
                list: [{ id: 1, origen: '', estado: '', tipoProceso: { descripcion: '', nombre: 'RENTA_VARIABLE_LOCAL' } }],
                dateProcess: ""
            },
            showProcessTypes: { list: [] },
            showProcessPrices: { list: [], dateProcess: '' },
            showProcessNavs: {
                list: [],
                dateProcess: ""
            },
            procesosNavs: {
                list: [],
                size: 0,
                completed: false
            },
            procesos: {
                list: [],
                size: 0,
                completed: false
            },
            generarArchivo: {
                showAlertprocessTypesUpdated: false
            },
            listarValorFondo: {
                listaValorFondo: [],
                showAlertprocessTypesUpdated: false
            },
            findDetails: {
                listDetails: []
            },
            obtenerFechaProceso: { fechaProceso: '' },
            validacionFallida: { error: '', msg: '' },
            showProcessAlertProgress: { showAlertProgress: '' }
        });
        render(
            <Provider store={store}>
                <ConnectedControlPrices params={{ groupName: 'name' }} />
            </Provider>
        );
    })
    it('Debe renderizar el componente con datos en showProcess tipoProceso RENTA_VARIABLE_INTERNACIONAL y con estado INICIAL', () => {
        const store = mockStore({
            showProcess: {
                list: [{ id: 1, origen: '', estado: 'INICIAL', tipoProceso: { descripcion: '', nombre: 'RENTA_VARIABLE_INTERNACIONAL' } }],
                dateProcess: ""
            },
            showProcessTypes: {
                list: []
            },
            showProcessPrices: { list: [], dateProcess: '' },
            showProcessNavs: {
                list: [],
                dateProcess: ""
            },
            procesosNavs: {
                list: [],
                size: 0,
                completed: false
            },
            procesos: {
                list: [],
                size: 0,
                completed: false
            },
            generarArchivo: {
                showAlertprocessTypesUpdated: false
            },
            listarValorFondo: {
                listaValorFondo: [],
                showAlertprocessTypesUpdated: false
            },
            findDetails: {
                listDetails: []
            },
            obtenerFechaProceso: { fechaProceso: '' },
            validacionFallida: { error: '', msg: '' },
            showProcessAlertProgress: { showAlertProgress: '' }
        });
        render(
            <Provider store={store}>
                <ConnectedControlPrices params={{ groupName: 'name' }} />
            </Provider>
        );
    })
    it('Debe renderizar el componente con datos en showProcess tipoProceso RENTA_FIJA_INTERNACIONAL y con estado INICIAL', () => {
        const store = mockStore({
            showProcess: {
                list: [{ id: 1, origen: '', estado: 'INICIAL', tipoProceso: { descripcion: '', nombre: 'RENTA_FIJA_INTERNACIONAL' } }],
                dateProcess: ""
            },
            showProcessPrices: { list: [], dateProcess: '' },
            showProcessTypes: {
                list: []
            },
            showProcessNavs: {
                list: [],
                dateProcess: ""
            },
            procesosNavs: {
                list: [],
                size: 0,
                completed: false
            },
            procesos: {
                list: [],
                size: 0,
                completed: false
            },
            generarArchivo: {
                showAlertprocessTypesUpdated: false
            },
            listarValorFondo: {
                listaValorFondo: [],
                showAlertprocessTypesUpdated: false
            },
            findDetails: {
                listDetails: []
            },
            obtenerFechaProceso: { fechaProceso: '' },
            validacionFallida: { error: '', msg: '' },
            showProcessAlertProgress: { showAlertProgress: '' }
        });
        render(
            <Provider store={store}>
                <ConnectedControlPrices params={{ groupName: 'name' }} />
            </Provider>
        );
    })
    it('Debe renderizar el componente con datos en showProcess tipoProceso PRECIOS_MANUAL y con estado INICIAL', () => {
        const store = mockStore({
            showProcess: {
                list: [{ id: 1, origen: '', estado: 'INICIAL', tipoProceso: { descripcion: '', nombre: 'PRECIOS_MANUAL' } }],
                dateProcess: ""
            },
            showProcessPrices: { list: [], dateProcess: '' },
            showProcessTypes: {
                list: []
            },
            showProcessNavs: {
                list: [],
                dateProcess: ""
            },
            procesosNavs: {
                list: [],
                size: 0,
                completed: false
            },
            procesos: {
                list: [],
                size: 0,
                completed: false
            },
            generarArchivo: {
                showAlertprocessTypesUpdated: false
            },
            listarValorFondo: {
                listaValorFondo: [],
                showAlertprocessTypesUpdated: false
            },
            findDetails: {
                listDetails: []
            },
            obtenerFechaProceso: { fechaProceso: '' },
            validacionFallida: { error: '', msg: '' },
            showProcessAlertProgress: { showAlertProgress: '' }
        });
        render(
            <Provider store={store}>
                <ConnectedControlPrices params={{ groupName: 'name' }} />
            </Provider>
        );
    })
    it('Debe renderizar el componente con datos en showProcess tipoProceso FUTUROS y con estado INICIAL', () => {
        const store = mockStore({
            showProcess: {
                list: [{ id: 1, origen: '', estado: 'INICIAL', tipoProceso: { descripcion: '', nombre: 'FUTUROS' } }],
                dateProcess: ""
            },
            showProcessPrices: { list: [], dateProcess: '' },
            showProcessTypes: {
                list: []
            },
            showProcessNavs: {
                list: [],
                dateProcess: ""
            },
            procesosNavs: {
                list: [],
                size: 0,
                completed: false
            },
            procesos: {
                list: [],
                size: 0,
                completed: false
            },
            generarArchivo: {
                showAlertprocessTypesUpdated: false
            },
            listarValorFondo: {
                listaValorFondo: [],
                showAlertprocessTypesUpdated: false
            },
            findDetails: {
                listDetails: []
            },
            obtenerFechaProceso: { fechaProceso: '' },
            validacionFallida: { error: '', msg: '' },
            showProcessAlertProgress: { showAlertProgress: '' }
        });
        render(
            <Provider store={store}>
                <ConnectedControlPrices params={{ groupName: 'name' }} />
            </Provider>
        );
    })
    it('Debe renderizar el componente con datos en showProcess tipoProceso NOTAS_ESTRUCTURADAS y con estado INICIAL', () => {
        const store = mockStore({
            showProcess: {
                list: [{ id: 1, origen: '', estado: 'INICIAL', tipoProceso: { descripcion: '', nombre: 'NOTAS_ESTRUCTURADAS' } }],
                dateProcess: ""
            },
            showProcessPrices: { list: [], dateProcess: '' },
            showProcessTypes: {
                list: []
            },
            showProcessNavs: {
                list: [],
                dateProcess: ""
            },
            procesosNavs: {
                list: [],
                size: 0,
                completed: false
            },
            procesos: {
                list: [],
                size: 0,
                completed: false
            },
            generarArchivo: {
                showAlertprocessTypesUpdated: false
            },
            listarValorFondo: {
                listaValorFondo: [],
                showAlertprocessTypesUpdated: false
            },
            findDetails: {
                listDetails: []
            },
            obtenerFechaProceso: { fechaProceso: '' },
            validacionFallida: { error: '', msg: '' },
            showProcessAlertProgress: { showAlertProgress: '' }
        });
        render(
            <Provider store={store}>
                <ConnectedControlPrices params={{ groupName: 'name' }} />
            </Provider>
        );
    })
    it('Debe renderizar el componente con datos en showProcess tipoProceso OPCIONES y con estado INICIAL', () => {
        const store = mockStore({
            showProcess: {
                list: [{ id: 1, origen: '', estado: 'INICIAL', tipoProceso: { descripcion: '', nombre: 'OPCIONES' } }],
                dateProcess: ""
            },
            showProcessPrices: { list: [], dateProcess: '' },
            showProcessTypes: {
                list: []
            },
            showProcessNavs: {
                list: [],
                dateProcess: ""
            },
            procesosNavs: {
                list: [],
                size: 0,
                completed: false
            },
            procesos: {
                list: [],
                size: 0,
                completed: false
            },
            generarArchivo: {
                showAlertprocessTypesUpdated: false
            },
            listarValorFondo: {
                listaValorFondo: [],
                showAlertprocessTypesUpdated: false
            },
            findDetails: {
                listDetails: []
            },
            obtenerFechaProceso: { fechaProceso: '' },
            validacionFallida: { error: '', msg: '' },
            showProcessAlertProgress: { showAlertProgress: '' }
        });
        render(
            <Provider store={store}>
                <ConnectedControlPrices params={{ groupName: 'name' }} />
            </Provider>
        );
    })
    it('Debe renderizar el componente con datos en showProcess tipoProceso MONEDAS y con estado INICIAL', () => {
        const store = mockStore({
            showProcess: {
                list: [{ id: 1, origen: '', estado: 'INICIAL', tipoProceso: { descripcion: '', nombre: 'MONEDAS' } }],
                dateProcess: ""
            },
            showProcessPrices: { list: [], dateProcess: '' },
            showProcessTypes: {
                list: []
            },
            showProcessNavs: {
                list: [],
                dateProcess: ""
            },
            procesosNavs: {
                list: [],
                size: 0,
                completed: false
            },
            procesos: {
                list: [],
                size: 0,
                completed: false
            },
            generarArchivo: {
                showAlertprocessTypesUpdated: false
            },
            listarValorFondo: {
                listaValorFondo: [],
                showAlertprocessTypesUpdated: false
            },
            findDetails: {
                listDetails: []
            },
            obtenerFechaProceso: { fechaProceso: '' },
            validacionFallida: { error: '', msg: '' },
            showProcessAlertProgress: { showAlertProgress: '' }
        });
        render(
            <Provider store={store}>
                <ConnectedControlPrices params={{ groupName: 'name' }} />
            </Provider>
        );
    })
    it('Debe renderizar el componente datos en showProcesTypes', () => {
        const store = mockStore({
            showProcess: {
                list: [],
                dateProcess: ""
            },
            showProcessPrices: { list: [{ id: 0, tipoProceso: '', proceso: 0, error: 'prueba', estado: 'ERROR', alerta: '' }], dateProcess: '' },
            showProcessTypes: {
                list: [{ id: 2, descripcion: '' }]
            },
            showProcessNavs: {
                list: [],
                dateProcess: ""
            },
            procesosNavs: {
                list: [],
                size: 0,
                completed: false
            },
            procesos: {
                list: [],
                size: 0,
                completed: false
            },
            generarArchivo: {
                showAlertprocessTypesUpdated: false
            },
            listarValorFondo: {
                listaValorFondo: [],
                showAlertprocessTypesUpdated: false
            },
            findDetails: {
                listDetails: []
            },
            obtenerFechaProceso: { fechaProceso: '' },
            validacionFallida: { error: '', msg: '' },
            showProcessAlertProgress: { showAlertProgress: '' }
        });
        render(
            <Provider store={store}>
                <ConnectedControlPrices params={{ groupName: 'name' }} />
            </Provider>
        );
    })

    it('Debe montar el componente con datos en showProcess tipoProceso RENTA_FIJA_LOCAL y con estado OTRO', () => {
        const store = mockStore({
            showProcess: {
                list: [{ id: 1, origen: '', estado: 'OTRO', tipoProceso: { descripcion: '', nombre: 'RENTA_FIJA_LOCAL' } }],
                dateProcess: ""
            },
            showProcessPrices: { list: [{ id: 0, tipoProceso: '', proceso: 0, error: '', estado: 'CARGADO', alerta: '' }], dateProcess: '' },
            showProcessTypes: {
                list: []
            },
            showProcessNavs: {
                list: [],
                dateProcess: ""
            },
            procesosNavs: {
                list: [],
                size: 0,
                completed: false
            },
            procesos: {
                list: [{ id: 1 }, { id: 0 }],
                size: 2,
                completed: false
            },
            generarArchivo: {
                showAlertprocessTypesUpdated: false
            },
            listarValorFondo: {
                listaValorFondo: [],
                showAlertprocessTypesUpdated: false
            },
            findDetails: {
                listDetails: []
            },
            obtenerFechaProceso: { fechaProceso: '' },
            validacionFallida: { error: '', msg: '' },
            showProcessAlertProgress: { showAlertProgress: '' }
        });
        const wrapper = mount(
            <Provider store={store}>
                <ConnectedControlPrices params={{ groupName: 'name' }} checkId={jest.fn()} />
            </Provider>
        );
        wrapper.find('.btn-xs').at(0).simulate('click');
        wrapper.find('.btn-xs').at(1).simulate('click');
    })
})