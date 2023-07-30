import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="sm" className="p-2">
      <div className="container">
        <Navbar.Brand href="#">
            <Link to="/" className="navbar-brand">
                OrdenDigital.
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav>
              <Nav.Link href="#" className="active">
                <Link to="/about" className="nav-link">
                  productos
                </Link>
              </Nav.Link>
              <Nav.Link href="#">
                <Link to="/contact" className="nav-link">
                  servicios
                </Link>
              </Nav.Link>
              <Nav.Link href="#">
                <Link to="/contact" className="nav-link">
                  precios
                </Link>
              </Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="#">
              <Link to="/login" className="nav-link">
                Iniciar sesión
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to="/signup" className="nav-link">
                Registrarse
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;