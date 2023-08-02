import React from 'react'
import Headers from './Component/Layout/Headers'
import Product from './Component/Product/Product'
import Footer from './Component/Footer/Footer'
import CartProvider from './Component/Store/CardProvider'


function App() {
  return (
    <CartProvider>
      <Headers/>
      <Product/>
      <Footer/>
    </CartProvider>
  )
}

export default App
