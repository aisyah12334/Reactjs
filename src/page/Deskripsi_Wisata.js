import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import '../assets/css/deskripsi_wisata.css';
import ekowisata1 from '../assets/img/ekowisata/pantai.png';
import rating from '../assets/img/rating.png';
import lokasi from '../assets/img/lokasi.png'

export default function Publikasi() {
    const [wisata, setWisata] = useState([]);
    const {url_wisata} = useParams();

    //useEffect hook
    useEffect(() => {

        //panggil method "fetchData"
        fectData();

    }, []);

    //function "fetchData"
    const fectData = async () => {
        //fetching
        const response = await axios.get(`http://localhost:3001/api/posts/wisata/${url_wisata}`);
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        setWisata(data);
    }

    return (
        <main className='deskripsi_wisata'>
            <div className="container-fluid">
                <h3>{wisata.nama_wisata}</h3>

                <img src={ekowisata1} className="img-fluid gambar-utama" alt="" />
                <div className="list-img">
                    <img src={ekowisata1} alt="" />
                    <img src={ekowisata1} alt="" />
                    <img src={ekowisata1} className="gambar-lihat" alt="" />
                    <img src={ekowisata1} alt="" />
                    <img src={ekowisata1} alt="" />
                </div>
                <div className="row" style={{ marginTop: '30px' }}>
                    <div className="col-8">
                        <div dangerouslySetInnerHTML={{ __html: wisata.isi }} />
                    </div>
                    <div className="col-4">
                        <div className="ekowisata-map">
                            <img src="" className="img-fluid" alt="" />
                            <div className="ekowisata-informasi">
                                <span>Rating </span>
                                <span className="ekowisata-rating float-end" style={{ textAlign: 'right' }}>5.0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};