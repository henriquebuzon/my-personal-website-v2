import PlanetWithRing from '@/public/PlanetWithRing'
import Sun from '@/public/Sun'
import React, { FC } from 'react'

const Header: FC = () => {
  return (
    <header className="h-screen flex items-center justify-center text-white text-center ">
      <div className="relative flex flex-col items-center -mt-[12%] ">
        <Sun className="w-24 mb-3 " />

        <h1 className="leading-loose ">
          Websites that are <br />
          <span className="text-7xl font-black tracking-tight">
            OUT OF THIS WORLD
          </span>
        </h1>

        <button className="px-12 py-4 bg-pink rounded-full border-dark-purple border-[3px] mt-5 text-dark-purple font-bold">
          Tell me more
        </button>

        <PlanetWithRing className="absolute -left-[19rem] top-72 w-60 rotate-[-325deg]" />
      </div>{' '}
    </header>
  )
}

export default Header
