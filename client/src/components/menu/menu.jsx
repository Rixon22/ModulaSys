import { data } from '../../modules';

const Menu = () => {
    return (
        <div className="container">
            <div className="row">
                {data.map((item) => {
                    return (
                        <div key={item.id} className="col-md-4 col-sm-6 mb-4">
                            <div className="card">
                                <img src={item.img} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <a href={item.path} className="btn btn-primary">Administrar</a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

Menu.displayName = 'Menu';

export default Menu;
