import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import { configure, shallow } from 'enzyme';
import control from '../../components/control';

configure({ adapter: new Adapter() });

describe('Test para control', () => {
    it('Debe renderizar el componente', () => {
        const wrapper = shallow(<control />);
        expect(wrapper.length).toBe(1);
    })
})