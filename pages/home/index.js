import Index from "pages";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

const index = () => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    (async() => {
      const session = await getSession();
      session && setUser(session.user);
    })();
  }, []);

  return (
    <Index>
      <main>
        <div className="container-fluid px-4">
        <h1 className="py-5">Bienvenido {user !==null ? user.name : 'Welcome'}</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Perfil</li>
          </ol>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="card bg-primary text-white mb-4">
                <div className="card-body">Resumen</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">
                    Ver detalles
                  </a>
                  <div className="small text-white">
                    <i className="fas fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-warning text-white mb-4">
                <div className="card-body">Administrar Inversiones</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">
                    Ver detalles
                  </a>
                  <div className="small text-white">
                    <i className="fas fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-success text-white mb-4">
                <div className="card-body">Administrar Productos</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">
                    Ver detalles
                  </a>
                  <div className="small text-white">
                    <i className="fas fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-danger text-white mb-4">
                <div className="card-body">Perfil</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">
                    View Details
                  </a>
                  <div className="small text-white">
                    <i className="fas fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-chart-area me-1"></i>
                  Area Chart Example
                </div>
                <div className="card-body">
                  <canvas id="myAreaChart" width="100%" height="40"></canvas>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-chart-bar me-1"></i>
                  Bar Chart Example
                </div>
                <div className="card-body">
                  <canvas id="myBarChart" width="100%" height="40"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-table me-1"></i>
              DataTable Example
            </div>
            <div className="card-body"></div>
          </div>
        </div>
      </main>
    </Index>
  );
};

export default index;
