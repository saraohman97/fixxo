import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './views/Home.js'
import ProductPage from './views/ProductPage.js'
import ProductDetails from './views/ProductDetails';
import BlogDetails from './views/blog/BlogDetails';

import Footer from './components/Footer.js';
import BlogPage from './views/blog/BlogPage.js';
import SecondNavbar from './components/navbar/SecondNavbar.js';
// import PopUp from './components/Modal/PopUp';
import { useDispatch } from 'react-redux'
import { getProducts } from './store/actions/productsActions.js';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())


  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/details' element={<ProductDetails />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
      </Routes>

      <Footer />
      {/* <PopUp /> */}
    </div>
  );
}



export default App;
