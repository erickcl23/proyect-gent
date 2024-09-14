import React from 'react';
import arrow_icon from '../../frontend_assets/dropdown_icon.png';

const Breadcrum = ({ product }) => {
  return (
    <div className='breadcrum'>
      <span>INICIO</span> 
      <img src={arrow_icon} alt="arrow icon" />
      <span>SUPLEMENTOS</span> 
      <img src={arrow_icon} alt="arrow icon" />
      <span>{product.name}</span>
    </div>
  );
};

export default Breadcrum;
