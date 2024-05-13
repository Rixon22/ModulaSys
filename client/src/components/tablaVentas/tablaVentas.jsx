import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TablaVentas = () => {
    const [ventas, setVentas] = useState([]);
    const navigateTo = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigateTo('/');
        }

        fetch('http://localhost:3001/sales', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setVentas(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    const handleAgregarVenta = () => {
        navigateTo('/agregarVenta');
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-10">
                    <div className="card">
                        <div className="card-header text-center">
                            <h4>Tabla de Ventas</h4>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <button className="btn btn-success" onClick={handleAgregarVenta}>Agregar Venta</button>
                            </div>
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>ID Venta</th>
                                        <th>Empleado</th>
                                        <th>Producto</th>
                                        <th>Cantidad Vendida</th>
                                        <th>Fecha</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ventas.map(venta => (
                                        <tr key={venta.idVenta}>
                                            <td>{venta.idVenta}</td>
                                            <td>{venta.nombreEmpleado}</td>
                                            <td>{venta.nombreProducto}</td>
                                            <td>{venta.cantidadVendida}</td>
                                            <td>{new Date(venta.fecha).toLocaleDateString()}</td>
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

export default TablaVentas;
