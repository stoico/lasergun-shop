/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchDataAsync } from '../actions/fetchProducts'
import './ProductList.css'

class ProductList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currency: {
        euro: '€',
        swissFranc: 'CHF'
      }
    }
  }

  componentDidMount = () => {
    this.props.fetchDataAsync()
  }

  render () {
    const { products } = this.props
    const productURLString = '/product/'
    return (
      <div className='container'>
        <h1 className='container-title'>Product List</h1>
        {products.map((product, index) => {
          return (
            <Link to={productURLString + product.id} key={index}>
              <div className='product-item'>
                <div className='product-image-thumb'><img src={product.images[0].thumb} alt={product.title} /></div>
                <div className='product-item-title'>{product.title}</div>
                <div className='product-item-price'>{this.state.currency.euro} {product.price}</div>
              </div>
            </Link>)
        })}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = { fetchDataAsync }

export default connect(
  mapState,
  mapDispatchToProps
)(ProductList)
