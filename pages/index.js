
import TopNav from "components/TopNav";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";



const Index = ({children}) => {
  const { data, status } = useSession();
  const router = useRouter();

  

  if (status === "unauthenticated") {
    router.push("/login");
  }

 else {
    return (
      <>
        <TopNav />

          <div className="">
            <main className="sb-nav-fixed">
              <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                  <nav
                    className="sb-sidenav accordion sb-sidenav-dark"
                    id="sidenavAccordion"
                  >
                    <div className="sb-sidenav-menu">
                      <div className="nav">
   
                        <div className="sb-sidenav-menu-heading">
                          Vista General
                        </div>
                        <Link href="/general">
                          <a className="nav-link">Resumen</a>
                        </Link>
                        <div className="sb-sidenav-menu-heading">
                          Administracion
                        </div>
                        <Link href="/administrar/inversiones">
                        <a className="nav-link" >
                          Inversiones
                        </a>
                        </Link>
                        <Link href="/administrar/productos">
                        <a className="nav-link" >
                          Productos
                        </a>
                        </Link>

                        <div className="sb-sidenav-menu-heading">
                          Configurar Perfil
                        </div>
                        <Link href="/perfil">
                        <a className="nav-link" >
                          Editar Perfil
                        </a>
                        </Link>
                        <Link href='#!'>
                        <a className="nav-link text-danger" onClick={() => signOut()}>
                          Cerrar Sesion
                        </a>
                        </Link>
                      </div>
                    </div>
                    <div className="sb-sidenav-footer">
                      <div className="small">Soporte</div>
                      CEL 305 203 8798
                    </div>
                  </nav>
                </div>

                {/* content pages */}
                <div id="layoutSidenav_content">
                  <div>{children}</div>              
                  <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                      <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-muted">
                          Copyright &copy; Luis 2022
                        </div>
                        <div>
                          <a href="#">Privacy Policy</a>
                          &middot;
                          <a href="#">Terms &amp; Conditions</a>
                        </div>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </main>
          </div>

      </>
    );
  }
};

export default Index;