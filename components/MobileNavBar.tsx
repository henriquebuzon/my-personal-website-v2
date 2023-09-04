'use client'

import MenuClose from '@/public/menuClose'
import MenuIcon from '@/public/menuIcon'
import Link from 'next/link'
import { FC, useState } from 'react'

const MobileNavbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-screen z-50 flex items-center justify-center px-4 py-4 bg-white text-neutral-800">
      <div className="flex justify-between w-screen">
        <p>afdafasdf</p>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-neutral-100 text-center text-neutral-800">
            <ul className="flex flex-col text-2xl space-y-6 font-semibold tracking-tight">
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
          aria-label="Toggle menu"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <MenuClose className="stroke-neutral-800 w-8" />
          ) : (
            <MenuIcon className="stroke-neutral-800 w-8" />
          )}
        </button>
      </div>
    </nav>
  )
}

export default MobileNavbar
