import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from '../views/login/';
import Home from '../views/home/';
import Inventory from '../views/inventory/';
import Sales from '../views/sales/';
import Employes from '../views/employes/';

const isLoggedIn = () => {
  // Verifica si el token está presente en el almacenamiento local
  const token = localStorage.getItem('token');
  console.log(token)
  // Devuelve true si el token está presente y no es nulo o vacío
  return token !== null && token !== '';
}

const MyRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={isLoggedIn() ? <Home /> : <Navigate to="/" />} />
      <Route path="/inventarios" element={isLoggedIn() ? <Inventory /> : <Navigate to="/" />} />
      <Route path="/ventas" element={isLoggedIn() ? <Sales /> : <Navigate to="/" />} />
      <Route path="/personal" element={isLoggedIn() ? <Employes /> : <Navigate to="/" />} />
    </Routes>
  </Router>
);

export default MyRoutes;
