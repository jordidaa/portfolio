import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Menu.css';

function Menu() {
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand-custom">JD<span className="brand-dot">.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto gap-1">
            <Nav.Link href="#about">Quién soy</Nav.Link>
            <Nav.Link href="#skils">Habilidades</Nav.Link>
            <Nav.Link href="#projects">Proyectos</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;