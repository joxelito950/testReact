import React from 'react';
import Adapeter from 'enzyme-adapter-react-15';
import { configure, render } from 'enzyme';
import ModalRvl from '../../components/modalRvl';

configure({ adapter: new Adapeter() });

describe('Test para modalRvl', () => {
    it('Debe renderizar el componente', () => {
        render(<ModalRvl details={[
            { detalleConsulta: { id: '0', nemo: '', bursatilidad: '' }, variacion: { alerta: '', variacion: '', precioAnterior: '', precioActual: '' }, valorFondo: 1, codigoPortafolio: 's' },
            { detalleConsulta: { id: '1', nemo: '', bursatilidad: '' }, variacion: { alerta: '', variacion: '', precioAnterior: 11, precioActual: 21 }, valorFondo: 0, codigoPortafolio: 's' }
        ]}
            dateProcess={'1'}
            name={'Valores de Fondo Mandatorios (OBL-CES-PPN)'}
        />
        );
    })
    it('Debe renderizar el componente', () => {
        render(<ModalRvl details={[
            { detalleConsulta: { id: '0', nemo: '', bursatilidad: '' }, variacion: { alerta: '', variacion: 10, precioAnterior: 11, precioActual: 21 }, valorFondo: 1, codigoPortafolio: 's' },
            { detalleConsulta: { id: '1', nemo: '', bursatilidad: '' }, variacion: { alerta: '', variacion: 10, precioAnterior: 11, precioActual: 21 }, valorFondo: 0, codigoPortafolio: 's' }
        ]}
            dateProcess={'1'}
            name={'Valores de Fondo Mandatorios'}
        />
        );
    })
})