import './ProductDetails.css'
import ProductDetails from './pages/ProductDetails';
import './App.css';

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
    <SecondNavbar />
      <Home />
      <Routes>
        <Route path='/' element = {<ProductDetails/>}/>
      </Routes>
      <ProductPage />
      
      <Footer />

      {/* <Home /> */}
      {/* <PopUp /> */}
    </div>
  );
}



export default App;
