import React from 'react'

import TablaDinamica from './tablaDinamica'

class CapitalPrivado extends React.Component {

  constructor(props) {
    super(props);


    this.state = {};
    this.state.filterText = "";
    this.state.items = [
      {
        id: 1,
        identificador: 'STWX',
        price: '49.99',
        qty: 12,
        name: 'Football'
      },
       {
        id: 2,
        identificador: 'Goods',
        price: '48.99',
        qty: 15,
        name: 'Football'
      }
    ];

  }
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };

   handleRowDel(product) {
    var index = this.state.items.indexOf(product);
    this.state.items.splice(index, 1);
    this.setState(this.state.items);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    console.log(id);
    var product = {
      id: id,
      name: "",
      price: "",
      category: ""
    }

    console.log("button clicket");
    this.state.items.push(product);
    this.setState(this.state.items);

  }

  itemsTabla(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
     

    var newItems =this.state.items.map(function(product) {
      for (var key in product) {
        if (key == item.name && product.id == item.id) {
        
          product.id = item.id;
          product[key] = item.value;
          console.log(product);

        }
      }
      return product;
    });
    this.setState(newItems);
    console.log(this.state.items);
  };
  render() {

    return (
      <div>
        <Fecha filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <br/>
        <TablaDinamica onProductTableUpdate={this.itemsTabla.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)}  items={this.state.items} filterText={this.state.filterText}/>
      </div>
    );

  }

}
class Fecha extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div>
        <h3> 
             <span className="label  label-info">Fecha Proceso: 2016-09-15</span>
         </h3>

        
         
      </div>

    );
  }

}





export default CapitalPrivado;