//??????????????????????????????????
//Para qué parte es el carrusel?

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="https://via.placeholder.com/800x400"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>ENCONTRA TODO LO QUE NECESITAS PARA INICIAR TUS ENTRENAMIENTOS.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="https://via.placeholder.com/800x400"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>ENCONTRA TODO LO QUE NECESITAS PARA INICIAR TUS ENTRENAMIENTOS.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="https://via.placeholder.com/800x400"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>ENCONTRA TODO LO QUE NECESITAS PARA INICIAR TUS ENTRENAMIENTOS.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
