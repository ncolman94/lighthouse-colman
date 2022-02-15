import "./NavBar.css";

import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import { Cart } from "react-bootstrap-icons";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand>Lighthouse</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) =>
                    isActive ? "activeClass" : undefined
                  }
                  to="category/velas"
                >
                  Velas
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) =>
                    isActive ? "activeClass" : undefined
                  }
                  to="category/shampoo"
                >
                  Shampoo
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) =>
                    isActive ? "activeClass" : undefined
                  }
                  to="category/difusores"
                >
                  Difusores
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) =>
                    isActive ? "activeClass" : undefined
                  }
                  to="category/kits"
                >
                  Kits
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <NavLink to="/cart" className="justify-content-end">
            <Cart />
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
