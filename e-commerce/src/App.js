import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home />

      <Footer />
    </div>
  );
}

export default App;
