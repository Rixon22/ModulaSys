const Log = () => {
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <img src="../../assets/modulasyslogo-nobg.png" alt="Logo" style={{ maxWidth: '100px' }}/>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Log.displayName = 'Log';
export default Log;