import React, { useEffect } from 'react';
import './App.css';
import AuthPages from './pages/AuthPages.js';
import axios from 'axios';
import AboutUs from './pages/AboutUs.js';
import Contact from './pages/Contact.js';
import Shop from './pages/Shop.js';
import Home from './pages/Home.js';


import {
  Routes,
  Route,
  useNavigate,
  Link} 
  from 'react-router-dom';
  // import {useNavigate} from 'react-router-dom';


axios.defaults.baseURL = 'http://localhost:4000';

function App() {

  const navigate = useNavigate();
  useEffect(()=> {
   
    if(!localStorage.hasOwnProperty('user')){
      navigate('/');
    }
  },[]);

  return (
    <div className="App">
     

<Link to="/authPage">AuthPage</Link>
<Link to="contact">Contact</Link>
<Link to="/shop">Shop</Link>
<Link to="/about">AboutUs</Link>
<Link to="/">Home</Link>

      <Routes>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/authPage" element={<AuthPages/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/about" element={<AboutUs/>}/>
     
      </Routes>

    </div>
  );
}

export default App;
