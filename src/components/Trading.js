import React from 'react'
import  '../Style/trading.css'
import photo1 from '../assets/img/pexels-jessica-lewis-creative-2918997.jpg'    
import  photo2 from '../assets/img/pexels-john-taran-10933702.jpg'
import { Link } from 'react-router-dom'    

const Trading = () => {
  return (
    <div className='trading'>
      <div className='left'>
        <h1>Trading</h1>
        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industria</p>
        <Link to='/Contact'><button className='btn'>Contact</button></Link>
      </div>

      <div className='right'>
        <div className='img-container'>
            <div className='img-stack top'>
                <img src={ photo1 } alt='' className='img'/>
            </div>
            <div className='img-stack bottom'>
                <img src={ photo2 } alt='' className='img'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Trading
