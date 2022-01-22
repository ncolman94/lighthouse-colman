import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

import CartWidget from "../cartwidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Lighthouse</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Velas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shampoo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Difusores</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Kits</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="justify-content-end">
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
