/* eslint-disable no-undef */
export const fetchProductsSuccess = (productData) => ({
  type: 'FETCH_PRODUCTS_SUCCESSFUL',
  productData
})

export const fetchProductsFail = (error) => ({
  type: 'FETCH_PRODUCTS_FAILED',
  error
})

export function fetchDataAsync () {
  return async (dispatch) => {
    try {
      const response = await fetch('http://private-5815fe-recommendationsknip.apiary-mock.com/products')
      const productData = await response.json()
      dispatch(fetchProductsSuccess(productData))
    } catch (error) {
      dispatch(fetchProductsFail(error))
    }
  }
}
