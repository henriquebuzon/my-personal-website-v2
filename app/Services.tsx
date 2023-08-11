import GreenPlanet from '@/public/GreenPlanet'
import MeteorOnfire from '@/public/MeteorOnfire'
import React from 'react'

const Services = () => {
  return (
    <section className="relative flex items-center justify-center max-w-[1250px] w-screen bg-white border-4 border-dark-purple rounded-3xl  mt-[-70px] h-56 ">
      <MeteorOnfire className="absolute -bottom-32 -left-36 z-50 w-72 rotate-[54deg] " />
      <GreenPlanet className="absolute -top-60 -right-36 z-50 w-72 -rotate-45 " />
    </section>
  )
}

export default Services
