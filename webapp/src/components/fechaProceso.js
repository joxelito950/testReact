import React from 'react'
import { connect } from 'react-redux'
import { obtenerFechaProceso } from '../actions'
import Moment from 'moment';

class FechaProceso extends React.Component {

  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div>
        <h3>
             <span className="label  label-info">Fecha Proceso {Moment(this.props.fechaProceso).format("YYYY-MM-DD")}</span>
         </h3>
      </div>

    );
  }

};
function mapStateToProps(state) {
  return {
    fechaProceso: state.obtenerFechaProceso.fechaProceso
  }
}
export default connect(mapStateToProps, { obtenerFechaProceso })(FechaProceso)
