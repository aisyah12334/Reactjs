import { useState, useEffect} from 'react';
import axios from 'axios';

import '../assets/css/home2.css';
import bg1 from "../assets/img/bg_beranda1.png";
import bg2 from "../assets/img/bg_beranda2.png";
import ekowisata1 from "../assets/img/ekowisata1.png";
import { Link } from 'react-router-dom';

// Main component
function Beranda(){

    //define state
    const [ekowisata, setEkowisata] = useState([]);

    //useEffect hook
    useEffect(() => {

        //panggil method "fetchData"
        fectData();

    }, []);

    //function "fetchData"
    const fectData = async () => {
        //fetching
        const response = await axios.get('http://localhost:3001/api/posts/ekowisata_beranda');
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        setEkowisata(data);
    }

    return (
        <main>
            <div className="container-fluid form-wisata" style={{ backgroundImage: `url(${bg1})` }}>
                <h1>Berlibur Kemana?</h1>
                <input type="text" placeholder="Cari Tempat Wisata" />
            </div>
            <div className="container-fluid text-center informasi" style={{marginTop: '20px'}}>
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
                        { ekowisata.map((post, index) => (
                            <Link to={`/Wisata/${post.url_wisata}`} style={{ textDecoration: 'none', color: 'black' }}>
                                <div className="ekowisata-list">
                                    <div className="ekowisata-img">
                                        <img src={ekowisata1} className="img-fluid" alt="" style={{width: '100%'}} />
                                    </div>
                                    <div className="ekowisata-main">
                                        <div className="ekowisata-nama">
                                            {post.nama_wisata}
                                        </div>
                                        <div className="ekowisata-deskripsi">
                                            <p>{post.deskripsi}</p>
                                        </div>
                                        <div className="ekowisata-informasi">
                                            <div className="col ekowisata-views">
                                                <b>{post.jumlah_dikunjungi}</b> Views
                                            </div>
                                            <div className="col ekowisata-rating">
                                                5.0
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )) }
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Beranda;
