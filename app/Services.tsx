import GreenPlanet from '@/public/GreenPlanet'
import MeteorOnfire from '@/public/MeteorOnfire'
import React from 'react'

const Services = () => {
  return (
    <section className="relative flex items-center justify-center max-w-[1250px] w-screen bg-white border-4 border-dark-purple rounded-3xl h-56 ">
      <GreenPlanet className="absolute -top-[17.5rem] -right-32 z-40 w-[20rem] -rotate-45 hidden xl:block" />
      <MeteorOnfire className="absolute -bottom-32 -left-44 z-50 w-72 rotate-[54deg] hidden xl:block" />
    </section>
  )
}

export default Services
