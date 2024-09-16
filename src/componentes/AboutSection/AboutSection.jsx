import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function AboutSection() {
  return (
    <Container className="about-section my-5">
      <Row className="align-items-center">
        <Col md={8}>
          <h2>¿Qué es [título del sitio]?</h2>
          <p>Somos una plataforma que te ayuda a encontrar todo lo que necesitas para iniciar y mejorar tus entrenamientos, desde accesorios hasta ropa especializada.</p>
        </Col>
        <Col md={4} className="text-center">
          <Image src="/path-to-your-image.jpg" alt="Descripción de la imagen" fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutSection;
