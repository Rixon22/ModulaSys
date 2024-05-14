import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TablaEmpleados = () => {
    const [empleados, setEmpleados] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
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

    const filteredEmpleados = empleados.filter(empleado => {
        return (
            empleado.nombreEmpleado.toLowerCase().includes(searchTerm.toLowerCase()) ||
            empleado.apellidEmpleado.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    const handleEdit = (empleado) => {
        navigateTo('/editarEmpleado', { state: { empleado } });
    };    

    const handleDelete = (id) => {
        const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este empleado?');
    
        if (confirmDelete) {
            const token = localStorage.getItem('token');
            if (!token) {
                navigateTo('/');
            }
    
            fetch('http://localhost:3001/employees/delete', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id })
            })
            .then(response => {
                if (response.ok) {
                    // Empleado eliminado exitosamente
                    // Actualizar la lista de empleados
                    setEmpleados(empleados.filter(empleado => empleado.idempleado !== id));
                } else {
                    throw new Error('Error al eliminar el empleado');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    };
    
    const handleAddEmployee = () => {
        navigateTo('/modificarEmpleado');
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-10">
                    <div className="card">
                        <div className="card-header text-center">
                            <h4>Tabla de empleados</h4>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Buscar por nombre o apellido"
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-success" onClick={handleAddEmployee}>Agregar Empleado</button>
                            </div>
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Dirección</th>
                                        <th>Foto</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredEmpleados.map(empleado => (
                                        <tr key={empleado.idempleado}>
                                            <td>{empleado.nombreEmpleado}</td>
                                            <td>{empleado.apellidEmpleado}</td>
                                            <td>{empleado.direaccionEmpleado}</td>
                                            <td><img src={empleado.urlFotoEmpleado} alt={empleado.nombreEmpleado} style={{ width: '50px' }} /></td>
                                            <td>
                                                <button className="btn btn-primary mr-2" style={{ margin: '5px' }} onClick={() => handleEdit(empleado)}>Editar</button>
                                                <button className="btn btn-danger" onClick={() => handleDelete(empleado.idempleado)}>Eliminar</button>
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

export default TablaEmpleados;
