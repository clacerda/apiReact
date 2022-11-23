import './App.css';  
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';

function App() {
 
    return(
      <div>
            <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li> 
        </ul>
        <Routes>
          <Route path='/' element={< Home />} /> 
        </Routes>
      </BrowserRouter>
      </div>
    )
  } 
 

export default App;
