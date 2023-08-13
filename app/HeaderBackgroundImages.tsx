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
      <div className="hidden xl:block">
        <StarBackground className="absolute left-[8%] top-[15%] w-4  fill-[#183f6d]" />
        <StarBackground className="absolute left-[15%] top-[25%] w-5  fill-medium-blue" />
        <StarBackground className="absolute left-[18%] top-[29%] w-3  fill-gray" />
        <SmallPurplePlanet className="absolute left-[17%] top-[12%] w-6" />
        <MediumGreenPlanet className="absolute left-[28%] top-[16%] w-8" />
        <OutlinedPinkStar className="absolute left-[40%] top-[9%] w-8" />
        <StarBackground className="absolute left-[47%] top-[10%] w-3  fill-gray" />
        <StarBackground className="absolute left-[60%] top-[8%] w-2  fill-medium-blue" />
        <StarBackground className="absolute left-[66%] top-[11%] w-3  fill-pink" />
        <StarBackground className="absolute left-[72%] top-[19%] w-8  fill-[#183f6d]" />
        <SmallerPurplePlanet className="absolute left-[84%] top-[14%] w-5 " />
        <StarBackground className="absolute left-[87%] top-[24%] w-3  fill-[#183f6d]" />
        <MeteorTurnedOff className="absolute left-[91%] top-[18%] w-5 " />
        <Atom className="absolute left-[93%] top-[32%] w-44 " />
        <SpaceshipOFF className="absolute left-[80%] top-[32%] w-12" />
        <StarBackground className="absolute left-[90%] top-[53%] w-4  fill-medium-blue" />
        <StarBackground className="absolute left-[94%] top-[66%] w-7  fill-gray" />
        <SmallMeteor className="absolute left-[85%] top-[57%] w-12 rotate-12" />
        <SmallerGreenPlanet className="absolute left-[68%] top-[75%] w-6" />
        <StarBackground className="absolute left-[78%] top-[80%] w-3 fill-pink" />
        <StarBackground className="absolute left-[65%] top-[82%] w-4 fill-[#183f6d]" />
        <StarBackground className="absolute left-[47%] top-[84%] w-2 fill-medium-blue" />
        <StarBackground className="absolute left-[42%] top-[90%] w-3 fill-gray" />
        <StarBackground className="absolute left-[31%] top-[81%] w-6 fill-[#183f6d]" />
        <StarBackground className="absolute left-[25%] top-[77%] w-2 fill-medium-blue" />
        <StarBackground className="absolute left-[17%] top-[79%] w-4 fill-pink" />
        <TealStar className="absolute left-[22%] top-[87%] w-4" />
        <StarBackground className="absolute left-[13%] top-[65%] w-4 fill-[#183f6d]" />
        <StarBackground className="absolute left-[8%] top-[88%] w-2 fill-pink" />
        <Galaxy className="absolute -left-12 top-[63%] w-48 opacity-40 hidden 2xl:block" />
        <StarBackground className="absolute left-16 top-[76%] w-4 block 2xl:hidden fill-gray" />
        <StarBackground className="absolute left-[3%] top-[49%] w-2 fill-medium-blue" />
        <SmallGreyPlanet className="absolute left-[12%] top-[40%] w-4 " />
        <GreenishPlanet className="absolute left-[6%] top-[30%] w-10 " />
        <StarBackground className="absolute left-[55%] top-[87%] w-3 fill-medium-blue" />
        <StarBackground className="absolute left-[82%] top-[25%] w-4 fill-gray" />
        <StarBackground className="absolute left-[85%] top-[50%] w-2 fill-[#183f6d]" />
        <StarBackground className="absolute left-[24%] top-[10%] w-2 fill-pink" />
        <StarBackground className="absolute left-[11%] top-[55%] w-3 fill-[#183f6d]" />
        <StarBackground className="absolute left-[40%] top-[90%] w-2 fill-medium-blue" />
        <StarBackground className="absolute left-[78%] top-[15%] w-2 fill-gray" />
        <StarBackground className="absolute left-[80%] top-[5%] w-3 fill-[#183f6d]" />
      </div>

      <AlienSpaceshipMoving className="absolute left-[48%] top-[75%] lg:top-[67%] w-28" />
    </>
  )
}

export default HeaderBackgroundImages
