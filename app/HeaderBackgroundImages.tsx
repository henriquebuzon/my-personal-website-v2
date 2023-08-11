import MediumGreenPlanet from '@/public/MediumGreenPlanet'
import OutlinedPinkStar from '@/public/OutlinedPinkStar'
import SmallPurplePlanet from '@/public/SmallPurplePlanet'
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

      <StarBackground className="absolute left-[8%] top-[15%] w-4 " />
      <StarBackground className="absolute left-[8%] top-[15%] w-4 " />
      <StarBackground className="absolute left-[8%] top-[15%] w-4 " />
      <StarBackground className="absolute left-[8%] top-[15%] w-4 " />
      <StarBackground className="absolute left-[8%] top-[15%] w-4 " />
      <StarBackground className="absolute left-[8%] top-[15%] w-4 " />
    </>
  )
}

export default HeaderBackgroundImages
