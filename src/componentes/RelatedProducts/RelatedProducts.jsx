import React from 'react';

const RelatedProducts = ({ products }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      height: '90vh'
    },
    title: {
      color: '#171717',
      fontSize: '50px',
      fontWeight: '600'
    },
    grid: {
      marginTop: '50px',
      display: 'flex',
      gap: '30px',
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    image: {
      maxWidth: '200px'
    },
    text: {
      fontSize: '18px',
      fontWeight: '600'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Productos Relacionados</h1>
      <div style={styles.grid}>
        {products.map((item) => (
          <div key={item.id} style={styles.item}>
            <img src={item.image} alt={item.name} style={styles.image} />
            <p style={styles.text}>{item.name}</p>
            <p>{`$${item.price}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
