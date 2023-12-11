import React from 'react';
import '../assets/css/home2.css';
import bg1 from "../../src/assets/img/cover.jpg";
import bg2 from "../assets/img/bg_beranda2.png";
import ekowisata1 from "../assets/img/ekowisata1.png";

// Main component
const Beranda = () => {
    return (
        <main>
            <div className="container-fluid form-wisata" style={{ backgroundImage: `url(${bg1})` }}>
                <h1>Berlibur Kemana?</h1>
                <input type="text" placeholder="Cari Tempat Wisata" />
            </div>
            <div className="container-fluid text-center informasi">
                <div className="row">
                    <div className="col-6">
                        <img className="img-fluid" src={bg2} alt="" />
                    </div>
                    <div className="col-6 informasi-wisata">
                        <h2>Bingung Liburan Ke Mana? Isi Liburan #DiTanjungpinang Aja Yuk!</h2>
                        <span>
                            Liburan yang baik itu dimulai dari saat Anda merencanakannya. Jadi, untuk menikmati pesona alam Tanjung
                            Pinang, hal
                            terbaik yang bisa Anda lakukan yaitu mempersiapkan diri untuk situasi baik atau kurang baik selama liburan.
                            Meskipun
                            Anda merasa aman dan sehat untuk menjelajahi keindahan tempat wisata di Tanjung Pinang, tidak ada salahnya
                            untuk
                            mengetahui beberapa info & tips ketika Anda mengunjungi tempat-tempat tertentu. Di sini, kami memiliki
                            banyak informasi
                            berguna yang dapat Anda gunakan seperti gambaran tempat wisata yang akan anda kunjungi serta kami juga
                            menawarkan
                            pemandu wisata juga anda membutuhkannya. Ayo cek sekarang juga!
                        </span>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <h1>Top ekowisata</h1>
                    </div>
                    <div className="col-6">
                        <span className="lihat-ekowisata">Lihat semua ekowisata</span>
                    </div>
                    <div className="ekowisata-form">
                        <div className="ekowisata-list">
                            <div className="ekowisata-img">
                                <a href="deskripsi_wisata.html"><img src={ekowisata1} className="img-fluid" alt="" /></a>
                            </div>
                            <div className="ekowisata-main">
                                <div className="ekowisata-nama">
                                    Vihaya Ksitigarbha Bodhisattba
                                </div>
                                <div className="ekowisata-deskripsi">
                                    Vihara Ksitigarbha Bodhisattva yang merupakan tempat beribadah umat Budha kini juga dapat menjadi destinasi wisata religi di Kota Tanjungpinang dan Provinsi Kepulauan Riau. Pembangunan vihara ini berlangsung selama 14 tahun dan memiliki...
                                </div>
                                <div className="ekowisata-informasi">
                                    <div className="col ekowisata-views">
                                        <b>1000</b> Views
                                    </div>
                                    <div className="col ekowisata-rating">
                                        4.8
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ekowisata-list">
                            <div className="ekowisata-img">
                                <a href="deskripsi_wisata.html"><img src={ekowisata1} className="img-fluid" alt="" /></a>
                            </div>
                            <div className="ekowisata-main">
                                <div className="ekowisata-nama">
                                    Vihaya Ksitigarbha Bodhisattba
                                </div>
                                <div className="ekowisata-deskripsi">
                                    Vihara Ksitigarbha Bodhisattva yang merupakan tempat beribadah umat Budha kini juga dapat menjadi destinasi wisata religi di Kota Tanjungpinang dan Provinsi Kepulauan Riau. Pembangunan vihara ini berlangsung selama 14 tahun dan memiliki...
                                </div>
                                <div className="ekowisata-informasi">
                                    <div className="col ekowisata-views">
                                        <b>1000</b> Views
                                    </div>
                                    <div className="col ekowisata-rating">
                                        4.8
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ekowisata-list">
                            <div className="ekowisata-img">
                                <a href="deskripsi_wisata.html"><img src={ekowisata1} className="img-fluid" alt="" /></a>
                            </div>
                            <div className="ekowisata-main">
                                <div className="ekowisata-nama">
                                    Vihaya Ksitigarbha Bodhisattba
                                </div>
                                <div className="ekowisata-deskripsi">
                                    Vihara Ksitigarbha Bodhisattva yang merupakan tempat beribadah umat Budha kini juga dapat menjadi destinasi wisata religi di Kota Tanjungpinang dan Provinsi Kepulauan Riau. Pembangunan vihara ini berlangsung selama 14 tahun dan memiliki...
                                </div>
                                <div className="ekowisata-informasi">
                                    <div className="col ekowisata-views">
                                        <b>1000</b> Views
                                    </div>
                                    <div className="col ekowisata-rating">
                                        4.8
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export {Beranda};
