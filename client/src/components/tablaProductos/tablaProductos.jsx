import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TablaProductos = () => {
    const [productos, setProductos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigateTo = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigateTo('/');
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
    }, []);

    const filteredProductos = productos.filter(producto => {
        return (
            producto.nombreProducto.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    const handleEdit = (id) => {
        // Acción de editar, podrías redirigir a una página de edición
    };

    const handleDelete = (id) => {
        // Acción de eliminar, podrías mostrar un modal de confirmación
    };

    const handleAddProduct = () => {
        // Redirigir a la página de agregar producto
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
                                    placeholder="Buscar por nombre de producto"
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
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredProductos.map(producto => (
                                        <tr key={producto.idinventarios}>
                                            <td>{producto.nombreProducto}</td>
                                            <td>{producto.existenciaProducto}</td>
                                            <td>
                                                <button className="btn btn-primary mr-2" style={{ margin: '5px' }} onClick={() => handleEdit(producto.idinventarios)}>Editar</button>
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
