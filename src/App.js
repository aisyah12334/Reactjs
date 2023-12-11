// import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

import Header from './include/Header.js';
import Footer from './include/Footer.js';

import Beranda from './page/Beranda.js';
import Pemandu from './page/Pemandu.js';
import Ekowisata from './page/Ekowisata.js';
import Publikasi from './page/Publikasi.js';
import Login from './page/Login.js';
import Profile from './page/Profile.js';
import Deskripsi_Wisata from './page/Deskripsi_Wisata.js';

import './assets/bootstrap/css/bootstrap.css';
import './assets/bootstrap/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        {/* Define a Route for Login without Header and Footer */}
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Beranda />} />
          
        <Route path="/Pemandu" element={<Pemandu />} />
        <Route path="/Ekowisata" element={<Ekowisata />} />
        <Route path="/Publikasi" element={<Publikasi />} />
        <Route path="/Profile" element={<Profile />} /> 
        <Route path="/Wisata/:url_wisata" element={<Deskripsi_Wisata />} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;

