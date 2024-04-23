import React, { useState } from 'react';
// En react dom 6 es naviguete y no history 
import { useNavigate } from 'react-router-dom';

const Log = () => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [loginSuccessful, setLoginSuccessful] = useState(false);
    const navigateTo = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            username: username,
            password: password
        };

        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                console.log(result.token);
                if (result.token) {
                    localStorage.setItem('token', result.token);
                    setLoginSuccessful(true);
                    // Redirigir a la ruta /home
                    navigateTo('/home');
                } else {
                    setLoginSuccessful(false);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <img src="../../assets/modulasyslogo-nobg.png" alt="Logo" style={{ maxWidth: '100px' }} />
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Usuario</label>
                                    <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    Iniciar sesión
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Log.displayName = 'Log';
export default Log;
