import './App.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      {
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img id="logoimg" src="/img/logo.png" alt="Bootstrap" width="70" height="60"></img>
          </a>
          <a class="navbar-brand" href="#">
            <img src="/img/logoletras.png" alt="Bootstrap" width="150" height="50"></img>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/48/grip-lines.png"
              alt="grip-lines" /> </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Acerca de nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Idiomas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Horarios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Direccion</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      }
    </nav>
  );
}

function CarouselAndAboutUs() {
  return (
    <div>
      {/* Contenido del carrusel y la sección "Acerca de nosotros" */}
    </div>
  );
}

function LanguageAccordion() {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {/* Contenido del acordeón de idiomas */}
    </div>
  );
}

function ScheduleTable() {
  return (
    <div id="tableExample">
      {/* Contenido de la tabla de horarios */}
    </div>
  );
}

function LocationAndContact() {
  return (
    <div>
      {/* Contenido de ubicación y contacto */}
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: '#d8eeff', marginTop: '40px' }} className="text-center text-lg-start bg-body-tertiary text-muted">
      {/* Contenido del footer */}
    </footer>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <CarouselAndAboutUs />
      <LanguageAccordion />
      <ScheduleTable />
      <LocationAndContact />
      <Footer />
    </div>
  );
}


export default App;
