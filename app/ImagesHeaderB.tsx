import AlienSpaceshipMoving from '@/public/AlienSpaceshipMoving'
import GreenPlanet from '@/public/GreenPlanet'
import MeteorOnfire from '@/public/MeteorOnfire'
import PlanetWithRing from '@/public/PlanetWithRing'
import SpaceshipOFF from '@/public/SpaceshipOFF'
import Sun from '@/public/Sun'
import { FC } from 'react'

const ImagesHeaderB: FC = () => {
  return (
    <>
      <div className="hidden lg:block">
        <GreenPlanet className="absolute top-28 left-10 w-36" />
        <MeteorOnfire className="absolute bottom-12 left-10 w-48 " />

        <SpaceshipOFF className="absolute top-20 right-16 w-24" />
        <PlanetWithRing className="absolute bottom-28 right-10 w-56 rotate-90" />
      </div>
    </>
  )
}

export default ImagesHeaderB
