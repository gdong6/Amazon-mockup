import React from 'react'
import '../styles/Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <img 
          className='home-banner' 
          src='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/ShoulderPeriod/GW/Heros/DT/SP22_W5_ToysDeals_GW_TallHero_DT_2x_EN._CB618056369_.jpg' 
          alt='banner'
        />

        <div className='home-row'>
          <Product 
            id="00001"
            title='Echo Show 5 (2nd Gen, 2021 release) - Charcoal bundle with Blink Mini'
            price={49.99}
            imgUrl='https://m.media-amazon.com/images/I/31Lys82GqeL._AC_UF452,452_FMjpg_.jpg'
            rating={4}
          />

          <Product 
            id="00002"
            title='Fire TV Streaming (4K and HD)'
            price={24.99}
            imgUrl='https://m.media-amazon.com/images/I/31Jh6teontL._AC_UF452,452_FMjpg_.jpg'
            rating={4}
          />
        </div>

        <div className='home-row'>
          <Product 
            id="00003"
            title='Kindle Paperwhite (8 GB) – Now with a 6.8" display and adjustable warm light'
            price={139.99}
            imgUrl='https://m.media-amazon.com/images/I/41P5MVcp1GL._AC_UF452,452_FMjpg_.jpg'
            rating={4}
          />

          <Product 
            id="00004"
            title='Amazon eero 6 dual-band mesh Wi-Fi 6 system with built-in Zigbee smart'
            price={211.00}
            imgUrl='https://m.media-amazon.com/images/I/21EafaeyIKL._AC_UF452,452_FMjpg_.jpg'
            rating={4}
          />

          <Product 
            id="00005"
            title='Echo Show 15 and Alexa Voice Remote (3rd Gen)'
            price={312.99}
            imgUrl='https://m.media-amazon.com/images/I/41B9Rgk9bIL._AC_UF452,452_FMjpg_.jpg'
            rating={4}
          />
        </div>

        <div className='home-row'>
          <Product 
            id="00006"
            title='Smart Fire TVs from $79.99'
            price={349.99}
            imgUrl='https://m.media-amazon.com/images/I/41-0fDp28qL._AC_UF452,452_FMjpg_.jpg'
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home