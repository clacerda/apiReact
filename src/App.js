import './App.css';  
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';

function App() {
 
    return(
      <div>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/About">Sobre</Link>
          </li> 
        </ul>
        <Routes>
          <Route path='/' element={< Home />} /> 
          <Route path='/About' element={< About />} /> 
        </Routes>
      </BrowserRouter>
      </div>
    )
  } 
 

export default App;
