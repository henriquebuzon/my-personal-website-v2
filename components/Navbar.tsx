import AlienHead from '@/public/AlienHead'
import Link from 'next/link'
import React, { FC } from 'react'

const Navbar: FC = () => {
  return (
    <div className="flex justify-between items-center w-full max-w-[1250px] mx-auto py-7">
      <Link
        href="/"
        className="flex items-center justify-center font-semibold text-xl"
      >
        <span>
          <AlienHead className="w-8 mr-5 transform hover:rotate-[360deg] transition-transform duration-500" />
        </span>
        {'HenriqueBM'.split('').map((letter, index) => {
          return (
            <span
              key={index}
              className="hover:text-pink hover:-mt-2 transition-all duration-500 hover:duration-100 "
            >
              {letter}
            </span>
          )
        })}
      </Link>
      <ul className="flex items-center space-x-8 font-medium text-[#674d69]">
        <li>
          <Link
            href="/energia-solar"
            className="hover:text-dark-purple transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/automacao-residencial"
            className="hover:text-dark-purple transition-colors"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            href="/home-cinema"
            className="hover:text-dark-purple transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
