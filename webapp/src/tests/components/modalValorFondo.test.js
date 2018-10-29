import React from 'react';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-15';
import { configure, render } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConectedmodalValorFondo from '../../components/modalValorFondo';

const mockStore = configureStore([thunk]);

configure({ adapter: new Adapter() });

describe('Test para modalValorFondo', () => {
    const store = mockStore({
        listarValorFondo: {
            listaValorFondo: {
                details:
                    [
                        { id: '0', valorFondo: 1, codigoPortafolio: 's' },
                        { id: '1', valorFondo: 0, codigoPortafolio: 's' }
                    ],
                dateProcess: '1',
                name: 'Valores de Fondo Mandatorios (OBL-CES-PPN)',
                valorFondoDetalle: [
                    { idCuentaContable: 1 },
                    { idCuentaContable: 3 },
                    { idCuentaContable: 2 }
                ],
            }
        }
    });
    it('Debe renderizar el componente y sus hijos', () => {
        const wrapper = render(
            <ConectedmodalValorFondo store={store}
                details={
                    [{
                        id: '0', valorFondo: 1, codigoPortafolio: 's', valorFondoDetalle: [
                            { idCuentaContable: 1 },
                            { idCuentaContable: 3 },
                            { idCuentaContable: 2 }
                        ],
                    }, {
                        id: '1', valorFondo: 0, codigoPortafolio: 's', valorFondoDetalle: [
                            { idCuentaContable: -1 },
                            { idCuentaContable: 3 },
                            { idCuentaContable: 0 },
                            { idCuentaContable: 2 }
                        ],
                    }]
                }
                dateProcess={'1'}
                name={'Valores de Fondo Mandatorios (OBL-CES-PPN)'}
            />
        );
    })
})