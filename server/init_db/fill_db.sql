-- Datos de prueba para la tabla `users`
INSERT INTO `modulasys`.`users` (`userdid`, `password`) VALUES
('usuario1', 'contraseña1'),
('usuario2', 'contraseña2'),
('usuario3', 'contraseña3');

-- Datos de prueba para la tabla `inventarios`
INSERT INTO `modulasys`.`inventarios` (`nombreProducto`, `existenciaProducto`, `urlFotoProducto`, `precioProducto`) VALUES
('iPhone 13', 10, 'url1', 1200.00),
('Samsung Galaxy S22', 20, 'url2', 1100.60),
('MacBook Pro', 15, 'url3', 2500.50);

-- Datos de prueba para la tabla `empleados`
INSERT INTO `modulasys`.`empleados` (`nombreEmpleado`, `apellidEmpleado`, `direaccionEmpleado`, `urlFotoEmpleado`) VALUES
('Juan', 'Pérez', 'Calle 123', 'url1'),
('María', 'García', 'Carrera 456', 'url2'),
('Pedro', 'López', 'Avenida 789', 'url3');

-- Datos de prueba para la tabla `ventas`
INSERT INTO `modulasys`.`ventas` (`empleados_idempleado`, `inventarios_idinventarios`, `cantidadVendida`, `fecha`) VALUES
(1, 1, 5, '2024-04-29'),
(2, 2, 8, '2024-04-28'),
(3, 3, 3, '2024-04-27');
