import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import configureStore from 'redux-mock-store';
import { configure, render, mount } from 'enzyme';
import ConnectedfechaProceso from '../../components/fechaProceso';

const mockStore = configureStore();

configure({ adapter: new Adapter() });

describe('Test para fechaProceso', () => {
    const store = mockStore({
        obtenerFechaProceso: {
            fechaProceso: ''
        }
    });
    const mockFuncion = jest.fn();
    it('Debe renderizar el componente', () => {
        render(<ConnectedfechaProceso store={store} onUserInput={mockFuncion} />);
    })
})