import React from 'react';
import { Jumbotron, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Jumbotron
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          textAlign: 'center',
          padding: '8rem 2rem',
        }}
      >
        <h1>BTK Akademi'ye Hoş Geldiniz</h1>
        <p>Geleceğinize yön verecek eğitimler burada!</p>
        <p>
          <Button as={Link} to="/courses" variant="primary">Eğitimleri Keşfet</Button>
        </p>
      </Jumbotron>

      <Container style={{ marginTop: '2rem' }}>
        <Row>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Eğitimler</Card.Title>
                <Card.Text>
                  En güncel teknolojilerle hazırlanmış, kariyerinize yön verecek eğitimler.
                </Card.Text>
                <Button as={Link} to="/courses" variant="outline-primary">Tüm Eğitimler</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Etkinlikler</Card.Title>
                <Card.Text>
                  Sektörün önde gelenleriyle bir araya gelebileceğiniz ücretsiz etkinlikler.
                </Card.Text>
                <Button as={Link} to="/events" variant="outline-primary">Tüm Etkinlikler</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Blog</Card.Title>
                <Card.Text>
                  Teknoloji dünyasındaki en son gelişmeler ve makaleler.
                </Card.Text>
                <Button as={Link} to="/blog" variant="outline-primary">Tüm Yazılar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
