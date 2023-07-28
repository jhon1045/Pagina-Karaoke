import React from 'react'
import Navar from '../components/Navar'
import Footer from '../components/Foother'
import HeroImages from '../components/HeroImages'
import Trading from '../components/Trading'

const TradingSection = () => {
  return (
    <div>
      <Navar />
      <HeroImages heading='Trading' text='Trading of the travel Trading'/>
      <Trading />
      <Footer />
    </div>
  )
}

export default TradingSection
