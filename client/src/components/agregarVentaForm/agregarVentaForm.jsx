import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AgregarVentaForm = () => {
    const [empleadoId, setEmpleadoId] = useState('');
    const [productoId, setProductoId] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [empleado, setEmpleado] = useState(null);
    const [productoNombre, setProductoNombre] = useState('');
    const [empleados, setEmpleados] = useState([]);
    const [productos, setProductos] = useState([]);
    const [fecha, setFecha] = useState(new Date().toISOString().split('T')[0]); // Fecha actual en formato YYYY-MM-DD
    const [confirmacionVisible, setConfirmacionVisible] = useState(false);
    const navigateTo = useNavigate();

    useEffect(() => {
        // Obtener la lista de empleados
        fetch('http://localhost:3001/employees')
            .then(response => response.json())
            .then(data => setEmpleados(data))
            .catch(error => console.error('Error:', error));

        // Obtener la lista de productos
        fetch('http://localhost:3001/products')
            .then(response => response.json())
            .then(data => setProductos(data))
            .catch(error => console.error('Error:', error));
    }, []);

    useEffect(() => {
        // Buscar el empleado por ID
        if (empleadoId) {
            const empleadoSeleccionado = empleados.find(emp => emp.id === parseInt(empleadoId));
            setEmpleado(empleadoSeleccionado);
        } else {
            setEmpleado(null);
        }
    }, [empleadoId, empleados]);

    useEffect(() => {
        // Buscar el producto por ID
        if (productoId) {
            const productoSeleccionado = productos.find(prod => prod.id === parseInt(productoId));
            setProductoNombre(productoSeleccionado ? productoSeleccionado.nombre : '');
        } else {
            setProductoNombre('');
        }
    }, [productoId, productos]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmacionVisible(true);
    };

    const handleConfirmarVenta = () => {
        const formData = {
            empleadoId: empleadoId,
            productoId: productoId,
            cantidad: cantidad,
            fecha: fecha
        };
        fetch('http://localhost:3001/sales/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                // Venta agregada exitosamente, redireccionar a la tabla de ventas
                navigateTo('/ventas');
            } else {
                throw new Error('Error al agregar la venta');
            }
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
                            <h4>Agregar Venta</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="empleadoId" className="form-label">ID Empleado:</label>
                                    <input type="text" className="form-control" id="empleadoId" value={empleadoId} onChange={(e) => setEmpleadoId(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="productoId" className="form-label">ID Producto:</label>
                                    <input type="text" className="form-control" id="productoId" value={productoId} onChange={(e) => setProductoId(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cantidad" className="form-label">Cantidad Vendida:</label>
                                    <input type="text" className="form-control" id="cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fecha" className="form-label">Fecha:</label>
                                    <input type="text" className="form-control" id="fecha" value={fecha} disabled />
                                </div>
                                <button type="submit" className="btn btn-primary">Agregar Venta</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Confirmación de Venta */}
            {confirmacionVisible && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirmar Venta</h5>
                                <button type="button" className="btn-close" onClick={() => setConfirmacionVisible(false)}></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>ID Empleado:</strong> {empleadoId}</p>
                                <p><strong>Nombre Empleado:</strong> {empleado && `${empleado.nombre} ${empleado.apellido}`}</p>
                                <p><strong>ID Producto:</strong> {productoId}</p>
                                <p><strong>Nombre Producto:</strong> {productoNombre}</p>
                                <p><strong>Cantidad:</strong> {cantidad}</p>
                                <p><strong>Fecha:</strong> {fecha}</p>
                                <button type="button" className="btn btn-primary" onClick={handleConfirmarVenta}>Confirmar</button>
                                <button type="button" className="btn btn-secondary" onClick={() => setConfirmacionVisible(false)}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AgregarVentaForm;
