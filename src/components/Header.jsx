import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">BTK Akademi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/courses" className="me-2">Eğitimler</Nav.Link>
            <Nav.Link as={Link} to="/events" className="me-2">Etkinlikler</Nav.Link>
            <Nav.Link as={Link} to="/blog" className="me-2">Blog</Nav.Link>
            <Nav.Link as={Link} to="/about" className="me-3">Hakkımızda</Nav.Link>
            <Nav.Link as={Link} to="/login">Giriş Yap</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
