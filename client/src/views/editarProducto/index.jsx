import Navbar from "../../components/navbar/navbar";
import EditarProductoForm from "../../components/editarProductoForm/editarProductoForm";

const EditarProducto = () => {
    return (
        <>
            <Navbar />
            <EditarProductoForm />
        </>
    );
}

EditarProducto.displayName = 'EditarProducto';
export default EditarProducto;