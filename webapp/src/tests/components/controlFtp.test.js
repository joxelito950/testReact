import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import controlFtp from '../../components/controlFtp';

configure({ adapter: new Adapter() });

describe('Test de ControlFtp', () => {
    it('Debe cargar el componente', () => {
        shallow(<controlFtp />);
    });
});