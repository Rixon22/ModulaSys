import Navbar from "../../components/navbar/navbar";
import AgregarVentaForm from "../../components/agregarVentaForm/agregarVentaForm";

const AgregarVenta = () => {
    return (
        <div>
            <Navbar />
            <AgregarVentaForm />
        </div>
    );
}

AgregarVenta.displayName = 'AgregarVentaView';
export default AgregarVenta;