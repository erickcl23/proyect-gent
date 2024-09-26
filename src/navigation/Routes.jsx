import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import ProductScreen from '../screens/productScreen';
import DeleteLater from '../screens/deleteLater';
import Tarjetas from '../assets/components/mainContainers';

const WebRoutes = () => {
  return (
    <Routes>
        {/* aquí se colocará la pantalla principal como 'home' */}
      <Route path="/" element={<Tarjetas />} /> 
      
      <Route path="/deletelater/:id" element={<DeleteLater />} />

      {/* <Route path="" element={}/> */}

      {/* <Route path="/product/:productid" element={<ProductPage />} /> */}
      {/* <Route path="/añadido" element={'<elementoAqui/>'}/> */}
    </Routes>
  );
};

export default WebRoutes;