import React from 'react'
import TextScramble from '../components/TextScramble'
import image from '../assets/images/banner3.jpeg'

const Home = () => {
  return (
    <div className='home'>
      <TextScramble  text="Welcome to Aivon - Guide you About AI!" />
      <img src={image} alt="" />
    </div>
  )
}

export default Home
