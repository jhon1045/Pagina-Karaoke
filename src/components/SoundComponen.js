import React from 'react';
import sound from '../assets/icon/sound-waves_1792718.png'; // Asegúrate de proporcionar la ruta correcta
import '../Style/midle.css'

const SoundComponen = () => {
  return (
    <div className='midle section'>
      <div className='seccon container'>
        <div className='grid-1'>
          <div className='flex-1' style={{ display: 'flex' }}>
            <div className='conim5'>
              <img className='im' src={sound} alt='icono' />
            </div>

            <div className='cph' style={{ width: '15rem' }}>
              <h1 className='H' style={{ fontSize: '1.5rem' }}>¡Encuentra Tu Vibra!</h1>
              <p className='v' style={{ fontSize: '1rem' }}>Liberate y Canta Sin Limites</p>
            </div>

            <div className='ts1'>
              <button className='t1'>Ven Canta</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoundComponen;