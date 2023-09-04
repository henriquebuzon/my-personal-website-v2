import Astronaut from '@/public/Astronaut'
import { FC } from 'react'

const AboutMe: FC = () => {
  return (
    <section className="w-full flex flex-col items-center space-y-44 pb-36 lg:pb-56 px-3 lg:px-10">
      <article className="max-w-[1250px] w-full flex flex-col lg:flex-row-reverse justify-between items-start space-y-8 lg:space-y-0 gap-44">
        <Astronaut className="w-1/4 max-w-xs" />
        <div className="w-3/4">
          <h2 className="font-extrabold text-3xl lg:text-5xl relative mb-5 lg:mb-10 w-fit">
            {/* <EmphasisWorkExperience className="absolute -top-10 -right-32 w-12" /> */}
            <span className="text-pink">About</span> me
          </h2>
          <div className="flex flex-col space-y-4">
            <p>
              I am a full-stack software developer and UX/UI designer who had
              the pleasure of working on both web and mobile applications.
            </p>

            <p>
              My journey started back in 2015, as a freelancer. Attention to
              detail and sharp communication skills enabled me to build
              long-term relationships with clients from diverse backgrounds and
              cultures.{' '}
            </p>

            <p>
              Fast forward to 2020, I made the shift to Hi-Tec Inovações, where
              I've been contributing to making the world a better place by
              delivering high-quality software in the realm of solar energy
              solutions.
            </p>

            <p>
              When I'm not immersed in lines of code, I'm out exploring. Whether
              it's a new hiking trail or the mysteries of the cosmos in
              astronomy documentaries, I'm fueled by curiosity.
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default AboutMe
