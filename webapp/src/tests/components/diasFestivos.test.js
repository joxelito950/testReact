import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import configureStore from 'redux-mock-store';
import DiasFestivos from '../../components/diasFestivos';

configure({ adapter: new Adapter() });

const mockStore = configureStore([thunk]);

describe('Test de Dias Festivos', () => {
    const store = mockStore({
        obtenerFechaProceso: {
            fechaProceso: '2018-10-10'
        },
        obtenerParametroDiasFestivos: {
            parametroDiasFestivos: {}
        },
        obtenerDiasFestivos: {
            diasFestivos: []
        },
        guardarDiasFestivos: {
            showAlertprocessTypesUpdated: false
        }
    });
    it('Debe renderizar el componente', () => {
        render(
            <Provider store={store}>
                <DiasFestivos />
            </Provider>
        )
    });
});