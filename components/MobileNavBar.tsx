'use client'

import Link from 'next/link'
import React, { FC, useState } from 'react'

const MobileNavbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed bg-white w-full z-50 h-[100px] flex items-center justify-center px-8">
      <div className="flex justify-between w-screen">
        <Link href="/" className="font-semibold text-xl">
          HenriqueBM
        </Link>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-neutral-900 text-center text-orange-500">
            <ul className="flex flex-col text-2xl space-y-6 font-medium">
              <li>
                <Link
                  href="/energia-solar"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Energia solar
                </Link>
              </li>
              <li>
                <Link
                  href="/automacao-residencial"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Automação residencial
                </Link>
              </li>
              <li>
                <Link
                  href="/home-cinema"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Home cinema
                </Link>
              </li>
              <li>
                <Link
                  href="/quem-somos"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Quem somos
                </Link>
              </li>
            </ul>
          </div>
        )}
        <button
          className="z-20"
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
