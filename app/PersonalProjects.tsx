import EmphasisPersonalProjects from '@/public/EmphasisPersonalProjects'
import HomemadeSpaceship from '@/public/HomemadeSpaceship'
import React from 'react'

const PersonalProjects = () => {
  return (
    <section className="w-full flex flex-col items-center space-y-44 pb-36 lg:pb-56 px-3 lg:px-10">
      <article className="max-w-[1250px] w-full flex flex-col lg:flex-row-reverse justify-between space-y-8 lg:space-y-0 items-start gap-44">
        <HomemadeSpaceship className="w-1/4" />

        <div className="w-3/4">
          <h2 className="font-extrabold text-3xl lg:text-5xl relative mb-5 lg:mb-10 w-fit">
            <EmphasisPersonalProjects className="absolute -top-10 -right-32 w-12" />
            <span className="text-pink">Personal</span> projects
          </h2>
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-bold">
                Full-stack movie streaming platform @{' '}
                <a
                  href="https://www.nextflixapp.com/"
                  className="text-medium-blue underline"
                >
                  Live preview
                </a>{' '}
                |{' '}
                <a
                  href="https://github.com/henriquedevelops/nextflix"
                  className="text-medium-blue underline"
                >
                  Source code
                </a>
              </h3>
              <p>
                In this project, I designed a responsive user interface with
                Figma, translated it into a fast and accessible React frontend,
                and built a secure RESTful API with PostgreSQL integration and a
                secure and stateless authentication system. I also implemented
                advanced features like automatic. The project follows
                microservices architecture using Docker and is deployed on
                Google Cloud Platform with a CI/CD pipeline.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-bold">
                Real-time chat application @{' '}
                <a
                  href="https://github.com/henriquedevelops/youtype"
                  className="text-medium-blue underline"
                >
                  Source code
                </a>
              </h3>
              <p>
                This application enables real-time messaging, with user
                authentication powered by OAuth for a streamlined and secure
                login experience. TypeScript and GraphQL ensure robust data
                handling and type safety, while Apollo facilitates efficient
                communication between the client and server.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default PersonalProjects
