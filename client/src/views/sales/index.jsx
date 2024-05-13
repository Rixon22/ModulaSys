import Navbar from "../../components/navbar/navbar";
import TablaVentas from "../../components/tablaVentas/tablaVentas";

const Sales = () => {
    return (
        <div>
            <Navbar />
            <TablaVentas />
        </div>
    );
}

Sales.displayName = 'Sales';
export default Sales;