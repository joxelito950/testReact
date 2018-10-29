import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { configure, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import configureStore from 'redux-mock-store';
import ConnectedControlNavs from '../../components/controlNavs';

configure({ adapter: new Adapter() });

const mockStore = configureStore([thunk]);

describe('Test para controlNavs', () => {
    it('Debe renderizar el componente', () => {
        const store = mockStore({
            obtenerFechaProceso: { fechaProceso: '' },
            validacionFallida: { error: '', msg: '' },
            showProcessAlertProgress: { showAlertProgress: '' },
            showProcessTypes: {
                list: []
            },
            showProcessNavs: {
                list: [{ id: 0, tipoProceso: '', proceso: 0, error: 'prueba', estado: 'ERROR', alerta: '' }],
                dateProcess: ""
            },
            procesosNavs: {
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
            }
        });
        render(
            <Provider store={store}>
                <ConnectedControlNavs params={{ groupName: 'name' }} />
            </Provider>
        );
    })
    it('Debe renderizar otra parte el componente', () => {
        const store = mockStore({
            obtenerFechaProceso: { fechaProceso: '' },
            validacionFallida: { error: '', msg: '' },
            showProcessAlertProgress: { showAlertProgress: '' },
            showProcessTypes: {
                list: [{ id: 0, tipoProceso: '', proceso: 0, error: '', estado: '', alerta: '' }]
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
            generarArchivo: {
                showAlertprocessTypesUpdated: false
            },
            listarValorFondo: {
                listaValorFondo: [],
                showAlertprocessTypesUpdated: false
            }
        });
        render(
            <Provider store={store}>
                <ConnectedControlNavs store={store} params={{ groupName: 'name' }} />
            </Provider>
        );
    })
    it('Debe renderizar otra parte el componente final', () => {
        const store = mockStore({
            obtenerFechaProceso: { fechaProceso: '' },
            validacionFallida: { error: '', msg: '' },
            showProcessAlertProgress: { showAlertProgress: '' },
            showProcessTypes: {
                list: []
            },
            showProcessNavs: {
                list: [{ id: 0, tipoProceso: '', proceso: 0, error: '', estado: '', alerta: '' }],
                dateProcess: ""
            },
            procesosNavs: {
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
            }
        });
        render(
            <Provider store={store}>
                <ConnectedControlNavs params={{ groupName: 'name' }} />
            </Provider>
        );
    })

    it('Debe montar el componente final con estado CARGADO y hacer click', () => {
        const store = mockStore({
            obtenerFechaProceso: { fechaProceso: '' },
            validacionFallida: { error: '', msg: '' },
            showProcessAlertProgress: { showAlertProgress: '' },
            showProcessTypes: {
                list: []
            },
            showProcessNavs: {
                list: [{ id: 0, tipoProceso: '', proceso: 0, error: '', estado: 'CARGADO', alerta: '' }],
                dateProcess: ""
            },
            procesosNavs: {
                list: [{ id: 0 }, { id: 1 }],
                size: 2,
                completed: false
            },
            generarArchivo: {
                showAlertprocessTypesUpdated: false
            },
            listarValorFondo: {
                listaValorFondo: [],
                showAlertprocessTypesUpdated: false
            }
        });
        const wrapper = mount(
            <Provider store={store}>
                <ConnectedControlNavs params={{ groupName: 'name' }} />
            </Provider>
        );
        wrapper.find('.btn-xs').simulate('click');
    })
})