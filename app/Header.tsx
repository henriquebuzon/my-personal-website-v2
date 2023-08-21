import PlanetWithRing from '@/public/PlanetWithRing'
import Sun from '@/public/Sun'
import { FC } from 'react'
import HeaderBackgroundImages from './HeaderBackgroundImages'

const Header: FC = () => {
  return (
    <header className="relative h-screen flex items-center justify-center  text-center overflow-x-hidden min-h-[800px] max-h-[1400px] mb-[-70px]">
      <div className="relative flex flex-col items-center -mt-[10%] z-40 p-5">
        <Sun className="w-24 mb-3 z-40 " />

        <PlanetWithRing className="absolute -left-[18rem] top-64 w-[18rem] rotate-[-324deg] z-40 hidden xl:block" />

        <h1 className="leading-loose text-white">
          Websites that are <br />
          <span className="text-5xl xl:text-6xl 2xl:text-7xl font-black tracking-tight">
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
