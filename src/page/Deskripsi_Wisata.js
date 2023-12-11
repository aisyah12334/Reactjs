import React from 'react';
import '../assets/css/deskripsi_wisata.css';
import ekowisata1 from '../assets/img/ekowisata/pantai.png';
import rating from '../assets/img/rating.png';
import lokasi from '../assets/img/lokasi.png'

export default function Publikasi() {
    const [wisata, setWisata] = useState([]);

    //useEffect hook
    useEffect(() => {

        //panggil method "fetchData"
        fectData();

    }, []);

    //function "fetchData"
    const fectData = async () => {
        //fetching
        const response = await axios.get('http://localhost:3001/api/posts/wisata/');
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        setWisata(data);
    }

    return (
        <main className='deskripsi_wisata'>
            <div className="container-fluid">
                <h3>Pantai Tanjung</h3>

                <img src="assets/img/ekowisata/pantai.png" className="img-fluid gambar-utama" alt="" />
                <div className="list-img">
                    <img src="assets/img/ekowisata/pantai.png" alt="" />
                    <img src="assets/img/ekowisata/pantai.png" alt="" />
                    <img src="assets/img/ekowisata/pantai.png" className="gambar-lihat" alt="" />
                    <img src="assets/img/ekowisata/pantai.png" alt="" />
                    <img src="assets/img/ekowisata/pantai.png" alt="" />
                </div>
                <div className="row" style={{ marginTop: '30px' }}>
                    <div className="col-8">
                        <p>
                            <b>Yogyakarta lagi?</b> kota ini sepertinya memiliki magnet yang membuat wisatawan ingin selalu kembali. Pesona alam serta aura yang dimiliki kota istimewa ini sangat menenangkan menjadi tujuan para wisatawan. Selain itu, beragamnya tempat wisata di Jogja juga menjadi alasan utama selalu ramai. Salah satunya yang lagi viral ialah Wisata Batu Kapal di Piyungan Bantul, sebuah tempat wisata alam yang cocok dikunjungi bersama keluarga.
                        </p>
                        <p>
                            <b>Tiket Masuk Wisata Batu Kapal Piyungan Jogja Terbaru</b>
                            Pengelola wisata Batu Kapal Jogja masih belum menetapkan HTM’nya. Kali ini wisatawan hanya membayar HTM Wisata Batu Kapal seiklasnya.
                        </p>
                    </div>
                    <div className="col-4">
                        <div className="ekowisata-map">
                            <img src="assets/img/maps.png" className="img-fluid" alt="" />
                            <div className="ekowisata-informasi">
                                <span>Rating</span>
                                <span className="ekowisata-rating float-end" style={{ textAlign: 'right' }}>4.9</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};