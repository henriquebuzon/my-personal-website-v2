import AboutMeBG from '@/public/AboutMeBG'
import Astronaut from '@/public/Astronaut'
import EmphasisAboutMe from '@/public/EmphasisAboutMe'
import StarCTA from '@/public/StarCTA'
import { FC } from 'react'

const AboutMe: FC = () => {
  return (
    <section className="flex flex-col md:items-center justify-center text-white w-full px-5 md:px-20 -mb-[5.5rem]">
      <h2 className="font-extrabold text-3xl lg:text-5xl relative mb-10 lg:mb-16">
        <EmphasisAboutMe className="absolute -top-12 -right-28 w-12" />
        About <span className="text-yellow">me</span>
      </h2>
      <article className="flex flex-col lg:flex-row space-y-12 lg:space-x-12 lg:space-y-0 mb-10 lg:mb-5">
        <strong className="font-bold lg:text-right">
          <span className="text-pink">9+</span> years of experience
          <br />
          <span className="text-pink">50+</span> customers satisfied
          <br />
          <span className="text-pink">500+</span> open source contributions
        </strong>
        <div className="max-w-[40ch] flex flex-col gap-4">
          <p>
            I'm a full-stack software developer and UX/UI designer who had the
            pleasure of working on dozens of both web and mobile applications.
          </p>

          <p>
            When I'm not immersed in lines of code, I'm out exploring. Whether
            it's a new hiking trail or the mysteries of the cosmos in astronomy
            documentaries, I'm fueled by curiosity.
          </p>
        </div>
      </article>

      <AboutMeBG className="w-full max-w-[1500px] hidden lg:block" />
      <Astronaut className="w-48 self-center block lg:hidden mb-10 lg:mb-0" />

      <StarCTA className="w-52 z-40 self-center" />
    </section>
  )
}

export default AboutMe
