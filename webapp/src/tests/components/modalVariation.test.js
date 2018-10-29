import React from "react";
import ModalVariation from '../../components/modalVariation';
import Adapter from 'enzyme-adapter-react-15';
import { configure, render } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Test de modalVariation', () => {
    it('debe renderizar el componente', () => {
        const modal = jest.fn();
        render(<ModalVariation updateVariation={modal} listaTipoProceso={[]} tipoProceso={modal} />);
    })
})