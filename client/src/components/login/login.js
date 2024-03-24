import React, { useState } from 'react';
import axios from 'axios';

const Log = () => {
    const [username, setUsername] = useState(''); // Estado para el nombre de usuario
    const [password, setPassword] = useState(''); // Estado para la contraseña
    const [error, setError] = useState(''); // Estado para el mensaje de error

    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
        
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            
            if (!response.ok) {
                throw new Error('Inicio de sesión fallido');
            }

            // Si la respuesta es exitosa, redirige al usuario o realiza otra acción según sea necesario
            window.location.href = '/'; // Ejemplo de redirección
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <img src="../../assets/modulasyslogo-nobg.png" alt="Logo" style={{ maxWidth: '100px' }}/>
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
                                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                                <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
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
