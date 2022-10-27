import './views/styles/ProductDetails.css'
import ProductDetails from './views/ProductDetails';

import BlogPage from './views/blog/BlogPage';

import Home from './views/Home'
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import ProductPage from './views/ProductPage'
import PopUp from './components/Modal/PopUp';
import SecondNavbar from './components/navbar/SecondNavbar';
import React from 'react';
import BlogDetails from './components/blog/BlogDetails';

function App() {


  return (
  
    <div className="App">
    
     <Routes>
    </Routes>
    <SecondNavbar />
    
      <Routes>
          <Route path='/home' element = {<Home/>}/>
          <Route path='/products' element = {<ProductDetails/>}/>
          <Route path='/blogdetails' exact element={<BlogDetails/>}/>
          <Route path='/blogpage' exact element={<BlogPage/>}/>
        
      </Routes>
      <ProductPage />
      
      <Footer />

      {/* <Home /> */}
      {/* <PopUp /> */}
    </div>
  );
}


export default App;
