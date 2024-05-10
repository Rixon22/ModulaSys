import Navbar from "../../components/navbar/navbar";
import EditarEmpleadoForm from "../../components/editarEmpleadoForm/editarEmpleadoForm";

const EditarEmpleado = () => {
    return (
        <div>
            <Navbar />
            <EditarEmpleadoForm />
        </div>
    );
}

EditarEmpleado.displayName = 'EditarEmpleado';
export default EditarEmpleado;