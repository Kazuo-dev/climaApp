import React, { useState, useRef } from 'react';
import { Animate } from 'react-simple-animate';
import { useFetch } from './hooks/useFetch';
import Geocode from 'react-geocode';
import { ClimateItem } from './components/ClimateItem/ClimateItem';
import { ImageSelector } from './components/ImageSelector/ImageSelector';
import { Loading } from './components/Loading/Loading';
import SearchIcon from './assets/images/various/search-grey.png';
import Github from './assets/images/various/github.png';

import './App.scss';

Geocode.setApiKey(process.env.REACT_APP_GEOCODE_KEY);
Geocode.setLanguage("es");

export default function App() {
  const [city, setcity] = useState('London')
  const [url, seturl] = useState(`https://api.openweathermap.org/data/2.5/onecall?lat=-18.66&lon=-35.52&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`)
  const { data, loading } = useFetch(url);
  const form = useRef(null)
  const setNewUrl = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const adress = formData.get('adress')

    Geocode.fromAddress(adress).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location
        const adress = response.results[0].address_components[0].short_name
        setcity(adress)
        seturl(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`)
      },
      (error) => {
        alert('FATAL ERROR', error)
      }
    );
  }

  return (
    <main className="app">
      {loading ? 
      <Animate 
       play 
       start={{ opacity: 0 }} 
       end={{ opacity: 1 }}>
        <Loading />
      </Animate>
      :
      data.current ?
        <>
          <section className="app-sider">
            <div className="app-sider__search">
              <form className="app-sider__search-form" ref={form}>
                <input 
                 type="text" 
                 name="adress" 
                 placeholder="Ciudad / País"
                 >
                </input>
                <button type="submit" 
                 onClick={setNewUrl}>
                  <img src={SearchIcon} alt='search icon' />
                </button>
              </form>
            </div>

            <Animate 
             play start={{ opacity: 0 }} 
             end={{ opacity: 1 }}
            >
              <div className="app-sider__img">
                <ImageSelector state={data} />
              </div>
            </Animate>

            <div className="app-sider__info">
              <p> {Math.trunc(JSON.stringify(data.current.temp))} C°</p>
              <p id="city-name"> {city} </p>
              <p> {JSON.stringify(data.current.weather[0].description).replace(/['"]+/g, '')} </p>
            </div>

            <div className="app-sider__rrss">
              <a 
               href="https://github.com/Kazuo-dev/Climates" 
               rel="noreferrer noopener" 
               target="_blank">
                <img src={Github} alt="github" />
              </a>
            </div>
          </section>

          <section className='app-content'>
            <div className='app-content__days'>
              <ClimateItem props={data.daily[1]} state={data} />
              <ClimateItem props={data.daily[2]} state={data} />
              <ClimateItem props={data.daily[3]} state={data} />
              <ClimateItem props={data.daily[4]} state={data} />
              <ClimateItem props={data.daily[5]} state={data} />
            </div>
            <div className='app-content__today'>
              <span> Estadisticas de hoy </span>
            </div>
            <div className='app-content__grid'>
              <div className='app-content__grid-wind'>
                <h2> wind </h2>
                <p> {Math.trunc(data.current.wind_speed * 3.6)} km/h </p>
              </div>
              <div className='app-content__grid-humidity'>
                <h2> humidity </h2>
                <p> {JSON.stringify(data.current.humidity)} %</p>
              </div>
              <div className='app-content__grid-pressure'>
              <h2> pressure </h2>
              <p> {JSON.stringify(data.current.pressure)} hpa </p>
              </div>
              <div className='app-content__grid-visibility'>
              <h2> visibility </h2>
              <p> {JSON.stringify(data.current.visibility / 1000)} KM </p>
              </div>
            </div>
          </section>
        </>
        :
        <h2> error :/ </h2>
      }
    </main>
  )
}