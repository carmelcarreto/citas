import React, {Fragment, useState } from 'react';

const Formulario = () => {

    //Crear State de Citas
    const [cita,actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    //Funcion que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas}= cita;

    //Cuando el usuario presiona agregar cita
    const submitCita = e =>{
        e.preventDefault();
        console.log('enviando form')
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            <form
                onSubmit={submitCita}
            >
                <label>Nombre de la Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre del Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <input 
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                />
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;