import EmphasisPersonalProjects from '@/public/EmphasisPersonalProjects'
import EmphasisWorkExperience from '@/public/EmphasisWorkExperience'
import HomemadeSpaceship from '@/public/HomemadeSpaceship'
import Satellite from '@/public/Satellite'
import React, { FC } from 'react'

const WorkExperience: FC = () => {
  return (
    <section className="w-full bg-white border-t-4 border-dark-purple pt-60 flex flex-col items-center space-y-20">
      <article className="max-w-[1250px] w-full flex flex-col lg:flex-row justify-between">
        <div>
          <h2 className="font-extrabold text-5xl relative mb-5 lg:mb-10 w-fit">
            <EmphasisWorkExperience className="absolute -top-10 -right-32 w-12" />
            <span className="text-pink">Work</span> experience
          </h2>
          <p className="max-w-[80ch]">
            There’s support for Figma’s Quick Actions — quickly generate text
            without needing to open the plugin window… use ⌘ + / (mac)or ctrl +
            / (windows) to bring up the actions bar, type “Lorem ipsum” and then
            press ‘tab’ to progress to pick the type and count of text to
            generate.
          </p>
        </div>
        <Satellite className="w-60" />
      </article>

      <article className="max-w-[1250px] w-full flex flex-col lg:flex-row justify-between">
        <div>
          <h2 className="font-extrabold text-5xl relative mb-5 lg:mb-10 w-fit">
            <EmphasisPersonalProjects className="absolute -top-10 -right-32 w-12" />
            <span className="text-pink">Personal</span> projects
          </h2>
          <p className="max-w-[80ch]">
            There’s support for Figma’s Quick Actions — quickly generate text
            without needing to open the plugin window… use ⌘ + / (mac)or ctrl +
            / (windows) to bring up the actions bar, type “Lorem ipsum” and then
            press ‘tab’ to progress to pick the type and count of text to
            generate.
          </p>
        </div>
        <HomemadeSpaceship className="w-60" />
      </article>
    </section>
  )
}

export default WorkExperience
