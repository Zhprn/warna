import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/image/logo.png";
import "../styles/main.css";

const NavbarComponent = () => {
  return (
    <Navbar bg="transparent" expand="lg" className="navbar">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img src={logo} alt="Logo" className="me-2" /> warna
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#contact" className="bordered-link">
              Lets Talk
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;