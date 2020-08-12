import React from 'react';
import { NavLink } from 'react-router-dom';
import '../exercise-1/styles/App.css';
import './style/product.css'

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  render() {
    return (
      <div className="content">
        <h3>All Products:</h3>
        <div>
          <ul>
            <li><NavLink className="pro-link" to='/products/1'>Bicycle</NavLink></li>
            <li><NavLink className="pro-link" to='/products/2'>TV</NavLink></li>
            <li><NavLink className="pro-link" to='/products/3'>Pencil</NavLink></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Products;