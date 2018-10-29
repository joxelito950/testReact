import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import { configure, shallow } from 'enzyme';

import fileGenerate from '../../components/fileGenerate';

configure({ adapter: new Adapter() });

describe('Test de fileGenerate', () => {
    it('Debe renderizar el componente', () => {
        shallow(<fileGenerate />);
    })
})