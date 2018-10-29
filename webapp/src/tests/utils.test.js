import {
    replace, convertDateToMilliseconds, convertMillisecondsToDate, convertDateToMillisecondsReport, convertMillisecondsToDateWithoutSeparator,
} from '../utils/utils';

describe('Test de Utils', () => {
    describe('replace', () => {
        it('Debe retornar un string vacio', () => {
            expect(replace(null)).toEqual("");
        });
        it('Debe remplazar casa_vida por casa vida', () => {
            expect(replace("casa_vida")).toEqual("casa vida");
        });
        it('Debe conservar casa vida', () => {
            expect(replace("casa vida")).toEqual("casa vida");
        });
    });
    it('Debe convertir Date a Milliseconds', () => {
        expect(convertDateToMilliseconds('2000-02-01')).toEqual(949381200000);
    });
    it('Debe convertir Milliseconds a Date', () => {
        expect(convertMillisecondsToDate(949381200000)).toEqual('2000-02-01');
    });
    it('Debe convertir Date a Milliseconds sin separador', () => {
        expect(convertDateToMillisecondsReport('2000-02-01')).toEqual('20000201');
    });
    it('Debe convertir Milliseconds a Date sin separador', () => {
        expect(convertMillisecondsToDateWithoutSeparator(949381200000)).toEqual('01022000');
    });
});