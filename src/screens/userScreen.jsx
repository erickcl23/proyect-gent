import React from 'react';
import icon from '../assets/images/icon-user-react.png'
import Predeterminada from '../assets/images/Imagen-predeterminada.jpg'
import './user.css'
import FooterComponent from '../components/footerComponent';




function UserScreen() {
    return (
        
        <div >
            <div className='background'>

            <img src={icon} alt="" className='user' />
            <p>Nombre y apellido</p>
            <p>correo.registrado@gmail.com</p>
            <br />
            <h1>Items visitados</h1>
            <img src={Predeterminada} alt="" className='predeterminado'/>
            <p>nombre del producto</p>
            <p>Precio: <strong>$000,000</strong></p>

            <div>
                <fieldset>
                    <h1>Historial de compras</h1>
                    <p>01/01/2024</p>
                    <button className='button'>Ver comprobante</button>
                </fieldset>
            </div>
            
            

            </div>
            <FooterComponent/>

        </div>
    );
}

export default UserScreen;