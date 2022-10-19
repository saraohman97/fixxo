import './ProductDetails.css'
import ProductDetails from './pages/ProductDetails';
import {  Routes, Route } from 'react-router-dom'

function App() {


  return (
  
      <Routes>
        <Route path='/' element = {<ProductDetails/>}/>
  
      </Routes>

  );
}



export default App;
