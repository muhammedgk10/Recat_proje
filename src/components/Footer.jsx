import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Hakkımızda</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Biz Kimiz?</a></li>
              <li><a href="#" className="text-light">Kariyer</a></li>
              <li><a href="#" className="text-light">İletişim</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Destek</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Sıkça Sorulan Sorular</a></li>
              <li><a href="#" className="text-light">Yardım Merkezi</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Sosyal Medya</h5>
            <a href="#" className="text-light me-3"><FaFacebook size={24} /></a>
            <a href="#" className="text-light me-3"><FaTwitter size={24} /></a>
            <a href="#" className="text-light me-3"><FaInstagram size={24} /></a>
            <a href="#" className="text-light me-3"><FaLinkedin size={24} /></a>
            <a href="https://github.com/muhammedgk10?tab=repositories" className="text-light"><FaGithub size={24} /></a>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; 2024 BTK Akademi. Tüm hakları saklıdır.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
