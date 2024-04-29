import Navbar from "../../components/navbar/navbar";
import TablaProductos from "../../components/tablaProductos/tablaProductos";

const Inventory = () => {
    return (
        <div>
            <Navbar />
            <TablaProductos />
        </div>
    );
}

Inventory.displayName = 'Inventory';
export default Inventory;