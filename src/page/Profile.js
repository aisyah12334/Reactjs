import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/profile.css';

import user from '../assets/img/user.png';

export default function Profile() {
    return (
        <main className="profile-main">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <h3 className="col-sm-4 text-end title">Akun Pengguna</h3>
                        <form action="#">
                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label text-end">
                                    Foto Profile
                                </label>
                                <div className="col-sm-5">
                                    <input type="file" className="form-control" />
                                    <span className="maks-file">ukuran maksimal gambar 1 MB</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label text-end">Nama</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label text-end">
                                    Nama Pengguna
                                </label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label text-end">Email</label>
                                <div className="col-sm-5">
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-5 offset-md-4 autentifikasi">
                                    <div className="keluar">Keluar</div>
                                    <div className="hapus_akun">Hapus Akun saya</div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-4 setting">
                        <div className="row akun">
                            <div className="col-2">
                                <img src={user} alt="" />
                            </div>
                            <div className="col">
                                <b>Cinta Alam</b>
                                <br />
                                <a href="">LIHAT PROFILE KAMU</a>
                            </div>
                        </div>
                        <div className="list-menu">
                            <a className="menu" href="#">
                                Pribadi
                            </a>
                            <a className="menu" href="#">
                                Notifikasi
                            </a>
                            <a className="menu" href="#">
                                Kata Sandi
                            </a>
                            <Link className="menu" to="/Pemandu">Pesan Pemandu</Link>
                            <Link className="menu" to="/Publikasi">
                                Publikasi
                            </Link>
                            <a className="menu active" href="#">
                                Akun
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};