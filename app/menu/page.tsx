import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <>
      <Navbar isMenu={true} />
      <div className="h-screen z-10 w-screen flex items-center justify-center">
        <div className="flex flex-col gap-5 justify-center items-center text-center font-semibold text-xl">
          <Link href={'/about'}>About</Link>
          <Link href={'/work'}>Work</Link>
          <Link href={'/contact'}>Contact</Link>
        </div>
      </div>
    </>
  )
}

export default Menu
