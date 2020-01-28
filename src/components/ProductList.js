/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataAsync } from '../actions/fetchProducts'
import './ProductList.css'

const ProductList = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)

  const productURLString = '/product/'
  const currency = {
    euro: '€',
    swissFranc: 'CHF'
  }

  useEffect(() => {
    dispatch(fetchDataAsync())
  }, [dispatch])

  return (
    <div className='container'>
      <h1 className='container-title'>Product List</h1>
      {products.map((product, index) => {
        return (
          <Link to={productURLString + product.id} key={index}>
            <div className='product-item'>
              <div className='product-image-thumb'><img src={product.images[0].thumb} alt={product.title} /></div>
              <div className='product-item-title'>{product.title}</div>
              <div className='product-item-price'>{currency.euro} {product.price}</div>
            </div>
          </Link>)
      })}
    </div>
  )
}

export default ProductList
