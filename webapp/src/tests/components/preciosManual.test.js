import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-15';
import configureStore from 'redux-mock-store';
import { configure, mount, render } from 'enzyme';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import ConnectedpreciosManual from '../../components/preciosManual';

configure({ adapter: new Adapter() });

describe('Test para preciosManual', () => {
    const mockStore = configureStore([thunk]);
    const store = mockStore({
        validacionFallida: {
            msg: ''
        },
        listarTipoPrecioManual: {
            listaTipoPrecioManual: []
        },
        tableDynamicPrecioManual: {
            listPrecioManual: [
                { id: 'a', identificador: '', nombre: '', precio: '', tipoPrecio: { id: 'a', nombre: 'FONDOS_CAPITAL_PRIVADO' }, fechaBaja: '', fechaAlta: '' },
                { id: 0, identificador: '', nombre: '', precio: '', tipoPrecio: { id: 0, nombre: '' }, fechaBaja: '', fechaAlta: '' },
                { id: 1, identificador: '', nombre: 'prueba', precio: '', tipoPrecio: { id: 1, nombre: 'FONDOS_CAPITAL_PRIVADO' }, fechaBaja: '', fechaAlta: '' },
                { id: 2, identificador: 'prueba', nombre: '', precio: '', tipoPrecio: { id: 2, nombre: '' }, fechaBaja: '', fechaAlta: '' }
            ],
            showAlertprocessTypesUpdated: false,
            listSize: 4,
            listPrecioManualOrigin: []
        },
        tableDynamicPrecioManualDetalle: {
            precioManualFCP: '',
            listPmdFCP: [],
            fechaProceso: '',
            listSize: 0,
            showAlertprocessTypesUpdated: '',
        },
        getIdTipoPrecio: {
            idTipoPrecio: 2
        },
        obtenerFechaProceso: {
            fechaProceso: ''
        }
    });
    var mock = new MockAdapter(Axios);
    mock.onPost('/ControlSpiritServices/rest/app/prices/listar/preciosManual').reply(200, [])
    it('Debe renderizar el componente', () => {
        render(
            <Provider store={store}>
                <ConnectedpreciosManual />
            </Provider>
        );
    })
    it('Debe montar el componente', () => {
        const wrapper = mount(
            <Provider store={store}>
                <ConnectedpreciosManual />
            </Provider>
        );
        wrapper.find('.btn-info').at(0).simulate('click');
        wrapper.find('.btn-info').at(1).simulate('click');
        wrapper.find('.btn-primary').at(0).simulate('click');
        wrapper.find('.btn-primary').at(1).simulate('click');
    })
})