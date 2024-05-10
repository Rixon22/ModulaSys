import Navbar from "../../components/navbar/navbar";
import AgregarEmpleadoForm from "../../components/agregarEmpleadoForm/agregarEmpleadoForm";

const AgregarEmpleado = () => {
    return (
        <div>
            <Navbar />
            <AgregarEmpleadoForm />
        </div>
    );
}

AgregarEmpleado.displayName = 'AgregarEmpleado';
export default AgregarEmpleado;