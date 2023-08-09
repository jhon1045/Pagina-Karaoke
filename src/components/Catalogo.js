import React from 'react';
import '../Style/catalogo.css';
import { Link } from 'react-router-dom';
import imag1 from '../assets/img/imag1.png'

const Catalogo = () => {
  return (
    <div className='music'>
      
      <h2 className='pick-a-plan'>¡PICK A PLAN START CREATING!</h2>
      <div className='card-container'>
      

        <div className='card'>
          <div className='card-logo'>
            <img src={imag1} alt='Logo de la página' />
          </div>
          <h3 className='card-title'>Gratis</h3>
          <div className='card-content'>
            <span className='bar'>explicativo sobre la suscripción gratuita.</span>
            <span className='bar'>Otra razón para considerar esta opción</span>
            <span className='bar'>Más información sobre los beneficios</span>
            <p className='btc'>$0,00</p>
            <p className='card-info'>30 días</p>
            <p className='card-info'>Sin costo</p>
          </div>
          <Link to='/Contact' className='btn card-btn'>Comprar</Link>
        </div>


        <div className='card'>
          <div className='card-logo'>
          <img src={imag1} alt='Logo de la página' />
          </div>
          <h3 className='card-title'>Gratis</h3>
          <div className='card-content'>
            <span className='bar'> sobre la suscripción gratuita.</span>
            <span className='bar'>Otra razón para considerar esta opción</span>
            <span className='bar'>Más información sobre los beneficios</span>
            <p className='btc'>$0,00</p>
            <p className='card-info'>30 días</p>
            <p className='card-info'>Sin costo</p>
          </div>
          <Link to='/Contact' className='btn card-btn'>Comprar</Link>
        </div>


        <div className='card'>
          <div className='card-logo'>
          <img src={imag1} alt='Logo de la página' />
          </div>
          <h3 className='card-title'>Gratis</h3>
          <div className='card-content'>
            <span className='bar'>explicativo sobre la suscripción gratuita.</span>
            <span className='bar'>Otra razón para considerar esta opción</span>
            <span className='bar'>Más información sobre los beneficios</span>
            <p className='btc'>$0,00</p>
            <p className='card-info'>30 días</p>
            <p className='card-info'>Sin costo</p>
          </div>
          <Link to='/Contact' className='btn card-btn'>Comprar</Link>
        </div>

        {/* Repite el mismo patrón para las otras tarjetas Premium y Pro */}

      </div>
    </div>
  );
}

export default Catalogo;








