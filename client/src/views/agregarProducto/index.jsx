import Navbar from "../../components/navbar/navbar";
import AgregarProductoForm from "../../components/agregarProductoForm/agregarProductoForm";

const AgregarProducto = () => {
    return (
        <div>
            <Navbar />
            <AgregarProductoForm />
        </div>
    );
}

AgregarProducto.displayName = 'AgregarProducto';
export default AgregarProducto;