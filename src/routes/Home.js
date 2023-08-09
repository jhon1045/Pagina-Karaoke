// import React from 'react'
import Footer from '../components/Foother'
import Navar from '../components/Navar'
import Video from "../components/Video"
import Catalogo from '../components/Catalogo'
import Searchf from '../components/Searchf';
import Typewriter from '../components/Typewriter'
// import Midle from '../components/Midle';



const Home = () => {
  return (
    <>
      <div>
        <Navar />
        <Video />
        <Searchf />
        {/* <Midle /> */}
        <Typewriter />
        {/* <Bienestar /> */}
        <Catalogo />
        <Footer />
      </div>
      
    </>
  )
}

export default Home

