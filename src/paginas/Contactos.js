import React from "react";
import { Link } from "react-router-dom";
import "./Contactos.css"; 

const Contact = () => {
  return (
    <>
      <div className="TituloForm">
        <br></br><br></br><br></br>
        <u>Espero tu contacto!</u>
      </div>

      <form className="contact-form">
        <br></br><br></br>
        <input required type="text" placeholder="Nombre" className="input-field" /><br></br><br></br>
        <input required type="text" placeholder="Apellido" className="input-field" /><br></br><br></br>
        <input required type="text" placeholder="Email" className="input-field" />
        <br></br><br></br>

        <textarea placeholder="Escribe aquí tu comentario..." className="comment-field"></textarea>
        <br></br><br></br>

        <button className="enviar-button">Enviar</button> 
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </form>
    </>
  );
};

export default Contact;
