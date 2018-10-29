import EjecucionValorFondo2 from '../ejecucionValorFondo2';
import ControlPrices from '../controlPrices';
import ControlNavs from '../controlNavs';
import PreciosManual from '../preciosManual';
import TiposArchivos from '../tiposArchivos';
import ParametrosPortafolio from '../parametrosPortafolio';
import SystemDateProcess from '../systemDateProcess';
import ProcesosAladdin from '../procesosAladdin';
import Factors from '../factors';
import ControlFtp from '../controlFtp';
import ListaControl from '../listaControl';
import FormatosRegulatorios from '../formatosRegulatorios';
import ControlValoracion from '../controlValoracion';
import ControlCurvas from '../controlCurvas';
import ControlCVA_DVA from '../controlCVA_DVA';
import InformacionDiaria from '../informacionDiaria';
import DiasFestivos from '../diasFestivos';
import ReportsGenerate from '../reportsGenerate';
import IsinDcv from '../isinDcv';
import CuentasBancarias from '../cuentasBancarias';
import SmInversiones from '../smInversion';
import ControlArchivosFtp from '../controlArchivosFtp';
import Header from '../header';
import SessionSpirit from '../session';

let routers = [
  {
    key: 'CRG_PRECIO',
    path: '/carguePrecios/:groupName',
    component: ControlPrices
  }, {
    key: 'VLR_FONDO',
    path: '/valoresFondo/:groupName',
    component: ControlNavs
  }, {
    key: 'PRECIO_MANUAL',
    path: '/preciosManual',
    component: PreciosManual
  }, {
    key: 'PARAM_PRECIO',
    path: '/parametrosPrecios/:groupName',
    component: TiposArchivos
  }, {
    key: 'PARAM_PORTAFOIO',
    path: '/parametroPortafolio',
    component: ParametrosPortafolio
  }, {
    key: 'EJEC_VALOR_FONDO',
    path: '/ejecutarValorFondo',
    component: EjecucionValorFondo2
  }, {
    key: 'PARAMETROS',
    path: 'parametros/fechaProcesoSistema',
    component: SystemDateProcess
  }, {
    key: 'PROC_ALADIN',
    path: '/procesosAladdin/:groupName',
    component: ProcesosAladdin
  }, {
    key: 'FACTOR_OPCION',
    path: '/factoresOpciones',
    component: Factors
  }, {
    key: 'PROC_FTP',
    path: '/procesosFtp',
    component: ControlFtp
  }, {
    key: 'LISTA_CONTROL',
    path: '/listaControl',
    component: ListaControl
  }, {
    key: 'FRMT_REGULATORIO',
    path: '/formatosRegulatorios',
    component: FormatosRegulatorios
  }, {
    key: 'CTRL_VALORACION',
    path: '/controlValoracion',
    component: ControlValoracion
  }, {
    key: 'CCTRL_CURVA',
    path: '/controlCurvas',
    component: ControlCurvas
  }, {
    key: 'CTRL_CVA_DVA',
    path: '/controlCVA_DVA',
    component: ControlCVA_DVA
  }, {
    key: 'INF_DIARIA',
    path: '/informacionDiaria',
    component: InformacionDiaria
  }, {
    key: 'DIA_NO_HABIL',
    path: '/diasNoHabiles',
    component: DiasFestivos
  }, {
    key: 'GEN_REPORTE',
    path: '/generarReportes',
    component: ReportsGenerate
  }, {
    key: 'COD_EMISION_DCV',
    path: '/codigosEmisionDcv',
    component: IsinDcv
  }, {
    key: 'CUENT_BANCARIA',
    path: '/cuentasBancarias',
    component: CuentasBancarias
  }, {
    key: 'SM_INVERSION',
    path: '/smInversiones',
    component: SmInversiones
  }, {
    key: 'ENV_ARCHIVO',
    path: '/enviarArchivos',
    component: ControlArchivosFtp
  }, {
    key: 'base',
    path: '/',
    component: Header
  }, {
    key: 'session',
    path: '/session',
    component: SessionSpirit
  }
];

export default routers;
