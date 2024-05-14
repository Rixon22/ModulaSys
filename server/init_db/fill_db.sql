-- Datos de prueba para la tabla `users`
INSERT INTO `modulasys`.`users` (`userdid`, `password`) VALUES
('usuario1', 'contraseña1'),
('usuario2', 'contraseña2'),
('usuario3', 'contraseña3');

-- Datos de prueba para la tabla `inventarios`
INSERT INTO `modulasys`.`inventarios` (`nombreProducto`, `existenciaProducto`, `urlFotoProducto`, `precioProducto`) VALUES
('iPhone 13', 10, 'https://images.pexels.com/photos/9667337/pexels-photo-9667337.jpeg', 1200.00),
('Samsung Galaxy S22', 20, 'https://images.pexels.com/photos/13780411/pexels-photo-13780411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1100.60),
('MacBook Pro', 15, 'https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 2500.50);

-- Datos de prueba para la tabla `empleados`
INSERT INTO `modulasys`.`empleados` (`nombreEmpleado`, `apellidEmpleado`, `direaccionEmpleado`, `urlFotoEmpleado`) VALUES
('Juan', 'Pérez', 'Calle 123', 'https://images.pexels.com/photos/8528571/pexels-photo-8528571.jpeg'),
('María', 'García', 'Carrera 456', 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'),
('Pedro', 'López', 'Avenida 789', 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

-- Datos de prueba para la tabla `ventas`
INSERT INTO `modulasys`.`ventas` (`empleados_idempleado`, `inventarios_idinventarios`, `cantidadVendida`, `fecha`) VALUES
(1, 1, 5, '2024-04-29'),
(2, 2, 8, '2024-04-28'),
(3, 3, 3, '2024-04-27');
