import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { configure, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import configureStore from 'redux-mock-store';
import FormatoRegulatorio from '../../components/formatosRegulatorios';

configure({ adapter: new Adapter() });

const mockStore = configureStore([thunk]);

describe('Test para Formatos Regulatorios', () => {
    const store = mockStore({
        obtenerFechaProceso: {
            fechaProceso: ''
        },
        ejecutarFormatoRegulatorio: {
            formato: { title: 'test', status: '' },
            crgPosiciones: { title: 'test', status: 'ERROR', task: 'tarea' },
            f351: { title: 'test', status: 'ERROR', task: 'tarea' },
            f471: { title: '', status: '', task: '' },
            f468: { title: 'test', status: 'test', task: 'test' },
            f397: { title: 'test', status: 'CARGADO', task: 'tarea' },
            f_futuros: { title: 'test', status: 'ERROR', task: 'tarea' },
            f472: { title: 'test', status: 'ERROR', task: 'tarea' }
        }
    });
    it('Debe renderizar el componente', () => {
        render(
            <Provider store={store}>
                <FormatoRegulatorio />
            </Provider>
        )
    });
});