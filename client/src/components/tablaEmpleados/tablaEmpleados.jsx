import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TablaEmpleados = () => {
    const [empleados, setEmpleados] = useState([]);
    const navigateTo = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigateTo('/');
        }

        fetch('http://localhost:3001/employees', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setEmpleados(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-10">
                    <div className="card">
                        <div className="card-header text-center">
                            <h4>Tabla de empleados</h4>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Dirección</th>
                                        <th>Foto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {empleados.map(empleado => (
                                        <tr key={empleado.idempleado}>
                                            <td>{empleado.nombreEmpleado}</td>
                                            <td>{empleado.apellidEmpleado}</td>
                                            <td>{empleado.direaccionEmpleado}</td>
                                            <td><img src={`http://localhost:3001/images/${empleado.urlFotoEmpleado}`} alt={empleado.nombreEmpleado} style={{ width: '50px' }} /></td>
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

export default TablaEmpleados;
