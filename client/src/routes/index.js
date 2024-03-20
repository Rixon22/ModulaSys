// Configurar las rutas de la aplicación
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../views/home/';

const router = createBrowserRouter([
    {
    path: '/', element: <Home />
    }
    ]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;