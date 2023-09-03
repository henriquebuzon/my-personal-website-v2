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
        <GreenPlanet className="absolute top-36 left-10 w-36" />
        <MeteorOnfire className="absolute bottom-20 left-10 w-48 " />

        <SpaceshipOFF className="absolute top-20 right-16 w-24" />
        <PlanetWithRing className="absolute bottom-36 right-10 w-56 " />
      </div>
    </>
  )
}

export default ImagesHeaderB
