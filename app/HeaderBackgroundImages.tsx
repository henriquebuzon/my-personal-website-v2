import AlienSpaceshipMoving from '@/public/AlienSpaceshipMoving'
import Atom from '@/public/Atom'
import Galaxy from '@/public/Galaxy'
import GreenishPlanet from '@/public/GreenishPlanet'
import MediumGreenPlanet from '@/public/MediumGreenPlanet'
import MeteorTurnedOff from '@/public/MeteorTurnedOff'
import OutlinedPinkStar from '@/public/OutlinedPinkStar'
import SmallGreyPlanet from '@/public/SmallGreyPlanet'
import SmallMeteor from '@/public/SmallMeteor'
import SmallPurplePlanet from '@/public/SmallPurplePlanet'
import SmallerGreenPlanet from '@/public/SmallerGreenPlanet'
import SmallerPurplePlanet from '@/public/SmallerPurplePlanet'
import SpaceshipOFF from '@/public/SpaceshipOFF'
import StarBackground from '@/public/StarBackground'
import TealStar from '@/public/TealStar'
import React, { FC } from 'react'

const HeaderBackgroundImages: FC = () => {
  return (
    <>
      <StarBackground className="absolute left-[8%] top-[15%] w-4 " />
      <StarBackground className="absolute left-[15%] top-[25%] w-5 " />
      <StarBackground className="absolute left-[18%] top-[29%] w-3 " />
      <SmallPurplePlanet className="absolute left-[17%] top-[12%] w-6" />
      <MediumGreenPlanet className="absolute left-[28%] top-[16%] w-8" />
      <OutlinedPinkStar className="absolute left-[35%] top-[10%] w-8" />
      <StarBackground className="absolute left-[47%] top-[12%] w-4 " />
      <StarBackground className="absolute left-[63%] top-[11%] w-3 " />
      <StarBackground className="absolute left-[72%] top-[19%] w-8 " />
      <SmallerPurplePlanet className="absolute left-[84%] top-[14%] w-5 " />
      <StarBackground className="absolute left-[87%] top-[24%] w-3 " />
      <MeteorTurnedOff className="absolute left-[91%] top-[18%] w-5 " />
      <Atom className="absolute left-[93%] top-[32%] w-44 " />
      <SpaceshipOFF className="absolute left-[80%] top-[32%] w-12" />
      <StarBackground className="absolute left-[90%] top-[53%] w-4 " />
      <SmallMeteor className="absolute left-[85%] top-[62%] w-12 rotate-12" />
      <SmallerGreenPlanet className="absolute left-[72%] top-[75%] w-6" />
      <StarBackground className="absolute left-[78%] top-[80%] w-3" />
      <AlienSpaceshipMoving className="absolute left-[48%] top-[67%] w-28" />
      <StarBackground className="absolute left-[65%] top-[82%] w-4" />
      <StarBackground className="absolute left-[47%] top-[84%] w-2" />
      <StarBackground className="absolute left-[42%] top-[86%] w-3" />
      <StarBackground className="absolute left-[31%] top-[81%] w-6" />
      <StarBackground className="absolute left-[25%] top-[77%] w-2" />
      <StarBackground className="absolute left-[17%] top-[79%] w-4" />
      <TealStar className="absolute left-[22%] top-[85%] w-4" />
      <StarBackground className="absolute left-[13%] top-[71%] w-4" />
      <StarBackground className="absolute left-[10%] top-[83%] w-4" />
      <Galaxy className="absolute -left-12 top-[63%] w-40 opacity-75" />
      <StarBackground className="absolute left-[3%] top-[54%] w-2" />
      <SmallGreyPlanet className="absolute left-[12%] top-[45%] w-4 " />
      <GreenishPlanet className="absolute left-[6%] top-[30%] w-12 " />
    </>
  )
}

export default HeaderBackgroundImages
