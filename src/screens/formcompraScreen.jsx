import React from 'react';
import FormComponent from '../assets/components/formComponent';
import FooterComponent from '../assets/components/footerComponent';
import ContactoComponent from '../Components/ContactoComponent';



function CompraScreen() {
    return (
        <div>
           
            <br />
            <main>
            <h1>Formulario de compra</h1>
            <p>Por favor, complete con sus datos para efectuar su compra</p>
            <h2>Para comprar por <strong>Mercado pago </strong>consultar alias por  <ContactoComponent/></h2>
            <FormComponent/>
            <br />
            <h2>Total:$0.00 <button>pagar</button></h2>
            </main>
            <br />
           

            <footer>
                <FooterComponent/>
            </footer>


          
        </div>
    );
}

export default CompraScreen;