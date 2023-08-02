import React from 'react'
import '../Style/footer.css'
import  imag1  from '../assets/img/imag1.png'
import { FaPhone } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'
import { GrContact } from 'react-icons/gr'
 
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='logo'>
            <img src={ imag1 } className='m2'/>
          </div>
        </div>
        
          <div className='social flex'>
            <ImFacebook className='icon4'/>
            <BsTwitter className='icon4'/>
            <AiFillInstagram className='icon4'/>
          </div>

          <div className='footherLink'>
            <span className='linkTitle'>
              Information
            </span>

            <li className='li'>
              <a href='#'>Home</a>
              <a href='#'>Explore</a>
              <a href='#'>Travel</a>
              <a href='#'>Blog</a>
            </li>
          </div>

          <div className='footherLink'>
            <span className='linkTitle'>
              Helpful links
            </span>

            <li className='li'>
              <a href='#'>Help</a>
              <a href='#'>Support</a>
              <a href='#'>Travel</a>
              <a href='#'>privacy</a>
            </li>
          </div>

          <div className='footherLink'>
            <span className='linkTitle'>
              Helpful links
            </span>

            <li className='li'>
              <a href='#'>Help</a>
              <a href='#'>Support</a>
              <a href='#'>Travel & Condition</a>
              <a href='#'>privacy</a>
            </li>
          </div>

          <div className='footherLink'>
            <span className='linkTitle'><GrContact className='icon4 t2'/> contact Details</span>
            <span className='linkTitle'><FaPhone className='icon4 t2'/>+651 123 456 23</span>
            <span className='linkTitle'><CgMail className='icon4 t2'/>jkt@gmail.com</span>
          </div>
      </div>
    </div>
  )
}

export default Footer
