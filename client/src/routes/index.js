// Configurar las rutas de la aplicación
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from '../views/login/';
import Home from '../views/home/';
import Inventory from '../views/inventory/';
import Sales from '../views/sales/';
import Employes from '../views/employes/';

const router = createBrowserRouter([
    {
        path: '/', element: <Login />
    },
    {
    path: '/home', element: <Home />
    },
    {
    path: '/inventarios', element: <Inventory />
    },
    {
    path: '/ventas', element: <Sales />
    },
    {
    path: '/personal', element: <Employes />
    }
    ]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;