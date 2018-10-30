import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { configure, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import CargueOperaciones from '../../components/controlValoracion';

const mockStore = configureStore([thunk]);

configure({ adapter: new Adapter() });

describe('Test de CargueOperaciones', () => {
    const store = mockStore({
        obtenerFechaProceso: {
            fechaProceso: ''
        },
        ejecutarScore: {
            crgOperacionesRep: [],
            crgOperacionesColl: [],
            crgOperacionesTrd: [],
            crgOperacionesCmat: [],
            crgAjtOperacionesCmat: [],
            valOpct: [],
            valOpctTtvrv: [],
            valOpctTtvrf: [],
            valPos: [],
            ajusFixValo: [],
            valPosRep: [],
            valOpcValoFut: [],
            crgVencimientoOp: [],
            crgVencimientoCashWF: [],
            crgValFut: [],
            eventosOps: [],
            eventosVencim: [],
            eventosOpct: [],
            eventosFx: [],
            eventosFut: [],
            eventosPos: [],
            crgVencimientoWeek: [],
            crgVencimientoPayfail: [],
            crgVencimEventos: [],
            crgValFxSwap: [],
            crgOperTrdAjs: [],
            crgValVencimSwapPay: [],
            crgFixing: [],
            crgValFutPago: [],
            crgVenFixing: [],
            crgOpAjsSpot: [],
            crgAjsVencim: [],
            crgSpotFixingVencim: [],
            crgVenMat: []
        }
    });
    it('Debe renderizar el componente', () => {
        render(
            <Provider store={store}>
                <CargueOperaciones />
            </Provider>
        )
    });
});