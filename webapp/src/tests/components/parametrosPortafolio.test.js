import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { configure, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import configureStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import ConnectedparametrosPortafolio from '../../components/parametrosPortafolio';

configure({ adapter: new Adapter() });

const mockStore = configureStore([thunk]);

const mockAxios = new MockAdapter(Axios);

describe('Test de parametrosPortafolio', () => {
    const store = mockStore({
        obtenerFechaProceso: {
            fechaProceso: ''
        },
        validacionFallida: {
            msg: ''
        },
        tableDynamicParametroPortafolio: {
            listaParametro: [
                { id: 'a', nombrePortafolio: 'a', codigoPortafolio: 'a', codigoNegocio: 'a', codigoLineaNegocio: 'a', codigoLineaProducto: 'a', codigoAlternativa: 'a', codigoContabilidad: 'a', cuentaDepositoCentralValores: 'a', cuentaDeceval: 'a', fechaAlta: 'a', sujetoRetencion: 'a' },
                { id: '1', nombrePortafolio: '1', codigoPortafolio: '1', codigoNegocio: '1', codigoLineaNegocio: '1', codigoLineaProducto: '1', codigoAlternativa: '1', codigoContabilidad: '1', cuentaDepositoCentralValores: '1', cuentaDeceval: '1', fechaAlta: '1', sujetoRetencion: '1' },
                { id: 0, nombrePortafolio: '0', codigoPortafolio: '0', codigoNegocio: '0', codigoLineaNegocio: '0', codigoLineaProducto: '0', codigoAlternativa: '0', codigoContabilidad: '0', cuentaDepositoCentralValores: '0', cuentaDeceval: '0', fechaAlta: '0', sujetoRetencion: '0' },
                { id: 1, nombrePortafolio: '', codigoPortafolio: '', codigoNegocio: '', codigoLineaNegocio: '', codigoLineaProducto: '', codigoAlternativa: '', codigoContabilidad: '', cuentaDepositoCentralValores: '', cuentaDeceval: '', fechaAlta: '', sujetoRetencion: '' },
            ],
            showAlertprocessTypesUpdated: false,
            listSize: 4,
            accion: '',
        }
    });
    mockAxios.onPost().reply(200, '');
    const onProductTableUpdate = jest.fn();
    const onRowDel = jest.fn();
    it('Debe renderizar el componente', () => {
        render(
            <Provider store={store}>
                <ConnectedparametrosPortafolio
                    onProductTableUpdate={onProductTableUpdate}
                    onRowDel={onRowDel}
                    filterText={'1'}
                    items={[{ id: '1', codigoPortafolio: '1' }, { id: '2', codigoPortafolio: '2' }]}
                />
            </Provider>
        )
    })
    it('Debe montar el componente', () => {
        const wrapper = mount(
            <Provider store={store}>
                <ConnectedparametrosPortafolio
                    onProductTableUpdate={onProductTableUpdate}
                    onRowDel={onRowDel}
                    filterText={'1'}
                    items={[{ id: '1', codigoPortafolio: '1' }, { id: '2', codigoPortafolio: '2' }]}
                />
            </Provider>
        );
        wrapper.find('.pull-left').simulate('click');
    })
})