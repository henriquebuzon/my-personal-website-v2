import AlienHead from '@/public/AlienHead'
import Link from 'next/link'
import React, { FC } from 'react'

const Navbar: FC = () => {
  return (
    <div className="flex justify-between items-center w-full max-w-[1250px] mx-auto py-7">
      <Link href="/" className="font-semibold text-xl">
        <span>
          <AlienHead className="w-8 inline mr-5" />
        </span>
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
  )
}

export default Navbar
