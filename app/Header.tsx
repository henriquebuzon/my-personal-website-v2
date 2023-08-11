import PlanetWithRing from '@/public/PlanetWithRing'
import StarBackground from '@/public/StarBackground'
import Sun from '@/public/Sun'
import React, { FC } from 'react'
import HeaderBackgroundImages from './HeaderBackgroundImages'
import GreenPlanet from '@/public/GreenPlanet'

const Header: FC = () => {
  return (
    <header className="relative h-screen flex items-center justify-center  text-center overflow-x-hidden z-50">
      <div className="relative flex flex-col items-center -mt-[10%] ">
        <Sun className="w-24 mb-3 z-50" />

        <PlanetWithRing className="absolute -left-[19rem] top-72 w-60 rotate-[-325deg] z-50" />

        <h1 className="leading-loose text-white">
          Websites that are <br />
          <span className="text-7xl font-black tracking-tight">
            OUT OF THIS WORLD
          </span>
        </h1>

        <button className="px-12 py-4 bg-pink rounded-full border-dark-purple border-[3px] mt-5  font-bold hover:scale-110 transition">
          Tell me more
        </button>
      </div>

      <HeaderBackgroundImages />
    </header>
  )
}

export default Header
