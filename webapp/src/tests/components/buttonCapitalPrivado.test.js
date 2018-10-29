import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import { configure, render } from 'enzyme';
import ButtonCapitalPrivado from '../../components/buttonCapitalPrivado';

configure({ adapter: new Adapter() });

describe('Test para control', () => {
    it('Debe renderizar el componente', () => {
        const wrapper = render(<ButtonCapitalPrivado />);
        expect(wrapper.length).toBe(1);
    })
})