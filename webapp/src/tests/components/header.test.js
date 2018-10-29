import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import { configure, render } from 'enzyme';

import Header from '../../components/header';

configure({ adapter: new Adapter() });

describe('Test de header', () => {
    it('Debe renderizar el componente', () => {
        render(<Header />);
    })
})