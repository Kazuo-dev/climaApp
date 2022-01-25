import React from 'react'

import Cloud from '../../assets/images/climate-icons-white/cloudy.svg';
import Default from '../../assets/images/climate-icons-white/unknown.svg';
import Flurries from '../../assets/images/climate-icons-white/flurries.svg';
import Rain from '../../assets/images/climate-icons-white/rain.svg';
import Snow from '../../assets/images/climate-icons-white/snow.svg';
import Sunny from '../../assets/images/climate-icons-white/sunny.svg';
import Tstorm from '../../assets/images/climate-icons-white/tstorm.svg';

export const ImageSelector = ({ state }) => {
  const rute = state.current.weather[0].main

  function renderSwitch() {
    switch (rute) {
      case 'Clouds':
        return <img src={Cloud} alt='Cloud imagen'/>
      
      case 'Thunderstorm':
        return <img src={Tstorm} alt='storm imagen'/>

      case 'Drizzle':
        return <img src={Flurries} alt='Flurries imagen'/>
      
      case 'Rain':
        return <img src={Rain} alt='Rain imagen'/>
            
      case 'Snow':
        return <img src={Snow} alt='Snow imagen'/>

      case 'Clear':
        return <img src={Sunny} alt='Sunny imagen'/>
            
    default:
      return <img src={Default} alt='Default imagen'/>
    }
  }

  return (
    <>
      {renderSwitch()}
    </>
  )
}
