import GreenPlanet from '@/public/GreenPlanet'
import MeteorOnfire from '@/public/MeteorOnfire'
import React from 'react'
import ResponsiveIcon from '@/public/ResponsiveIcon'
import AccessibilityIcon from '@/public/AccessibilityIcon'
import MaintainabilityIcon from '@/public/MaintainabilityIcon'
import PerformanceIcon from '@/public/PerformanceIcon'

const Services = () => {
  return (
    <section className="relative flex flex-col justify-center max-w-[1250px] w-screen bg-white border-4 border-dark-purple rounded-3xl px-5 py-10 md:p-10 lg:px-20 lg:pt-16 lg:pb-[4.7rem] space-y-12 mb-20 lg:mb-36">
      <p className="font-bold text-3xl">What makes them so special?</p>
      <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid- w-full gap-16 lg:gap-10 ">
        <div className="flex flex-col ">
          <ResponsiveIcon className="mb-5 w-[4.5rem] fill-pink" />
          <h3 className="font-semibold mb-3">Responsiveness</h3>
          <p>
            The ability to adapt to any screen size. From 4k monitors to compact
            mobile devices.
          </p>
        </div>

        <div className="flex flex-col ">
          <AccessibilityIcon className="mb-5 w-[4.5rem]  fill-pink" />
          <h3 className="font-semibold mb-3 ">Accessibility</h3>
          <p>
            All users can enjoy the content, regardless of their disabilities or
            limitations.
          </p>
        </div>

        <div className="flex flex-col ">
          <PerformanceIcon className="mb-5 w-[4.5rem]  fill-pink" />
          <h3 className="font-semibold mb-3 ">Performance</h3>
          <p>
            Maximum speed and efficiency provide a seamless browsing experience.
          </p>
        </div>

        <div className="flex flex-col ">
          <MaintainabilityIcon className="mb-5 w-[4.5rem]  fill-pink" />
          <h3 className="font-semibold mb-3 ">Maintainability</h3>
          <p>
            Clean code and best practices make the codebase easy to understand
            and update.
          </p>
        </div>
      </article>
      <GreenPlanet className="absolute -top-[20.4rem] -right-32 z-40 w-[20rem] -rotate-45 hidden xl:block" />
      <MeteorOnfire className="absolute -bottom-32 -left-48 z-50 w-72 rotate-[54deg] hidden xl:block" />
    </section>
  )
}

export default Services
