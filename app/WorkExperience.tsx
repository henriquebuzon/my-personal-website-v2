import Float from '@/animators/Float'
import EmphasisPersonalProjects from '@/public/EmphasisPersonalProjects'
import EmphasisWorkExperience from '@/public/EmphasisWorkExperience'
import HomemadeSpaceship from '@/public/HomemadeSpaceship'
import Satellite from '@/public/Satellite'
import React, { FC } from 'react'

const WorkExperience: FC = () => {
  return (
    <section className="w-full flex flex-col items-center space-y-44 pb-36 lg:pb-56 px-3 lg:px-10">
      <article className="max-w-[1250px] w-full flex flex-col lg:flex-row-reverse justify-between items-start space-y-8 lg:space-y-0 gap-44">
        <Satellite className="w-full max-w-xs" />
        <div>
          <h2 className="font-extrabold text-3xl lg:text-5xl relative mb-5 lg:mb-10 w-fit">
            <EmphasisWorkExperience className="absolute -top-10 -right-32 w-12" />
            <span className="text-pink">Work</span> experience
          </h2>
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-bold">
                Full-stack software engineer & UX/UI designer @{' '}
                <a href="" className="text-dark-blue underline">
                  Hi-tec Inovações
                </a>
              </h3>
              <em className="opacity-80">2020 - Present</em>
              <ul className="max-w-[80ch] list-disc ml-7 flex flex-col space-y-2">
                <li>
                  Revitalized the company's online presence by completely
                  redesigning and rebuilding the previous and outdated website.
                  I utilized Figma for the designing and Typescript, React,
                  Next.JS and Tailwind for the development. The result was a
                  modern-looking, responsive and dynamic user interface that
                  received many compliments from co-workers and clients.
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-bold">
                Web developer & UX/UI designer @ Freelance
              </h3>
              <em className="opacity-80">2015 - 2020</em>
              <ul className="max-w-[80ch] list-disc ml-7 flex flex-col space-y-2">
                <li>
                  Executed various web and mobile projects for clients from
                  several countries and industries. Mostly using HTML, CSS,
                  Javascript, React, Typescript, React and React Native.
                </li>
                <li>
                  Maintained a 4.7 rating on Fiverr by consistently delivering
                  high-quality solutions on time and within budget.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      <article className="max-w-[1250px] w-full flex flex-col lg:flex-row-reverse justify-between space-y-8 lg:space-y-0 items-start gap-44">
        <HomemadeSpaceship className="w-full max-w-[18rem]" />

        <div>
          <h2 className="font-extrabold text-3xl lg:text-5xl relative mb-5 lg:mb-10 w-fit">
            <EmphasisPersonalProjects className="absolute -top-10 -right-32 w-12" />
            <span className="text-pink">Personal</span> projects
          </h2>
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-bold">
                Full-stack movie streaming platform
              </h3>
              <ul className="max-w-[80ch] list-disc ml-7 flex flex-col space-y-2">
                <li>
                  Designed a beautiful, intuitive and fully responsive UX/UI
                  using Figma.
                </li>
                <li>
                  Translated the Figma file into fast and light React components
                  with end-to-end type safety and following all clean-code
                  principles.
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-bold">Real-time chat application</h3>
              <ul className="max-w-[80ch] list-disc ml-7 flex flex-col space-y-2">
                <li>
                  Designed and crafted an immersive and visually appealing user
                  experience utilizing Chakra UI and responsive design
                  principles.
                </li>
                <li>
                  Transformed design concepts into efficient and performant
                  React components, ensuring type safety and adhering to modern
                  TypeScript practices.
                </li>
                <li>
                  Implemented OAuth authentication for seamless and secure user
                  registration and login using industry-standard authentication
                  providers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default WorkExperience
