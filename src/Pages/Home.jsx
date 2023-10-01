import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className='mx-[100px] my-2'>
           <Navbar />
        <Hero/>
    </div>
  )
}

export default Home