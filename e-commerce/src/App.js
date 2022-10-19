import './ProductDetails.css'
import ProductDetails from './pages/ProductDetails';
import './App.css';
import BlogPage from './components/blog/Blog-Page';
import BlogDetails from './components/blog/BlogDetails';

import Home from './views/Home'
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import ProductPage from './views/ProductPage'
import PopUp from './components/Modal/PopUp';
import SecondNavbar from './components/navbar/SecondNavbar';
import Home from './Home';

function App() {


  return (
  


    <div className="App">
    
     <Routes>
    </Routes>
    <SecondNavbar />
      <Home />
      <Routes>
        <Route path='/' element = {<ProductDetails/>}/>
      <Route path="/blogdetails" element={<BlogDetails />} />
      <Route path='/' element={<BlogPage/>}>Route</Route>
        
      </Routes>
      <ProductPage />
      
      <Footer />

      {/* <Home /> */}
      {/* <PopUp /> */}
    </div>
  );
}



export default App;
