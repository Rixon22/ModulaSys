import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AgregarProductoForm = () => {
    const [nombre, setNombre] = useState('');
    const [existencia, setExistencia] = useState(0);
    const [precio, setPrecio] = useState(0);
    const [foto, setFoto] = useState(null); // Para manejar la carga de la foto
    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            nombre: nombre,
            existencia: existencia,
            precio: precio,
            foto: 'url.foto.jpg' // URL de la foto (Siempre la misma PRUEBA)
        }
        console.log(formData);
        fetch('http://localhost:3001/products/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                navigateTo('/inventarios');
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
                            <h4>Agregar Producto</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="existencia" className="form-label">Existencia</label>
                                    <input type="number" className="form-control" id="existencia" value={existencia} onChange={(e) => setExistencia(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="precio" className="form-label">Precio</label>
                                    <input type="number" step="0.01" className="form-control" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="foto" className="form-label">Foto</label>
                                    <input type="file" className="form-control" id="foto" accept="image/*" onChange={(e) => setFoto(e.target.files[0])} required />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Agregar</button>
                                    <button type="button" className="btn btn-secondary" onClick={() => navigateTo('/inventarios')}>Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgregarProductoForm;
