import Atom from '@/public/Atom'
import MediumGreenPlanet from '@/public/MediumGreenPlanet'
import MeteorTurnedOff from '@/public/MeteorTurnedOff'
import OutlinedPinkStar from '@/public/OutlinedPinkStar'
import SmallPurplePlanet from '@/public/SmallPurplePlanet'
import SmallerPurplePlanet from '@/public/SmallerPurplePlanet'
import StarBackground from '@/public/StarBackground'
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
      <Atom className="absolute left-[92%] top-[32%] w-36" />
    </>
  )
}

export default HeaderBackgroundImages
