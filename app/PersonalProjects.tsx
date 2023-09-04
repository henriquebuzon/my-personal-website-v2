import EmphasisPersonalProjects from '@/public/EmphasisPersonalProjects'
import HomemadeSpaceship from '@/public/HomemadeSpaceship'
import React from 'react'

const PersonalProjects = () => {
  return (
    <section className="w-full flex flex-col items-center space-y-44 pb-36 lg:pb-56 px-3 lg:px-10">
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

export default PersonalProjects
