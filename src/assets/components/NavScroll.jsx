import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import profileIcon from '../../frontend_assets/profile_icon.png'; 
import cartIcon from '../../frontend_assets/cart_icon.png';

function NavScroll() {
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark"> {/* Cambia el color del fondo del Navbar a negro */}
      <Container fluid>

        <Navbar.Brand href="#" className="text-white">logo</Navbar.Brand> {/* Texto del logo en blanco */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav className="mx-auto"> {/* Centramos el Nav */}
            <Nav.Link href="" className="text-white">| Inicio |</Nav.Link>
            <Nav.Link href="#Accesorios" className="text-white">| Accesorios |</Nav.Link>

            <NavDropdown title="Suplementos" id="navbarScrollingDropdown" className="text-white">
              <NavDropdown.Item href="#Marcas">Marcas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Más">Más</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#Ubicación" className="text-white">| Ubicación| </Nav.Link>
            <Nav.Link href="#Ropa" className="text-white">| Ropa |</Nav.Link>
          </Nav>

          <Form className="d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
              style={{ width: '250px' }} /*Expande el campo de búsqueda*/
              />
            <Button variant="outline-light" className="me-2">Buscar</Button> {/* Botón de búsqueda en blanco */}
            <Image src={profileIcon} alt="Perfil" roundedCircle width="30" height="30" className="me-3" style={{ filter: 'invert(100%)' }} />
            <Image src={cartIcon} alt="Carrito" width="30" height="30" style={{ filter: 'invert(100%)' }} />
          
          </Form>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavScroll;
