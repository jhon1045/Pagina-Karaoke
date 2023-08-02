import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import  '../Style/navar.css'
import { PiDotsNineBold } from 'react-icons/pi'
import {  AiFillCloseCircle } from 'react-icons/ai'
import  imag1  from '../assets/img/imag1.png'
import im1 from '../assets/img/im1.jpg'  
import im2 from '../assets/img/im2.jpg'  
import im3 from '../assets/img/im3.jpg'  
import im4 from '../assets/img/im4.jpg'  

const Navar = () => {

  const [click, setclick] = useState(false)
  const handleClick =()=>setclick(!click);

  const [color, setcolor] = useState(false)

    const changeColor = () =>{

      if(window.scrollY >= 100){
        setcolor(true)
      }
      else{
        setcolor(false)
      }
    }

    window.addEventListener('scroll',changeColor )
  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to={'/'}>
        <img src={imag1} alt='Logo' className='m2' style={{maxWidth: '5rem'}}/>
      </Link>
      <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/Music'}>Catalogo</Link>
        </li>
        <li>
          <Link to={'/Contact'}>Contact</Link>
        </li>
        <li>
          <Link to={'/Trading'}>Trading</Link>
        </li>
        <li>
          <Link to={'/GetStart'}>Get Start</Link>
        </li>
      </ul>

        <div className='con-btn-1'>
          <Link to={'/Login'} className='btn-1 '>Login</Link>
        </div>
        
        {/* <div className='popularPlaces'>
          <div className='content'>
            <h3 className='h3' >popular Places</h3>
            <div className='images flex'>
              <img src={im1} className='i6' alt='music' />
              <img src={im2} className='i6' alt='music' />
              <img src={im3} className='i6' alt='music' />
              <img src={im4} className='i6' alt='music' />
            </div>
          </div>
        </div> */}

      <div className='hambur' onClick={handleClick}>
        {click ? (<AiFillCloseCircle size={30}  className='aiFill'/>) : (<PiDotsNineBold size={40}  className='piDo'/>) }
        
      </div>
    </div>
  )
}

export default Navar
