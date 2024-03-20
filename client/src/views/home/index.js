import Menu from '../../components/menu';
import Navbar from '../../components/navbar/';
import Welcome from '../../components/welcome/';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Welcome />
            <Menu />
        </div>
    );
};

export default Home;