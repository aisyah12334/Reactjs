import {useState, useEffect}  from 'react';
import axios from 'axios';

import '../assets/css/pemandu_wisata.css';
import pemandu1 from '../assets/img/pemandu/pemandu1.png';

function Pemandu() {
    //define state
    const [pemandu, setPemandu] = useState([]);
    const [topPemandu, setTopPemandu] = useState([]);

    //useEffect hook
    useEffect(() => {

        //panggil method "fetchData"
        fectData();

    }, []);

    //function "fetchData"
    const fectData = async () => {
        //fetching
        const responsePemandu = await axios.get('http://localhost:3001/api/posts/pemandu/rekomendasi');
        const dataPemandu = await responsePemandu.data.data;

        const responseTop = await axios.get('http://localhost:3001/api/posts/pemandu/top');
        const dataTop = await responseTop.data.data;

        //assign response data to state "posts"
        setPemandu(dataPemandu);
        setTopPemandu(dataTop);
    }

    return (
        <main>
            <div className="container-fluid">
                <div className="title">
                    Rekomendasi Pemandu
                </div>
                <div className="list-pemandu">
                {
                    pemandu.map((post, index) => (
                            <div className="informasi-pemandu">
                                <div className="img-pemandu">
                                    <img src={pemandu1} alt="" />
                                </div>
                                <div className="pemandu">
                                    <span>Nama Pemandu : {post.nama}</span>
                                    <span>Area Pemandu : {post.area} </span>
                                    <span>Lokasi Pemandu : {post.lokasi}</span>
                                    <span>Pengalaman : {post.pengalaman}</span>
                                    <span>Email : {post.email}</span>
                                </div>
                                <a href="#" className="hubungi">Hubungi Pemandu</a>
                            </div>
                    ))
                }
                </div>
                <div className="title">
                    Pemandu Terpopuler
                </div>
                <div className="list-pemandu">
                    {
                        topPemandu.map((post, index) => (
                            <div className="informasi-pemandu">
                                <div className="img-pemandu">
                                    <img src={pemandu1} alt="" />
                                </div>
                                <div className="pemandu">
                                    <span>Nama Pemandu : {post.nama}</span>
                                    <span>Area Pemandu : {post.area} </span>
                                    <span>Lokasi Pemandu : {post.lokasi}</span>
                                    <span>Pengalaman : {post.pengalaman}</span>
                                    <span>Email : {post.email}</span>
                                </div>
                                <a href="#" className="hubungi">Hubungi Pemandu</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    );
};

export default Pemandu ;
