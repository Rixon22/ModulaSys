-- Datos de prueba para la tabla 'users'
INSERT INTO `modulasys`.`users` (`userdid`, `password`) VALUES
('usuario1', 'contraseña1'),
('usuario2', 'contraseña2'),
('usuario3', 'contraseña3');

-- Datos de prueba para la tabla 'inventarios'
INSERT INTO `modulasys`.`inventarios` (`nombreProducto`, `existenciaProducto`, `urlFotoProducto`) VALUES
('Producto 1', 10, 'url_foto_1'),
('Producto 2', 20, 'url_foto_2'),
('Producto 3', 30, 'url_foto_3');

-- Datos de prueba para la tabla 'empleados'
INSERT INTO `modulasys`.`empleados` (`nombreEmpleado`, `apellidEmpleado`, `direaccionEmpleado`, `urlFotoEmpleado`) VALUES
('Juan', 'Pérez', 'Calle Principal 123', 'url_foto_empleado_1'),
('María', 'Gómez', 'Avenida Central 456', 'url_foto_empleado_2'),
('Luis', 'Martínez', 'Plaza Mayor 789', 'url_foto_empleado_3');

-- Datos de prueba para la tabla 'ventas'
INSERT INTO `modulasys`.`ventas` (`empleados_idempleado`, `inventarios_idinventarios`, `cantidadVendida`, `fecha`) VALUES
(1, 1, 5, '2024-04-23'),
(2, 2, 10, '2024-04-23'),
(3, 3, 15, '2024-04-23');
