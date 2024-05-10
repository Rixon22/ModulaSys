import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EditarProductoForm = () => {
    const location = useLocation();
    const producto = location.state && location.state.producto ? location.state.producto : null;

    const [id, setId] = useState(producto ? producto.idinventarios : '');
    const [nombre, setNombre] = useState(producto ? producto.nombreProducto : '');
    const [existencia, setExistencia] = useState(producto ? producto.existenciaProducto : 0);
    const [precio, setPrecio] = useState(producto ? producto.precioProducto : 0);
    const [foto, setFoto] = useState(producto ? producto.urlFotoProducto : ''); // Para manejar la carga de la foto
    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            id: id,
            nombre: nombre,
            existencia: existencia,
            precio: precio,
            foto: 'url.foto.jpg'  // URL de la foto (Siempre la misma PRUEBA)
        };
        console.log(formData);
        fetch('http://localhost:3001/products/edit', {
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
                            <h4>Editar Producto</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="existencia" className="form-label">Existencia</label>
                                    <input type="number" className="form-control" id="existencia" value={existencia} onChange={(e) => setExistencia(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="precio" className="form-label">Precio</label>
                                    <input type="number" step="0.01" className="form-control" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="foto" className="form-label">Foto</label>
                                    <input type="file" className="form-control" id="foto" accept="image/*" onChange={(e) => setFoto(e.target.files[0])} />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Guardar Cambios</button>
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

export default EditarProductoForm;
