import React from 'react';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-15';
import configureStore from 'redux-mock-store';
import { configure, render, mount } from 'enzyme';
import ConnectedTiposArchivos from '../../components/tiposArchivos';

const mockStore = configureStore([thunk]);

configure({ adapter: new Adapter() });

describe('Test de tiposArchivos', () => {
    it('debe renderizar el componente', () => {
        const store = mockStore({
            validacionFallida: {
                error: '',
                msg: 'para botn disabled',
                icon: ''
            },
            showProcessTypes: {
                list: [{ id: 1, descripcion: "MONEDAS" }]
            },
            actualizarTiposProcesos: {
                showAlertprocessTypesUpdated: false
            }
        });
        render(<ConnectedTiposArchivos store={store} />);
    })
    it('debe renderizar el componente', () => {
        const store = mockStore({
            validacionFallida: {
                error: '',
                msg: 'a',
                icon: ''
            },
            showProcessTypes: {
                list: [{ id: 1, descripcion: "MONEDAS", variacion: 'prueba' }]
            },
            actualizarTiposProcesos: {
                showAlertprocessTypesUpdated: false
            }
        });
        const wrapper = mount(<ConnectedTiposArchivos store={store} params={{ groupName: 'prueba' }} />);
    })
})
