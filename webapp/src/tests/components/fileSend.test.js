import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-15';
import configureStore from 'redux-mock-store';
import { configure, render, mount } from 'enzyme';
import FileSend from '../../components/fileSend';

configure({ adapter: new Adapter() });

const mockStore = configureStore([thunk]);

describe('Teste de FileSend', () => {
    const store = mockStore({
        archivosGenericos: {
            fileSend: ''
        }
    });
    it('Debe renderizar el componente', () => {
        render(
            <Provider store={store}>
                <FileSend />
            </Provider>
        )
    });
    it('Debe montar el componente y simular un click', () => {
        const wrapper = mount(
            <Provider store={store}>
                <FileSend />
            </Provider>
        )
        wrapper.find('.btn-default').simulate('click');
        wrapper.find('.btn-primary').simulate('click');
    });
});