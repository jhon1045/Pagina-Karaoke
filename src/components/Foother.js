import React from 'react'
import '../Style/footer.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaSearchLocation size={20} style={{ color: '#fff', marginRight: '2rem' }} />


            <div>
              <p>123 Acm St..</p>
              <h4>Colombia, SB.</h4>
            </div>
          </div>

          <div className='phone'>
            <h4><FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />(+53) 321-654-7899</h4>
          </div>

          <div className='email'>
            <h4><FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />trips2@gmail.com</h4>
          </div>
        </div>

        <div className='right'>
          <h4>About the Company</h4>
          <p>ljdcjh cjhcdjsjd shxbshb hdbshb XHB SH BSHD BSH BDSHD BSHD BHDBUY DSBHSB HCBUHDBS UHB DSUYDSHBCSUHBCDUHSB SB HDB YDB HDDDVCHDSVCBHSDVCUHSDUHCSDH </p>

          <div className='social'>
            <FaFacebook size={20} style={{ color: '#fff', marginRight: '2rem' }}/>
            <FaTwitter size={20} style={{ color: '#fff', marginRight: '2rem' }}/>
            <FaLinkedin size={20} style={{ color: '#fff', marginRight: '2rem' }}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
