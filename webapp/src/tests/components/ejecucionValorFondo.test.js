import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { configure, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import configureStore from 'redux-mock-store';
import { CLIENT_RENEG_WINDOW } from 'tls';
import ConnectedEjecucionValorFondo from '../../components/ejecucionValorFondo2';

configure({ adapter: new Adapter() });

const mockStore = configureStore([thunk]);

describe('Test para ejecucionValorFondo', () => {
    const store = mockStore({
        ejecutarValorFondo2: {
            voluntarias: [],
            cesantias: [],
        },
        obtenerFechaProceso: {
            fechaProceso: ''
        }
    });
    it('Debe renderizar el componente', () => {
        render(
            <Provider store={store}>
                <ConnectedEjecucionValorFondo fondos={{ id: 1, descipcion: '', nombre: '' }} />
            </Provider>
        );
    })
    it('Debe montar el componente', () => {
        const wrapper = mount(
            <Provider store={store}>
                <ConnectedEjecucionValorFondo fondos={{ id: 1, descipcion: '', nombre: '' }} />
            </Provider>
        );
    })
})