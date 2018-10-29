import 'sweetalert2/dist/sweetalert2.min.css';
import {default as swal} from 'sweetalert2';
import Moment from 'moment';

export function replace(data) {
  return data == null ? "" : data.split('_').join(' ');
}

export function showMessage(message, type, action, cancelButton, ...args) {
    swal({
        title: 'Spirit',
        text: message,
        type: type,
        showCancelButton: cancelButton,
        confirmButtonColor: '#337AB7',
        cancelButtonColor: '#5BC0de',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        allowEscapeKey: false,
        allowOutsideClick: false,
        width: 400
    }).then(() => { action(...args) }, (dismiss) => {});
}

export function showMessageProgress(condition, message) {
  if(condition) {
    swal({
        title: 'Spirit',
        text: message,
        allowEscapeKey:false,
        allowOutsideClick:false,
        width: 200
    });
    swal.showLoading();
  }
}

export function convertDateToMilliseconds(dateToConvert) {
  return Moment(dateToConvert, "YYYY-MM-DD").valueOf();
}

export function convertMillisecondsToDate(dateToConvert) {
  return Moment(dateToConvert).format("YYYY-MM-DD");
}

export function convertDateToMillisecondsReport(dateToConvert) {
  return Moment(dateToConvert).format("YYYYMMDD");
}

export function convertMillisecondsToDateWithoutSeparator(dateToConvert) {
  return Moment(dateToConvert).format("DDMMYYYY");
}
