import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-15';
import configureStore from 'redux-mock-store';
import { configure, render, mount } from 'enzyme';
import Factors from '../../components/factors';

const mockStore = configureStore([thunk]);

configure({ adapter: new Adapter() });

describe('Test de Factors', () => {
    const store = mockStore({
        tableDynamic: {
            listFactors: [{ id: 0, identificador: 0, factor: 0 }, { id: 1, identificador: 1, factor: 1 }],
            listSize: 0,
            showAlertprocessTypesUpdated: true,
            listFactorsToDelete: [],
            borrado: []
        },
        validacionFallida: {
            msg: ''
        }
    });
    it('Debe renderizar el componente', () => {
        render(
            <Provider store={store}>
                <Factors />
            </Provider>
        )
    });
    it('Debe montar la aplicacion y simular click', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Factors />
            </Provider>
        )
        wrapper.find('.btn-info').simulate('click');
        wrapper.find('.btn-primary').simulate('click');
    });
});