import React from 'react'
import  '../src/App.css'
import { Routes, Route} from 'react-router-dom'
import Music from '../src/routes/MusicSection'
import Home from './routes/Home'
import Trading from './routes/TradingSection'
import Contact from './routes/ContactSection'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Music' element={<Music />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Trading' element={<Trading />} />
    </Routes> 
  </>
  );
}

export default App;
