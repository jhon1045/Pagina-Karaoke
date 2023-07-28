import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import  '../Style/navar.css'
import { FaBars, FaTimes } from 'react-icons/fa'

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
      <Link to={'/'}><h1>JhonZLogo</h1></Link>
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
          <Link to={'/Login'}>Login</Link>
        </li>
        <li>
          <Link to={'/GetStart'}>Get Start</Link>
        </li>
      </ul>

      <div className='hambur' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : (<FaBars size={20} style={{color: '#fff'}}/>) }
        
      </div>
    </div>
  )
}

export default Navar
