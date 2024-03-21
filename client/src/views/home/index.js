import Menu from '../../components/menu/menu';
import Navbar from '../../components/navbar/navbar';
import Welcome from '../../components/welcome/welcome';

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