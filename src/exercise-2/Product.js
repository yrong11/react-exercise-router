import React from 'react';
import '../exercise-1/styles/App.css'

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        "id": 1,
        "name": "Bicycle",
        "price": 30,
        "quantity": 15,
        "desc": "Bicycle is Good"
      },
      {
        "id": 2,
        "name": "TV",
        "price": 40,
        "quantity": 16,
        "desc": "TV is good"
      },
      {
        "id": 3,
        "name": "Pencil",
        "price": 50,
        "quantity": 17,
        "desc": "Pencil is good"
      }
      ],
      showProduct: {},
    }
  }

  getProductById(id) {
    var obj = this.state.data.find(function (pro) {
      return pro.id == id
    })
    console.log(obj)
    return obj;
  }
  componentDidMount() {
    console.log(this.props.match.params.id)
    this.setState({
      showProduct: this.getProductById(this.props.match.params.id),
    })
  }
  render() {
    return (
      <div className="content">
        <h2>Product Details:</h2>
        <div>
          <p>Name: {this.state.showProduct.name}</p>
          <p>Id: {this.state.showProduct.id}</p>
          <p>Price: {this.state.showProduct.price}</p>
          <p>Quantity: {this.state.showProduct.quantity}</p>
          <p>Desc: {this.state.showProduct.desc}</p>
          <p>URL: {this.props.location.pathname}</p>
        </div>

      </div>
    )
  }

}

export default Product;