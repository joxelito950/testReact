import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import { configure, render } from 'enzyme';
import ModalRfi from '../../components/modalRfi';

configure({ adapter: new Adapter() });

describe('Test para ', () => {
    it('Debe renderizar el componente', () => {
        render(<ModalRfi
            details={[
                { detalleConsulta: { id: '0', nemo: '', bursatilidad: '' }, variacion: { alerta: '', variacion: 10, precioAnterior: 11, precioActual: 21 }, valorFondo: 1, codigoPortafolio: 's' },
                { detalleConsulta: { id: '1', nemo: '', bursatilidad: '' }, variacion: { alerta: '', variacion: '', precioAnterior: '', precioActual: '' }, valorFondo: 0, codigoPortafolio: 's' }
            ]}
            dateProcess={'1'}
            name={'Valores de Fondo Mandatorios (OBL-CES-PPN)'}
        />);
    })
})