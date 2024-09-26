import React from 'react';
import ArrowIcons from '../assets/components/arrowIcons';
import ProductDetails from '../assets/components/ProductDetails';
import ProductInstructions from '../assets/components/productInstructions';
import RelatedProductsCarrusel from '../assets/components/RelatedProductsCarrusel';

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

const ProductScreen = () => {
  return (
    <div className='product-page'>
      <ArrowIcons product={product} />
      <ProductDetails product={product} />
      <ProductInstructions />
      <RelatedProductsCarrusel products={relatedProducts} />
    </div>
  );
};

export default ProductScreen;