import React from 'react';
import logo from '../assets/img/Baldwin.png';
import '../assets/css/footer.css'

function Footer() {
    return (
        <footer class="container-fluid">
            <h1 class="footer-title">Kontak kami</h1>
            <div class="row footer-deskripsi">
                <div class="col-5">
                    <div class="row">
                        <div class="col-6">
                            <img src={logo} alt="" />
                        </div>
                        <div class="col-6 footer-informasi">
                            <h3>VISTA WISATA</h3>
                            <h4>Jelajahi Destinasi Impianmu</h4>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <h3>Temui Kami</h3>
                    +62 8231312312<br />
                    Jl. Telukjambe, Tanjung Pinang
                </div>
                <div class="col-3">
                    <h3>Perusahaan</h3>
                    Tentang
                    <h3>Kontak</h3>
                    email
                </div>
            </div>
        </footer>
    );
};

export default Footer;
