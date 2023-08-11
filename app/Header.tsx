import React, { FC } from 'react'

const Header: FC = () => {
  return (
    <header className="relative h-screen flex flex-col items-center justify-center text-white text-center">
      <h1 className="leading-loose -mt-[11%]">
        Websites that are <br />
        <span className="text-7xl font-bold tracking-tight">
          OUT OF THIS WORLD
        </span>
      </h1>
    </header>
  )
}

export default Header
