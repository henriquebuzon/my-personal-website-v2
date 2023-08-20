import AlienHead from '@/public/AlienHead'
import Link from 'next/link'
import React, { FC } from 'react'

const Navbar: FC = () => {
  return (
    <nav className="w-full z-50  flex items-center justify-center px-8 absolute">
      <div className="flex justify-between items-center w-screen max-w-[1250px]  bg-white h-[70px] rounded-b-3xl px-10 border-b-4 border-x-4 border-dark-purple">
        <Link href="/" className="font-semibold text-xl">
          <span>
            <AlienHead className="w-8 inline mr-4" />
          </span>{' '}
          HenriqueBM
        </Link>
        <ul className="flex items-center space-x-8 font-medium">
          <li>
            <Link href="/energia-solar">About</Link>
          </li>
          <li>
            <Link href="/automacao-residencial">Work</Link>
          </li>
          <li>
            <Link href="/home-cinema">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
