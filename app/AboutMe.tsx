import React, { FC } from 'react'

const AboutMe: FC = () => {
  return (
    <article className="flex flex-col items-center text-white space-y-7">
      <h2 className="font-extrabold text-5xl">
        About <span className="text-yellow">me</span>
      </h2>
      <div className="flex space-x-12">
        <p className="font-bold text-right">
          <span className="text-pink">7+</span> years of experience
          <br />
          <span className="text-pink">50+</span> customers satisfied
          <br />
          <span className="text-pink">500+</span> open source contributions
        </p>
        <p className="max-w-[40ch]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat illo
          numquam laborum harum illum rem excepturi sed enim porro deserunt
          totam cumque ut, doloremque placeat ratione. Aspernatur enim corporis
          omnis.
        </p>
      </div>
    </article>
  )
}

export default AboutMe
