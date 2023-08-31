import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import logoz from './../visual/logoz.png';
function MyNavbar() {

  const [navBackground, setNavBackground] = useState('transparent');

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 2) {
      setNavBackground('light');
    } else {
      setNavBackground('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="{navBackground}" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <a href="#" className="logo">
            <img src={logoz} alt="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#Top">Inicio</Nav.Link>
            <Nav.Link href="#Prensa">Prensa</Nav.Link>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;