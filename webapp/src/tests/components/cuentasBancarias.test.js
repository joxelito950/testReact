import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { configure, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import configureStore from 'redux-mock-store';
import CuentasBancarias from '../../components/cuentasBancarias';

configure({ adapter: new Adapter() });

const mockStore = configureStore([thunk]);

describe('Test de Cuentas Bancarias', () => {
    const store = mockStore({
        obtenerFechaProceso: {
            fechaProceso: '2018-10-04'
        },
        cuentasBancarias: {
            list: [{ id: 0 }, { id: 1 }, { id: 'test' }],
            listSize: 2,
            listSaved: [{ id: 1 }, { id: 'test' }],
            portafolio: 'test',
            cusipPadre: '',
            listSons: [{ id: 1 }, { id: 'test' }],
            listSizeSons: 1,
            itemSaved: {}
        },
        validacionFallida: {
            msg: 'Ok'
        },
        tableDynamicParametroPortafolio: {
            listaParametro: [{ id: 1 }, { id: 'test' }]
        }
    });
    it('Debe renderizar el componente', () => {
        render(
            <Provider store={store}>
                <CuentasBancarias />
            </Provider>
        )
    });
    it('Debe montar el componente y simular click', () => {
        const wrapper = mount(
            <Provider store={store}>
                <CuentasBancarias />
            </Provider>
        )
        wrapper.find('.btn-primary').at(0).simulate('click');
        wrapper.find('.btn-primary').at(1).simulate('click');
        wrapper.find('.btn-info').at(0).simulate('click');
        wrapper.find('.btn-info').at(1).simulate('click');
        wrapper.find('.btn-default').at(0).simulate('click');
        wrapper.find('.btn-default').at(1).simulate('click');
        wrapper.find('.btn-danger').at(0).simulate('click');
        wrapper.find('.btn-danger').at(1).simulate('click');

    });
});
