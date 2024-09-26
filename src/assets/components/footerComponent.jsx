import React from 'react';
import './styles/footer.css';

const FooterComponent = () => {
  return (
    <div className='container'>
      <div className='footer'>
        <div>LOGO</div>

        <h1>Nosotros</h1>
        <div className='column'>
        <h2>Github</h2>
        <ul className='list'>

          <li><a href="https://github.com/AbrilFuentess">Abril Fuentes</a></li>
          <li><a href="https://github.com/TomyQuinteros">Tomas Quinteros</a></li>
          <li><a href="https://github.com/erickcl23">Erick Claveria</a></li>

        </ul>
        </div>
        <div className='column'>
          <h2>Nuestras redes</h2>
          <ul className='list'>
            <li><a href="https://www.instagram.com/abrilita_06/">abrilita_06</a></li>
            <li><a href="https://www.instagram.com/tomyquinteros_/">tomyquinteros_</a></li>
            <li><a href="https://www.instagram.com/erickcl23/">erickcl23</a></li>
            

          </ul>
        </div>
      </div>

    </div>
  );
};

export default FooterComponent;

