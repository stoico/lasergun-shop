import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDataAsync } from '../actions/fetchProducts'

import './ProductList.css'
import './ProductItem.css'
import CommentSection from './CommentSection'

const ProductItem = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [selectedImageURL, setSelectedImageURL] = useState('')
  // Get product ID param passed in the URL
  let { id } = useParams()
  // Param is passed as a String,
  // convert to Number
  id = Number(id)

  // Get the first product of the array that matches the URL paramater
  let [product] = useSelector((state) => state.products.filter((eachProduct) => eachProduct.id === id))

  if (!product) {
    const products = dispatch(fetchDataAsync())

    try {
      product = products.filter((eachProduct) => eachProduct.id === id)
    } catch (error) {

    }
  }

  useEffect(() => {
    if (product) {
      setSelectedImageURL(product.images[0].original)
    }
  }, [product])

  if (product) {
    return (
      <>
        <div className='container'>
          <div className='heading'>
            <div className='go-back'><button onClick={() => history.goBack()} type='button'>⟵</button></div>
            <div className='product-heading'>{product.title}</div>
            <div className='price'>
              €
              {' '}
              {product.price}
            </div>
          </div>
          <div className='image-displayed'>
            <img src={selectedImageURL} alt={`${product.title}`} />
          </div>
          <div className='gallery'>
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image.thumb}
                className={selectedImageURL === image.original ? 'selected-image' : null}
                onClick={() => setSelectedImageURL(image.original)}
                alt={`${product.title} - ${index}`}
              />
            ))}
          </div>
          <div className='description'>
            <h3>Description</h3>
            <p>
              {product.description}
            </p>
          </div>
          <div className='specification'>
            <h3>Specification</h3>
            <p>
              {product.specification}
            </p>
          </div>
        </div>
        <CommentSection id={id} />
      </>
    )
  }

  return (
    <div className='container' />
  )
}

export default ProductItem
