import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

// Array que incluye título e imagen para cada tarjeta
import imageAccesorios from '../../frontend_assets/image.png';
import imageSuplementos from '../../frontend_assets/suplementos-deportivos-naturales.jpg';
import imageCentros from '../../frontend_assets/9135163.png';
import imageRopa from '../../frontend_assets/V2CD2ZD6X72POZMA5SBG7GQ37E.png';

// Array que incluye título e imagen para cada tarjeta
const cardData = [
  { title: 'Ropa', imgSrc: imageAccesorios },
  { title: 'Suplementos', imgSrc: imageSuplementos },
  { title: 'Ubicacion', imgSrc: imageCentros },
  { title: 'Accesorios', imgSrc: imageRopa }
];


const Tarjetas = () => (
  <Row xs={1} md={4} className="g-2 d-flex justify-content-center"> 
    {cardData.map((card, idx) => (
      <Col key={idx}>
        <Card className="custom-card">
          <div className="card-overlay"> {/* Overlay para el efecto vidrio */}
            <Card.Img variant="top" src={card.imgSrc} alt={card.title} />
            <div className="card-title-overlay"> {/* Título visible al hacer hover */}
              <h3>{card.title}</h3>
            </div>
          </div>
        </Card>
      </Col>
    ))}
  </Row>
);

export default Tarjetas;
