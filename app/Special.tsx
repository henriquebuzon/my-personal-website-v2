import AccessibilityIcon from '@/public/AccessibilityIcon'
import EmphasisAboutMe from '@/public/EmphasisAboutMe'
import MaintainabilityIcon from '@/public/MaintainabilityIcon'
import PerformanceIcon from '@/public/PerformanceIcon'
import ResponsiveIcon from '@/public/ResponsiveIcon'
import React from 'react'

const Special = () => {
  return (
    <section className="mb-44 flex flex-col gap-14 items-center w-full max-w-[1250px] pt-36">
      <h2 className="relative font-extrabold text-3xl lg:text-5xl text-center">
        What makes them so <span className="text-medium-blue ">special?</span>
        <EmphasisAboutMe className="absolute -top-12 -right-28 w-12 hidden lg:block" />
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
        <li className="flex flex-col border-[3px]  border-dark-purple rounded-2xl p-10">
          <ResponsiveIcon className="mb-4 w-[5.1rem] fill-pink" />
          <h3 className="font-semibold mb-2">Responsiveness</h3>
          <p className="text-base">
            The ability to adapt to any screen size. From 4k monitors to compact
            mobile devices.
          </p>
        </li>

        <li className="flex flex-col border-[3px]  border-dark-purple rounded-2xl p-10">
          <AccessibilityIcon className="mb-4 w-[5.1rem]  fill-pink" />
          <h3 className="font-semibold mb-2 ">Accessibility</h3>
          <p className="text-base">
            All users can enjoy the content, regardless of their disabilities or
            limitations.
          </p>
        </li>

        <li className="flex flex-col border-[3px]  border-dark-purple rounded-2xl p-10">
          <PerformanceIcon className="mb-4 w-[5.1rem]  fill-pink" />
          <h3 className="font-semibold mb-2 ">Performance</h3>
          <p className="text-base">
            Maximum speed and efficiency provide a seamless browsing experience.
          </p>
        </li>

        <li className="flex flex-col border-[3px]  border-dark-purple rounded-2xl p-10">
          <MaintainabilityIcon className="mb-4 w-[5.1rem]  fill-pink" />
          <h3 className="font-semibold mb-2 ">Maintainability</h3>
          <p className="text-base">
            Clean code and best practices make the codebase easy to understand
            and update.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default Special
