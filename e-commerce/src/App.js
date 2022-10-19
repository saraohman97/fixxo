import './App.css';

import Home from './views/Home'
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import PopUp from './components/Modal/PopUp';
import SecondNavbar from './components/navbar/SecondNavbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
    <SecondNavbar />
      <Home />

      <Footer />

      {/* <Home /> */}
      {/* <PopUp /> */}
    </div>
  );
}

export default App;
