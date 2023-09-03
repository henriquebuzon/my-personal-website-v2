import React from 'react'
import ImagesHeaderB from './ImagesHeaderB'
import Sun from '@/public/Sun'
import AlienSpaceshipMoving from '@/public/AlienSpaceshipMoving'

const HeaderB = () => {
  return (
    <header className="relative flex justify-center bg-dark-blue text-center text-white ">
      <Sun className="absolute -top-14 w-36" />
      <div className="relative flex flex-col items-center justify-center w-full max-w-[1250px] py-56">
        <ImagesHeaderB />
        <h1 className="leading-loose">
          I build websites that are <br />
          <span className="text-5xl xl:text-6xl 2xl:text-[5.5rem] font-black tracking-tight">
            OUT OF THIS <span className="text-pink block -mt-3">WORLD</span>
          </span>
        </h1>

        <button className="px-12 py-4 rounded-full border-white border-2 mt-5  font-bold hover:scale-110 transition">
          Tell me more
        </button>
      </div>
      <AlienSpaceshipMoving className="absolute -bottom-16 w-52" />
    </header>
  )
}

export default HeaderB
