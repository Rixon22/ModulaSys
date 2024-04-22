-- Datos de prueba para la tabla `users`
INSERT INTO users (userdid, password) VALUES
('user1', 'password1'),
('user2', 'password2'),
('user3', 'password3');

-- Datos de prueba para la tabla `inventarios`
INSERT INTO inventarios (nombreProducto, existenciaProducto) VALUES
('Producto A', 10),
('Producto B', 20),
('Producto C', 15);

-- Datos de prueba para la tabla `empleados`
INSERT INTO empleados (nombreEmpleado, apellidEmpleado, direaccionEmpleado, urlFotoEmpleado) VALUES
('Juan', 'Pérez', 'Calle 123', 'foto1.jpg'),
('María', 'García', 'Avenida 456', 'foto2.jpg'),
('Luis', 'López', 'Carrera 789', 'foto3.jpg');

-- Datos de prueba para la tabla `ventas`
INSERT INTO ventas (empleados_idempleado, inventarios_idinventarios, cantidadVendida, fecha) VALUES
(1, 1, 5, '2024-04-01'),
(2, 2, 8, '2024-04-02'),
(3, 3, 10, '2024-04-03');
