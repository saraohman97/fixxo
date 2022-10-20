import './ProductDetails.css'
import ProductDetails from './pages/ProductDetails';

import BlogPage from './components/blog/Blog-Page';
import BlogDetails from './components/blog/BlogDetails';

import Home from './Home'
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import ProductPage from './views/ProductPage'
import PopUp from './components/Modal/PopUp';
import SecondNavbar from './components/navbar/secondNavbar';
import React from 'react';

function App() {


  return (
  
    <div className="App">
    
     <Routes>
    </Routes>
    <SecondNavbar />
     <Home/>
      <Routes>
          <Route path='/home' element = {<Home/>}/>
          <Route path='/products' element = {<ProductDetails/>}/>
          <Route path='/blogdetails' element={<BlogDetails />} />
          <Route path='/blogpage' exact element={<BlogPage/>}>Route</Route>
        
      </Routes>
      <ProductPage />
      
      <Footer />

      {/* <Home /> */}
      {/* <PopUp /> */}
    </div>
  );
}


export default App;
