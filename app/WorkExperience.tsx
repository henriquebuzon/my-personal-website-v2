import EmphasisWorkExperience from '@/public/EmphasisWorkExperience'
import Satellite from '@/public/Satellite'
import { FC } from 'react'

const WorkExperience: FC = () => {
  return (
    <section
      className="w-full flex flex-col items-center space-y-44 pb-36 lg:pb-56 px-3 lg:px-10"
      id="work"
    >
      <article className="max-w-[1250px] w-full flex flex-col lg:flex-row-reverse justify-between items-start space-y-8 lg:space-y-0 gap-5 md:gap-20 lg:gap-44">
        <Satellite className="w-full lg:w-1/4 max-w-xs" />
        <div className="w-full lg:w-3/4">
          <h2 className="font-extrabold text-3xl lg:text-5xl relative mb-5 lg:mb-10 w-fit">
            <EmphasisWorkExperience className="absolute -top-10 -right-32 w-12 hidden lg:block" />
            <span className="text-pink">Work</span> experience
          </h2>
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-bold">
                Full-stack software engineer & UX/UI designer @{' '}
                <a
                  href="https://www.hitecsolar.com.br/"
                  className="text-medium-blue underline"
                >
                  Hi-tec Inovações
                </a>
              </h3>
              <p>
                <em className="opacity-80">2020 - Present</em>
              </p>
              <p>
                Hi-tec is a dynamic company at the forefront of solar energy and
                home automation solutions. In my role as a UX/UI Designer and
                Full-Stack Software Developer I blend creativity with technical
                expertise.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-bold">
                Web developer & UX/UI designer @ Freelance
              </h3>
              <p>
                <em className="opacity-80">2015 - 2020</em>
              </p>
              <p>
                Workind independently I have gained valuable experience in
                understanding customers needs, communicating effectively and
                dealing with time sensitive projects. Freelancing often
                presented diverse challenges, which I embraced as opportunities
                for growth.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default WorkExperience
