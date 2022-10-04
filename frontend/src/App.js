import React, { useEffect } from 'react';
import './App.css';
import AuthPages from './pages/AuthPages.js';
import axios from 'axios';
import AboutUs from './pages/AboutUs.js';
import Contact from './pages/Contact.js';
import Shop from './pages/Shop.js';
import Home from './pages/Home.js';
import ActivateUserPage from './pages/ActivateUserPage/ActivateUserPage';
import AdPage from './pages/AdPage/AdPage';
// import {useSelector} from 'react-redux';
import Navigation from './navigation/Navigation';
import { useDispatch } from 'react-redux';
import {setUser} from './redux/userSlice'


import {
  Routes,
  Route,
  useNavigate} 
  from 'react-router-dom';
  // import {useNavigate} from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:4000';

function App() { 

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=> {
   
    if(!localStorage.hasOwnProperty('user')){
      // navigate('/authPage');  
    }
    else {
      dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
    }
  },[]);

  return (
    <div className="App">
     <Navigation/>

      <Routes>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/authPage" element={<AuthPages/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/shop/ad/:adId" element={<AdPage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/user-activate/:id" element={<ActivateUserPage/>}/>
     
      </Routes>

    </div>
  );

  }

export default App;
