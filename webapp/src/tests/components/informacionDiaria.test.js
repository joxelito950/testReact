import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { configure, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import configureStore from 'redux-mock-store';
import InformacionDiaria from '../../components/informacionDiaria';

configure({ adapter: new Adapter() });

const mockStore = configureStore([thunk]);

describe('Test de Informacion Diaria', () => {
    const store = mockStore({
        obtenerFechaProceso: {
            fechaProceso: ''
        },
        ejecutarInformacionDiaria: {
            secMaster: {},
            contrapartes: {},
            listaControl: [
                { nombre: 'test', descripcion: 'test', status: 'test' },
                { nombre: 'error', descripcion: 'error', status: 'ERROR' }
            ],
            details: []
        }
    });
    it('Debe renderizar el componente', () => {
        render(
            <Provider store={store}>
                <InformacionDiaria />
            </Provider>
        )
    });
});