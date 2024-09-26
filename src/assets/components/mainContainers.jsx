//----------------------------------------------
//Tarjetas contenedor de la pantalla principal
//----------------------------------------------
import React from 'react';
import { Card, Col } from 'react-bootstrap';

// Array que incluye título e imagen para cada tarjeta
import imageAccesorios from '../imgs/V2CD2ZD6X72POZMA5SBG7GQ37E.png';
import imageSuplementos from '../imgs/suplementos-deportivos-naturales.jpg';
import imageCentros from '../imgs/gym-location-map-pointer-weight-260nw-2199510555.png';
import imageRopa from '../imgs/image.png';
import { useNavigate } from 'react-router-dom';

// Array que incluye título e imagen para cada tarjeta
const cardData = [
  { id: 1, title: 'Indumentaria', imgSrc: imageRopa },
  { id: 2, title: 'Accesorios', imgSrc: imageAccesorios },
  { id: 3, title: 'Suplementos', imgSrc: imageSuplementos },
  { id: 4, title: 'Centros Físicos', imgSrc: imageCentros }
];


const Tarjetas = () => {
  const navigate = useNavigate();

  //Incluye el id de la trjeta elegida en la redirección
  const handleCardClick = (id) => {
    navigate(`/deleteLater/${id}`);
  };

  //Renderizado de las tarjetas
  return (
    <div className="custom-row">

      {cardData.map((card) => (
        <Col key={card.id}>
          <div className="card-title-overlay">
            <h3>{card.title}</h3>
          </div>
          <Card className="custom-card" onClick={() => handleCardClick(card.id)}>
            <div className="card-overlay">
              <Card.Img variant="top" src={card.imgSrc} alt={card.title} />
            </div>
          </Card>
        </Col>
      ))}
    </div>
  );
};

export default Tarjetas;