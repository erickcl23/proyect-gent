//-------------------------------------
// Detalles del producto
// [Desde dónde trae el producto para mostrarlo???]
//-------------------------------------
import React, { useState } from 'react';

const ProductDisplay = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  //Sumar o quitar productos 
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  //Formato para mostrar precios
  const formatPrice = (price) => {
    return `${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  };

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <img style={styles.mainImage} src={product.image} alt={product.name} />
      </div>
      <div style={styles.right}>
        <h1 style={styles.title}>{product.name}</h1>
        <p>{product.description}</p>
        <div style={styles.priceContainer}>
          <div style={styles.newPrice}>
            {formatPrice(product.price)}
          </div>
        </div>
        
        <div style={styles.countContainer}>
          <button style={styles.button} onClick={decreaseQuantity}>&#9664;</button>
          <span>{quantity}</span>
          <button style={styles.button} onClick={increaseQuantity}>&#9654;</button>
        </div>

        <button style={styles.cartButton}>AGREGAR AL CARRITO</button>
      </div>
    </div>
  );
};

export default ProductDisplay;

const styles = {
  container: {
    display: 'flex',
    margin: '0px 260px'
  },
  left: {
    display: 'flex',
    gap: '17px'
  },
  mainImage: {
    width: '566px'
  },
  right: {
    margin: '0px 70px 100px',
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    color: '#3d3d3d',
    fontSize: '40px',
    fontWeight: '700'
  },
  priceContainer: {
    display: 'flex',
    margin: '20px 0px',
    gap: '30px',
    fontSize: '25px',
    fontWeight: '700'
  },
  newPrice: {
    color: 'black'
  },
  countContainer: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '10px 20px',
    marginTop: '20px'
  },
  button: {
    background: 'none',
    border: 'none',
    fontSize: '1.5em',
    cursor: 'pointer',
    padding: '10px'
  },
  cartButton: {
    padding: '20px 40px',
    backgroundColor: 'black',
    fontSize: '16px',
    fontWeight: '600',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    width: '180%',
    marginLeft: '10px'
  }
};