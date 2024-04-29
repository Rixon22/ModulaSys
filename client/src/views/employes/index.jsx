import TablaEmpleados from '../../components/tablaEmpleados/tablaEmpleados.jsx';
import Navbar from '../../components/navbar/navbar';

const Employes = () => {
    return (
        <div>
            <Navbar />
            <TablaEmpleados />
        </div>
    );
}

Employes.displayName = 'Employes';
export default Employes;