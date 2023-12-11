import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/header.css';

function Header() {
    return (
        <header>
            <div className="logo">
                Vista Wisata
            </div>
            <nav className="navbar">
                <Link to="/">Beranda</Link>
                <Link to="/Pemandu">Pemandu</Link>
                <Link to="/Publikasi">Publikasi</Link>
                <Link to="/Ekowisata">Ekowisata</Link>
            </nav>
            <Link to="/Profile" className='login'>Masuk</Link>
        </header>
    );
};

export default Header;
