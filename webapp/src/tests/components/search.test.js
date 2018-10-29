import React from 'react';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-15';
import { configure, render, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Search from '../../components/search';

const mockStore = configureStore([thunk]);

configure({ adapter: new Adapter() });

const store = mockStore({
    obtenerFechaProceso: { fechaProceso: '' },
    validacionFallida: { error: '', msg: '' },
    showProcessAlertProgress: { showAlertProgress: '' }
})

describe('Test de search', () => {
    const show = jest.fn();
    it('debe renderizar el componente', () => {
        render(<Search store={store} />);
    })
    it('debe montar el componente y hacer click', () => {
        const wrapper = mount(
            <Search store={store} dateProcess={'1'} showProcess={show} isSearch={true} />
        );
        wrapper.find('.btn-info').simulate('click');
    })
})
