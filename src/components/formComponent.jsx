import React from 'react'


export default function FormComponent() {
  return (
<div>
    <fieldset>
       

        <form action="">
            <label htmlFor="">Tipo de tarjeta:</label>
            <input type="text" /><br />
            <label htmlFor="">Numeros de tarjeta:</label>
            <input type="text" /><br />
            <label htmlFor="">Codigo de seguridad</label>
            <input type="text" /><br />
            <label htmlFor="">Vencimiento</label>
            
            <input type='submit' />
           

        </form>
    </fieldset>
    <br />
    <fieldset>
        <form action="">
            <label htmlFor="">Nombre titular:</label>
            <input type="text" /><br />
            <label htmlFor="">Documento:</label>
          
            <select name="tipo" id="documento">
                
                <option value="dni">dni</option>
                <option value="cedula">cedula de identidad</option>
                <option value="pasaportes">pasaporte</option>
            </select>
            <br />
            <label htmlFor="">fecha de nacimiento</label>
            <input type="date" name="" id="" />
            <br />
            
            <input type='submit' />
           

        </form>
    </fieldset>

    
</div>
  )
}
