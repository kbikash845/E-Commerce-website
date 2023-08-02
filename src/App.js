import React from 'react'
import Headers from './Component/Layout/Headers'
import Product from './Component/Product/Product'
import Footer from './Component/Footer/Footer'
import CartProvider from './Component/Store/CardProvider'
import { Routes ,Route} from 'react-router-dom'
import About from './About/About'
import Home from './Component/HomePage/Home'
import ContactUs from './Component/ContactUs-Page/ContactUs'


function App() {
  return (
    <CartProvider>
      <Headers/>
      <Routes>
        <Route path='Product' element={<Product/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='Home'element={<Home/>}/>
      <Route path='ContactUs' element={<ContactUs/>}/>
      </Routes>
      
      <Footer/>
    </CartProvider>
  )
}

export default App
