import Galaxy from '@/public/Galaxy'
import React, { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className=" w-full flex flex-col justify-center items-center bg-dark-blue text-white">
      <div className="relative mt-[21.5rem] mb-32 flex justify-center items-center px-3 lg:px-10 ">
        <h2 className="font-extrabold text-3xl lg:text-5xl z-20">
          Lets <span className="text-pink">solve</span> this puzzle
        </h2>
        <Galaxy className="absolute w-52 z-10 opacity-10 " />
      </div>

      <div className="w-full z-50  flex flex-col md:flex-row items-center justify-center text-sm gap-5">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center w-screen max-w-[1250px]   p-10  gap-5 md:gap-0">
          <p className="opacity-80 text-white">
            &copy; Copyright 2021 by{' '}
            <strong className="font-semibold">Henrique Macedo</strong>
          </p>
          <ul className="flex flex-row font-semibold gap-8 ">
            <li>
              <a
                href="https://www.linkedin.com/in/henriquebuzon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/in/henriquebuzon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/henrique/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
