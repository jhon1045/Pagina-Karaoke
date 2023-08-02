import React from 'react'
import '../Style/video.css'
import { Link } from 'react-router-dom'
import { AiOutlineSwapRight } from 'react-icons/ai'
import can from '../assets/video/can.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
          <source src={can} type='video/mp4' />
        </video>

      <div className='cotent'>
        <h1>Euforia</h1>
        <p>Ven y Atrevate a Cantar</p>


        <div>
          <Link to='/Music' className='btn-1'>GetStart <AiOutlineSwapRight /></Link>
        </div>
      </div>
    </div>
  )
}

export default Video
