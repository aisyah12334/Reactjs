import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../assets/css/list_wisata.css';
import ekowisata1 from '../assets/img/ekowisata/pantai.png';
import rating from '../assets/img/rating.png';
import lokasi from '../assets/img/lokasi.png'

function Ekowisata() {
    //define state
    const [wisata, setWisata] = useState([]);

    //useEffect hook
    useEffect(() => {

        //panggil method "fetchData"
        fectData();

    }, []);

    //function "fetchData"
    const fectData = async () => {
        //fetching
        const response = await axios.get('http://localhost:3001/api/posts/wisata');
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        setWisata(data);
    }

    return (
        <main>
            <div className="container-fluid">
                <h3 className="title">Rekomendasi Ekowisata Terbaik</h3>
                <div className="list-wisata">
                    { wisata.map((post, index) => (
                        <Link to={`/wisata/${post.url_wisata}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <div className="ekowisata">
                                <img src={ekowisata1} alt="" className="img-fluid" />
                                <div className="ekowisata-informasi">
                                    <div className="row">
                                        <div className="col-6">
                                            <b>{post.jumlah_dikunjungi} </b>
                                            <span>Views</span>
                                        </div>
                                        {/* <div className="col-6 text-end rating">
                                            5
                                            <img src={rating} className="img-fluid img-rating" alt="" />
                                        </div> */}
                                    </div>
                                </div>
                                <div className="ekowisata-deskripsi">
                                    <h3>{post.nama_wisata}</h3>
                                    <div className="ekowisata-lokasi">
                                        <img src={lokasi} className="img-fluid img-lokasi" alt="" />
                                        {post.lokasi}
                                    </div>
                                    <p className="ekowisata-isi">
                                        {post.deskripsi}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Ekowisata ;
