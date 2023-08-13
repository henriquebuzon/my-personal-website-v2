import AboutMeBG from '@/public/AboutMeBG'
import Astronaut from '@/public/Astronaut'
import EmphasisAboutMe from '@/public/EmphasisAboutMe'
import React, { FC } from 'react'

const AboutMe: FC = () => {
  return (
    <article className="flex flex-col items-center  text-white w-full px-5 md:px-20 -space-y-5">
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

      <div className="relative w-full max-h-fit ">
        <AboutMeBG className="w-full h-auto" />
        <Astronaut className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 mt-5" />
      </div>
    </article>
  )
}

export default AboutMe
