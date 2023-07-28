import React from 'react'
import  '../Style/catalogo.css'
import { Link } from'react-router-dom';

const Catalogo = () => {
  return (
    <div className='music'>
      <div className='card-container'>

        <div className='card'>
          <h3>-Gratis-</h3>
          <span className='bar'></span>
          <p className='btc'>0,00 $</p>
          <p>--30--</p>
          <p>sin costo</p>
          <Link to='/Contact' className='btn'></Link>
        </div>

        <div className='card'>
          <h3>-Premium-</h3>
          <span className='bar'></span>
          <p className='btc'>0,00 $</p>
          <p>--30--</p>
          <p>sin costo</p>
          <Link to='/Contact' className='btn'></Link>
        </div>

        <div className='card'>
          <h3>-Pro-</h3>
          <span className='bar'></span>
          <p className='btc'>0,00 $</p>
          <p>--30--</p>
          <p>sin costo</p>
          <Link to='/Contact' className='btn'></Link>
        </div>

      </div>
    </div>
  )
}

export default Catalogo
