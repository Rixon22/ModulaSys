import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TablaProductos = () => {
    const [productos, setProductos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Cambio aquí

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        }

        fetch('http://localhost:3001/products', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setProductos(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [navigate]);

    const filteredProductos = productos.filter(producto => {
        return (
            producto.nombreProducto.toLowerCase().includes(searchTerm.toLowerCase()) ||
            producto.precioProducto.toString().includes(searchTerm.toLowerCase())
        );
    });

    const handleEdit = (producto) => {
        navigate('/editarProducto', { state: { producto} }); // Cambio aquí
    };

    const handleDelete = (id) => {
        // Acción de eliminar, podrías mostrar un modal de confirmación
    };

    const handleAddProduct = () => {
        navigate('/agregarProducto'); 
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-10">
                    <div className="card">
                        <div className="card-header text-center">
                            <h4>Tabla de productos</h4>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Buscar por nombre de producto o precio"
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-success" onClick={handleAddProduct}>Agregar Producto</button>
                            </div>
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Nombre Producto</th>
                                        <th>Existencia</th>
                                        <th>Precio</th>
                                        <th>Foto</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredProductos.map(producto => (
                                        <tr key={producto.idinventarios}>
                                            <td>{producto.nombreProducto}</td>
                                            <td>{producto.existenciaProducto}</td>
                                            <td>${producto.precioProducto}</td>
                                            <td><img src={producto.urlFotoProducto} alt={producto.nombreProducto} style={{ width: '50px' }} /></td>
                                            <td>
                                                <button className="btn btn-primary mr-2" style={{ margin: '5px' }}  onClick={() => handleEdit(producto)}>Editar</button>
                                                <button className="btn btn-danger" onClick={() => handleDelete(producto.idinventarios)}>Eliminar</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TablaProductos;
