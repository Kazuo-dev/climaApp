import React from 'react'

import Cloud from '../../assets/images/climate-icons-white/cloudy.svg'
import Default from '../../assets/images/climate-icons-white/unknown.svg'
import Flurries from '../../assets/images/climate-icons-white/flurries.svg'
import Rain from '../../assets/images/climate-icons-white/rain.svg'
import Snow from '../../assets/images/climate-icons-white/snow.svg'
import Sunny from '../../assets/images/climate-icons-white/sunny.svg'
import Tstorm from '../../assets/images/climate-icons-white/tstorm.svg'

export const ImageSelector = ({state = state}) => {
  const rute = state.current.weather[0].main

  function renderSwitch() {
    switch (rute) {
      case 'Clouds':
        return <img src={Cloud} />
      
      case 'Thunderstorm':
        return <img src={Tstorm} />

      case 'Drizzle':
        return <img src={Flurries} />
      
      case 'Rain':
        return <img src={Rain} />
            
      case 'Snow':
        return <img src={Snow} />

      case 'Clear':
        return <img src={Sunny} />
            
    default:
      return <img src={Default} />
    }
  }

  return (
    <>
      {renderSwitch()}
    </>
  )
}
