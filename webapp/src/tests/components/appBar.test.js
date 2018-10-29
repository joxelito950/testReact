import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-15';
import { configure, render } from 'enzyme';
import configureStore from 'redux-mock-store';
import AppBar from '../../components/navbar/appBar';

const mockStore = configureStore([thunk]);

configure({ adapter: new Adapter() });

const store = mockStore({
    obtenerFechaProceso: { fechaProceso: '' },
    validacionFallida: { error: '', msg: '' },
    showProcessAlertProgress: { showAlertProgress: '' },
    login: { token: '', msgStatus: '', fullName: '', isAuthenticated: '', user: '', directives: '' },
    verificarDiasFestivos: { diasFestivosVerificados: '', contador: '' },
    verificarProcesosEjecutados: {
        procesosEjecutadosServices: [{ id: 0, estado: 'NO_CARGADO', proceso: '', descripcion: '' }],
        contadorServices: '',
        procesosEjecutadosCurvas: [{ id: 1, estado: 'NO_CARGADO', proceso: '', descripcion: '' }],
        contadorCurvas: '',
        procesosEjecutadosDerivados: [],
        contadorDerivados: ''
    }
})

describe('Test para appBar', () => {
    it('Debe renderizar el componente', () => {
        const wrapper = render(
            <Provider store={store}>
                <AppBar />
            </Provider>
        );
        expect(wrapper.length).toBe(1);
    })
})