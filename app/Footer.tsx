import Galaxy from '@/public/Galaxy'
import React, { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className=" w-full flex flex-col justify-center items-center  text-white">
      <div className="relative mt-[22rem] mb-44 flex justify-center items-center px-3 lg:px-10 ">
        <h2 className="font-extrabold text-3xl lg:text-5xl ">
          Lets <span className="text-pink">solve</span> this puzzle
        </h2>
        <Galaxy className="absolute w-52 -z-10 opacity-20 " />
      </div>

      <div className="w-full z-50  flex flex-col md:flex-row items-center justify-center text-dark-purple text-sm gap-5">
        <div className="flex flex-col md:flex-row justify-between items-center w-screen max-w-[1250px]  bg-white  rounded-t-3xl p-10 border-t-4 border-x-4 border-dark-purple gap-5 md:gap-0">
          <p className="opacity-80">
            © Copyright 2021 by{' '}
            <span className="font-semibold">Henrique Buzon</span>
          </p>
          <div className="flex flex-row font-semibold gap-5">
            <a
              href="https://www.linkedin.com/in/your-profile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
