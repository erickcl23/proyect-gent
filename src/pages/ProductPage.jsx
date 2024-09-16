import React from 'react';
import Breadcrum from '../componentes/Breadcrum/Breadcrum';
import ProductDisplay from '../componentes/ProductDisplay/ProductDisplay';
import DescriptionBox from '../componentes/DescriptionBox/DescriptionBox';
import RelatedProducts from '../componentes/RelatedProducts/RelatedProducts';

const product = {
  name: 'Nombre del Producto',
  image: 'https://via.placeholder.com/300',
  price: 499.99,
  description: 'Descripción del producto.',
};

const relatedProducts = [
  { id: 1, name: 'Producto Relacionado 1', image: 'https://via.placeholder.com/100', price: 100 },
  { id: 2, name: 'Producto Relacionado 2', image: 'https://via.placeholder.com/100', price: 120 },
  { id: 3, name: 'Producto Relacionado 3', image: 'https://via.placeholder.com/100', price: 140 },
];

const ProductPage = () => {
  return (
    <div className='product-page'>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts products={relatedProducts} />
    </div>
  );
};

export default ProductPage;
