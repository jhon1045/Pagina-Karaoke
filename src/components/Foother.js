import React from 'react'
import fb from '../assets/icon/facebook_1313704.png'
import li from '../assets/icon/linkedin_145807.png'
import tw from '../assets/icon/twitter_3670151.png'
import '../Style/footer.css'

export default function Foother() {
  return (
    <div className='footer'>
      <div className='sb__footer section_padding'>
        <div className='sb__footer-links'>
          <div className='sb__footer-links-div'>
            <h4>for Business</h4>
            <a href='#'>
              <p>Employer</p>
            </a>

            <a href='#'>
              <p>held plan</p>
            </a>

            <a href='#'>
              <p>individual</p>
            </a>
          </div>

          <div className='sb__footer-links-div'>
            <h4>for Business</h4>
            <a href='#'>
              <p>Employer</p>
            </a>

            <a href='#'>
              <p>held plan</p>
            </a>

            <a href='#'>
              <p>individual</p>
            </a>
          </div>

          <div className='sb__footer-links-div'>
            <h4>for Business</h4>
            <a href='#'>
              <p>Employer</p>
            </a>

            <a href='#'>
              <p>held plan</p>
            </a>

            <a href='#'>
              <p>individual</p>
            </a>
          </div>

          <div className='sb__footer-links-div'>
            <h4>for Business</h4>
            <a href='#'>
              <p>Employer</p>
            </a>

            <a href='#'>
              <p>held plan</p>
            </a>

            <a href='#'>
              <p>individual</p>
            </a>
          </div>


          <div className='sb__footer-links-div'>
            <h4>Cooming soon </h4>
            <div className='socialMedia'>
              <p><img src={fb} alt='logo pagina' /></p>
              <p><img src={tw} alt='logo pagina' /></p>
              <p><img src={li} alt='logo pagina' /></p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className='sb__footer-below'>
          <div className='sb__footer-copiryng'>
            <p>
              @{new Date().getFullYear()} Codeinn. All right reserved
            </p>
          </div>

          <div className='sb__footer-below-links'>
            <a href='#'><div><p>Terms & Conditions</p></div></a>
            <a href='#'><div><p>Privacyti</p></div></a>
            <a href='#'><div><p>Security</p></div></a>
            <a href='#'><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>
      </div>
    </div>
  )
}
