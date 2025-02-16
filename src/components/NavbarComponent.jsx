import { Navbar, Container, Nav } from "react-bootstrap"
import logo from "../assets/image/logo.png"
import "../styles/main.css"

const NavbarComponent = () => {
  return (
    <Navbar bg="transparant" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home"><img src={logo}></img>warna</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
