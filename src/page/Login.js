import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/lp.css';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login ({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div className="container">
            <header>Masuk</header>
            <form action="#" autoComplete="off">
                <div className="field email-field">
                    <div className="input-field">
                        <input type="email" placeholder="Masukkan Email" className="email" />
                    </div>
                    <span className="error email-error">
                        <i className="bx bx-error-circle error-icon" />
                        <p className="error-text">tolong masukkan email yang benar</p>
                    </span>
                </div>
                <div className="field create-password">
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Masukan password"
                            className="password"
                        />
                        <i className="bx bx-hide show-hide" />
                    </div>
                    <span className="error password-error">
                        <i className="bx bx-error-circle error-icon" />
                        <p className="error-text">
                            Silakan masukkan minimal 8 karakter dengan angka, simbol, huruf kecil
                            dan kapital.
                        </p>
                    </span>
                </div>
                <div className="input-field button">
                    <Link to="/Profile" className="login" >Login</Link>
                </div>
                <div className="dialog">
                    <div className="remember">
                        <div className="always-visible">
                            <input type="checkbox" /> Ingat Saya
                        </div>
                    </div>
                </div>
            </form>
            <h5 classname="akun">
                Belum punya akun ?<Link to="/Register">Buat Akun</Link>
                <br />
                <Link to="/Lupa_Password">Lupa Password ?</Link>
            </h5>
        </div>

    );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
