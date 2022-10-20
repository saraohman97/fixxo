import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './views/Home.js'
import ProductPage from './views/ProductPage.js'
import ProductDetails from './views/ProductDetails';
import BlogDetails from './views/blog/BlogDetails';

import Footer from './components/Footer.js';
import BlogPage from './views/blog/BlogPage.js';
// import PopUp from './components/Modal/PopUp';


function App() {
  return (
    <div className="App">
        
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/products' element={ <ProductPage /> } />
        <Route path='/details' element = { <ProductDetails/> } />
        <Route path="/blogpage" element={ <BlogPage /> } />
        <Route path="/blogdetails" element={ <BlogDetails /> } />
      </Routes>
      
      <Footer />
      {/* <PopUp /> */}
    </div>
  );
}



export default App;
