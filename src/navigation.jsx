import React from 'react'
import './App.css';
import Navbar from './componentes/Navbar/NavScrollExample.jsx';
import Carousel  from './componentes/Caresul/CarouselFadeExample.jsx';
import Tarjetas  from './componentes/grid/GridExample.jsx';
import AboutSection from './componentes/AboutSection/AboutSection.jsx';

function navigation() {
  return (
    <div>
        <Navbar />
        <Carousel />
        <Tarjetas />
        <AboutSection />
    </div>
  )
}

export default navigation
