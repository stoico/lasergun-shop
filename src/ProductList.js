import React from 'react';
import './ProductList.css';
// import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      productInformation: [],
      currency: '€'
    }
  }

  componentDidMount = () => {
    this.retrieveProductData();
  }

  retrieveProductData = async() => {
    await fetch('http://private-5815fe-recommendationsknip.apiary-mock.com/products')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          productInformation: data
        })
      });
  }

  render() {
    return (
      <div className="container">
        <h1 className="container-title">Product List</h1>
        {this.state.productInformation.map((product, index) => {
          return (
          <div className="product-item" key={index}>
            <div className="product-image-thumb"><img src={product.images[0].thumb} alt={product.title} /></div>
            <div className="product-item-title">{product.title}</div>
            <div className="product-item-price">{this.state.currency} {product.price}</div>
          </div>)
          })
        }
    </div>
  );
}
}

export default App;
