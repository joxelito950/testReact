export function validation(e) {
    if (!e.target.value) {
      this.props.validacionFallida("No se admiten el campo vacío");
    } else if (isNaN(Number(e.target.value))) {
      this.props.validacionFallida("Sólo se admiten números");
    } else if (Number(e.target.value) < 0.01 || Number(e.target.value) > 100) {
      this.props.validacionFallida("Sólo se admiten números entre 0 y 100");
    } else {
      this.props.validacionExitosa();
    }
  }
