'use client'

import Link from 'next/link'
import React, { FC, useState } from 'react'

const MobileNavbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white w-full flex items-center justify-center max-w-[1250px] h-[70px] rounded-b-3xl px-10 border-b-4 border-x-4 border-dark-purple absolute">
      <div className="flex justify-between w-screen">
        <Link href="/" className="font-semibold text-xl">
          HenriqueBM
        </Link>
        {isMenuOpen && (
          <div className="absolute inset-0 flex justify-center items-center w-full h-screen bg-dark-purple text-center  z-50 text-white">
            <ul className="flex flex-col items-center justify-center space-y-8 font-semibold text-2xl">
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
        )}
        <button
          className="z-50"
          aria-label="Toggle menu"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'x' : 'o'}
        </button>
      </div>
    </nav>
  )
}

export default MobileNavbar
