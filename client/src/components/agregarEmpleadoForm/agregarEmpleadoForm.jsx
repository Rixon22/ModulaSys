import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AgregarEmpleadoForm = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [direccion, setDireccion] = useState('');
    const [foto, setFoto] = useState(null); // Para manejar la carga de la foto
    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = {
            nombre: nombre,
            apellido: apellido,
            direccion: direccion,
            foto: 'url.foto.jpg' // URL de la foto (Siempre la misma PRUEBA)
        };
    
        fetch('http://localhost:3001/employees/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                navigateTo('/personal');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h4>Agregar Empleado</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="apellido" className="form-label">Apellido</label>
                                    <input type="text" className="form-control" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="direccion" className="form-label">Dirección</label>
                                    <input type="text" className="form-control" id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="foto" className="form-label">Foto</label>
                                    <input type="file" className="form-control" id="foto" accept="image/*" onChange={(e) => setFoto(e.target.files[0])} />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Agregar</button>
                                    <button type="button" className="btn btn-secondary" onClick={() => navigateTo('/personal')}>Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgregarEmpleadoForm;
