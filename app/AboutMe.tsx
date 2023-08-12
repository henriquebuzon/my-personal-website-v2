import AboutMeBG from '@/public/AboutMeBG'
import Astronaut from '@/public/Astronaut'
import EmphasisAboutMe from '@/public/EmphasisAboutMe'
import React, { FC } from 'react'

const AboutMe: FC = () => {
  return (
    <article className="flex flex-col items-center  text-white w-full px-2 md:px-10">
      <h2 className="font-extrabold text-5xl relative mb-16">
        <EmphasisAboutMe className="absolute -top-12 -right-28 w-12" />
        About <span className="text-yellow">me</span>
      </h2>
      <div className="flex flex-col lg:flex-row space-y-12 lg:space-x-12 lg:space-y-0 mb-5">
        <p className="font-bold lg:text-right">
          <span className="text-pink">7+</span> years of experience
          <br />
          <span className="text-pink">50+</span> customers satisfied
          <br />
          <span className="text-pink">500+</span> open source contributions
        </p>
        <p className="max-w-[40ch]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat illo
          numquam laborum harum illum rem excepturi sed enim porro deserunt
          totam cumque ut, doloremque placeat ratione. Aspernatur enim corporis
          omnis.
        </p>
      </div>

      <div className="relative">
        <AboutMeBG className="absolute w-full object-cover z-30" />
        <Astronaut className="absolute top-0 left-0 w-44 z-40" />
      </div>
    </article>
  )
}

export default AboutMe
