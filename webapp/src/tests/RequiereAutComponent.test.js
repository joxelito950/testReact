import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-15';
import { configure, render } from 'enzyme';
import configureStore from 'redux-mock-store';
import { RequireAuthComponent } from '../RequireAuthComponent';

configure({ adapter: new Adapter() });

const mockStore = configureStore([thunk]);

describe('Test de RequiereAuthComponent', () => {
    const store = mockStore({})
    it('Debe renderizar el componente', () => {
        expect(RequireAuthComponent(<div />, 'test')).toBeDefined();
    });
});