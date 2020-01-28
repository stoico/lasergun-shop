const products = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESSFUL':
      return action.productData
    case 'FETCH_PRODUCTS_FAILED':
      return state
    default:
      return state
  }
}

export default products
