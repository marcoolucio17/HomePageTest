import React, { useState } from "react";
import { Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasToggle = () => setShowOffcanvas((prev) => !prev);

  return (
    <>
      <Navbar expand="lg" className="">
        <div className="container">
          <Navbar.Brand>
            <Link to="/" className="navbar-brand mybtn">
              OrdenDigital.
            </Link>
          </Navbar.Brand>

          {/* Show the toggler only on smaller screens */}
          <a
            variant="outline-primary"
            aria-controls="offcanvasMenu"
            onClick={handleOffcanvasToggle}
            className="d-lg-none mybtn" // Hide on screens larger than lg (large)
          >
            <span className="navbar-toggler-icon"></span>
          </a>

          {/* Show the full navigation bar on larger screens */}
          <Navbar.Collapse id="navbarNavAltMarkup" className="justify-content-end">
            <Nav>
                <Link to="/about" className="nav-link mx-3">
                  Quiénes somos
                </Link>
                
                <Link to="/contact" className="nav-link mx-3">
                  Servicios
                </Link>
                
                <Link to="/contact" className="nav-link mx-3">
                  Precios
                </Link>
                
                <Link to="/login" className="nav-link mx-3">
                  Iniciar sesión
                </Link>
                
                <Link to="/signup" className="nav-link mx-3">
                  Regístrate
                </Link>

            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <Offcanvas
        show={showOffcanvas}
        onHide={handleOffcanvasClose}
        placement="end"
        target="offcanvasMenu"
        className="Offcanvas"
        style={{ backgroundColor: "#f5b754" }}
      >
        <Offcanvas.Header className="m-2"closeButton style={{ backgroundColor: "#f5b754" }}>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundColor: "#f5b754" }}>
          <div className="container p-2">
            <Link to="/about" className="nav-link" onClick={handleOffcanvasClose}>
              Quiénes somos
            </Link>
            <Link to="/contact" className="nav-link my-3 " onClick={handleOffcanvasClose}>
              Servicios
            </Link>
            <Link to="/contact" className="nav-link my-3" onClick={handleOffcanvasClose}>
              Precios
            </Link>
          </div>

          <hr className="m-2"/>

          <div className="container p-2">
          <Link to="/login" className="nav-link my-3" onClick={handleOffcanvasClose}>
              Iniciar sesión
            </Link>
            <Link to="/signup" className="nav-link my-3" onClick={handleOffcanvasClose}>
              Regístrate
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
