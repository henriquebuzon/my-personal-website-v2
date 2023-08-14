import Galaxy from '@/public/Galaxy'
import React, { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className=" w-full flex flex-col justify-center items-center px-3 lg:px-10  text-white">
      <div className="relative mt-[22rem] mb-44 flex justify-center items-center">
        <h2 className="font-extrabold text-3xl lg:text-5xl ">
          Lets <span className="text-pink">solve</span> this puzzle
        </h2>
        <Galaxy className="absolute w-52 -z-10 opacity-20 " />
      </div>

      <div className="w-full z-50  flex items-center justify-center px-8 ">
        <div className="flex justify-between items-center w-screen max-w-[1250px]  bg-white h-[120px] rounded-t-3xl px-10 border-t-4 border-x-4 border-dark-purple">
          aaa
        </div>
      </div>
    </footer>
  )
}

export default Footer
