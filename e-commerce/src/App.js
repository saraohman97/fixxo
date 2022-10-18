import './App.css';
import { Route , Routes} from 'react-router-dom'
import BlogPage from './components/blog/Blog-Page';
import BlogDetails from './components/blog/BlogDetails';
import React from 'react';
function App() {
  return (
    <div className="App">
    
     <Routes>
      <Route path='/' element={<BlogPage/>}>Route</Route>
      <Route path="/blogdetails" element={<BlogDetails />} />
    </Routes>
    </div>
  );
}

export default App;
