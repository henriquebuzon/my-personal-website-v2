import AboutMeBG from '@/public/AboutMeBG'
import EmphasisAboutMe from '@/public/EmphasisAboutMe'
import StarCTA from '@/public/StarCTA'
import { FC } from 'react'

const AboutMe: FC = () => {
  return (
    <section className="flex flex-col md:items-center justify-center text-white w-full px-5 md:px-20 -mb-[5.5rem]">
      <h2 className="font-extrabold text-5xl relative mb-10 lg:mb-16">
        <EmphasisAboutMe className="absolute -top-12 -right-28 w-12" />
        About <span className="text-yellow">me</span>
      </h2>
      <article className="flex flex-col lg:flex-row space-y-12 lg:space-x-12 lg:space-y-0 mb-10 lg:mb-5">
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
      </article>

      <AboutMeBG className="w-full max-w-[1500px] " />

      <StarCTA className="w-52 z-40 self-center" />
    </section>
  )
}

export default AboutMe
