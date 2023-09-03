import HeaderImageLeft from '@/public/HeaderImageLeft'
import HeaderImageRight from '@/public/HeaderImageRight'
import PlanetWithFlag from '@/public/PlanetWithFlag'
import { FC } from 'react'

const Header: FC = () => {
  return (
    <header className="flex items-center justify-center text-center space-x-24 my-20 max-w-[1800px] mx-auto">
      <HeaderImageLeft className="w-[23vw]" />

      <div className="flex flex-col items-center p-5 pb-16">
        <PlanetWithFlag className="w-36 mb-5 " />

        <h1 className="leading-loose">
          I build websites that are <br />
          <span className="text-5xl xl:text-6xl 2xl:text-[6rem] font-black tracking-tight">
            OUT OF THIS{' '}
            <span className="text-medium-blue block -mt-3">WORLD</span>
          </span>
        </h1>

        <button className="px-12 py-4 bg-pink rounded-full border-dark-purple border-[3px] mt-5  font-bold hover:scale-110 transition">
          Tell me more
        </button>
      </div>

      <HeaderImageRight className="w-[23vw]" />
    </header>
  )
}

export default Header
