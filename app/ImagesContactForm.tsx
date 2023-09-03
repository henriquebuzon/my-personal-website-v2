import AbducingAlienSpaceship from '@/public/AbductingAlienSpaceship'
import AlienHead from '@/public/AlienHead'
import FlyingHumanSpaceship from '@/public/FlyingHumanSpaceship'
import GreenPlanet from '@/public/MediumGreenPlanet'
import MeteorTurnedOff from '@/public/MeteorTurnedOff'
import PinkShootingStar from '@/public/PinkShootingStar'
import Ufo from '@/public/Ufo'
import YellowThunder from '@/public/YellowThunder'
import React, { FC } from 'react'

const ImagesContactForm: FC = () => {
  return (
    <>
      <AlienHead className="absolute -top-24 w-40" />
      <div className="hidden lg:block">
        <AbducingAlienSpaceship className="absolute top-[8%] left-24 w-44" />
        <MeteorTurnedOff className="absolute top-[43%] -left-5 w-28" />
        <YellowThunder className="absolute top-[75%] left-14 w-44" />

        <PinkShootingStar className="absolute top-[8%] right-10 w-56" />
        <Ufo className="absolute top-[40%] -right-10 w-40" />
        <GreenPlanet className="absolute top-[75%] right-16 w-32" />
      </div>

      <FlyingHumanSpaceship className="absolute -bottom-48 w-40" />
    </>
  )
}

export default ImagesContactForm
