import React from 'react';
import data from './items.json';
import { useNavigate, useParams } from 'react-router-dom';
import './styles/itemCard.css';

export default function ItemCard() {
    const navigate = useNavigate();
    const { id } = useParams();


    //Traeré los productos según tipo de pantalla
    let item = [];
    if (id === "1") {
        item = data.indumentaria;
    }
    else if (id === "2") {
        item = data.accesorios;
    }
    else if (id === "3") {
        item = data.suplementos;
    }
    else { }

    //Verifico si el array esta vacío por no haber productos
    if (item.length === 0) {
        <div>
            <p>No se encontraron productos.</p>;
            <button onClick={() => navigate('/DetallesProductos')}>Volver al inicio</button>
        </div>

    } else {
        //Renderizado de tarjetas según cantidad de productos disponibles
        return (
            <div>
                <h2>Nombre de la página</h2>
                <div className='cardsContainer'>
                    {item.map((producto) => (
                        <div key={producto.id} className="card" style={{ width: '18rem' }}>
                            <img src={producto.img} className="card-img-top" alt={producto.name} />

                            <div className="card-body">
                                <h5 className="card-title">{producto.name}</h5>
                                <p className="card-description">{producto.description}</p>
                                <p className="card-price">Precio: ${producto.price}</p>
                                <button onClick={() => navigate('')} className="btn btn-primary">Ver producto</button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

