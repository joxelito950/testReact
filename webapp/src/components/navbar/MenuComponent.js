import React, {Component} from 'react';
import {Link} from 'react-router';
import {login} from '../../actions';
import {connect} from 'react-redux';

class MenuComponent extends Component {
  render() {
    const {menuMap} = this.props;

    const menu = menuMap.opciones.filter(item => this.props.directives.includes(item.key)).length > 0
      ? (<li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          {menuMap.titulo}
          <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">
          {
            menuMap.opciones.filter(item => this.props.directives.includes(item.key)).map((item) => <li key={item.key}>
              <Link to={item.to}>{item.ds}</Link>
            </li>)
          }
        </ul>
      </li>)
      : (<a/>);

    return (menu);
  }
}

function mapStateToProps(state) {
  return {directives: state.login.directives}
}

export default connect(mapStateToProps, {login})(MenuComponent);
