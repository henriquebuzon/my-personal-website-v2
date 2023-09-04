import React from 'react'
import ImagesHeader from './ImagesHeader'
import Sun from '@/public/Sun'
import AlienSpaceshipMoving from '@/public/AlienSpaceshipMoving'

const Header = () => {
  return (
    <header className="relative flex justify-center bg-dark-blue text-center text-white pt-[70px] md:pt-0">
      <Sun className="absolute top-7 md:-top-14 w-28 md:w-36 hidden md:block" />
      <div className="relative flex flex-col items-center justify-center w-full max-w-[1250px] py-40 md:py-56">
        <ImagesHeader />
        <h1 className="leading-loose">
          I build websites that are <br />
          <span className="text-5xl md:text-7xl xl:text-[5.5rem] font-black tracking-tight">
            OUT OF THIS <span className="text-pink block -mt-3">WORLD</span>
          </span>
        </h1>

        <button className="px-12 py-4 rounded-full border-white border-2 mt-5  font-bold hover:scale-110 transition">
          Tell me more
        </button>
      </div>
      <AlienSpaceshipMoving className="absolute -bottom-8 md:-bottom-16 w-36 md:w-52" />
    </header>
  )
}

export default Header
