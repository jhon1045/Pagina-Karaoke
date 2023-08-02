import React from 'react'
import Footer from '../components/Foother'
import Navar from '../components/Navar'
import HeroImages from '../components/HeroImages'
// import Catalogo from '../components/Catalogo'

const Music = () => {
  return (
    <div>
      <Navar />
      <HeroImages heading='Catalogo' text='Canta sin limites'/>
      {/* <Catalogo /> */}
      <Footer />
    </div>
  )
}

export default Music
