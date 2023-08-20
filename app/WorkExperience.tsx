import EmphasisPersonalProjects from '@/public/EmphasisPersonalProjects'
import EmphasisWorkExperience from '@/public/EmphasisWorkExperience'
import HomemadeSpaceship from '@/public/HomemadeSpaceship'
import Satellite from '@/public/Satellite'
import React, { FC } from 'react'

const WorkExperience: FC = () => {
  return (
    <section className="w-full bg-white border-t-4 border-dark-purple pt-32 lg:pt-60 flex flex-col items-center space-y-44 pb-36 lg:pb-56 px-3 lg:px-10">
      <article className="max-w-[1250px] w-full flex flex-col lg:flex-row-reverse justify-between items-start space-y-8 lg:space-y-0">
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
                <li>
                  Optimized search engine as well as the website's loading times
                  by properly implementing React server components with Next.JS
                  v13, resulting in a more than 60% decrease in page load times.
                </li>
                <li>
                  Collaborated closely with a fellow developer to conceptualize
                  and build a full-stack mobile application using React Native,
                  Node.JS and Typescript. This app allows users to control home
                  devices while also monitoring solar energy consumption data
                  through a RESTful API that performs CRUD operations on a
                  PostgreSQL database with a secure token-based authentication
                  system.
                </li>
                <li>
                  Completed over 300 hours of Udemy courses on several
                  Javascript frameworks and libraries, demonstrating commitment
                  to staying updated with industry trends.
                </li>
                <li>
                  Currently conducting and monitoring several strategic
                  experiments and refining experiences based on metrics from
                  Google Analytics.
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
                <li>
                  Forged long-term relationships through effective
                  communication, understanding client needs, and translating
                  them into functional and aesthetically pleasing user
                  interfaces.
                </li>
                <li>
                  Transitioned several clients from outdated websites to modern
                  and responsive designs, leading to an increase in user
                  engagement and an improved online presence for their
                  businesses.
                </li>
                <li>
                  Currently conducting and monitoring several strategic
                  experiments and refining experiences based on metrics from
                  Google Analytics.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      <article className="max-w-[1250px] w-full flex flex-col lg:flex-row-reverse justify-between space-y-8 lg:space-y-0 items-start">
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
                <li>
                  Created and consumed a RESTful API that performs CRUD
                  operations on a PostgreSQL database, also with end-to-end type
                  safety and following all clean-code principles (using Node.JS
                  and Express).
                </li>
                <li>
                  Implemented a secure and stateless authentication with JWT and
                  HTTP-only cookies, following the RESTful architecture.
                </li>
                <li>
                  Implemented an advanced movie filtering and pagination system
                  with “infinite scroll” and automatic searching on each
                  keystroke.
                </li>
                <li>
                  Implemented an intuitive and easy-to-use administrator
                  interface that is seamlessly integrated with the
                  filtering/pagination system.
                </li>
                <li>
                  Implemented a “my list” functionality with optimistic UI
                  rendering.
                </li>
                <li>Implemented E2E tests using Cypress.</li>
                <li>
                  Facilitated horizontal scaling and prevented compatibility
                  issues by implementing a microservices architecture using
                  Docker, Docker Compose and NGINX.
                </li>
                <li>
                  Deployed to Google Cloud Platform with a CI/CD pipeline
                  integrated.
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
                <li>
                  Created a dynamic and intuitive GraphQL API that efficiently
                  manages chat messages and user interactions, enhancing the
                  real-time nature of the application.
                </li>
                <li>
                  Established a robust WebSocket-based communication system,
                  enabling real-time, bidirectional data flow and live updates
                  for a seamless chat experience.
                </li>
                <li>
                  Developed a fluid and responsive user interface using Next.js,
                  allowing for optimized server-side rendering and enhanced
                  performance.
                </li>
                <li>
                  Leveraged TypeScript's static typing to ensure code integrity
                  and reduce runtime errors, resulting in a more stable and
                  maintainable codebase.
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
