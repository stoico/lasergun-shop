import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import ProductList from './components/ProductList'
import ProductItem from './components/ProductItem'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/product/:id' children={<ProductItem />} />
        <Route path='/'>
          <ProductList />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
