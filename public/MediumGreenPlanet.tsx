'use client'

import { motion } from 'framer-motion'
import React, { FC } from 'react'

interface Props {
  className: string
}

const GreenPlanet: FC<Props> = ({ className }) => {
  return (
    <motion.svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 89 82"
      className={className}
      animate={{ y: [-5, 5, -5] }}
      transition={{
        ease: 'easeInOut',
        duration: Math.random() * 0.5 + 3,
        repeat: Infinity,
      }}
    >
      <style>
        {`.medium-green .s0 { fill: #067e82 } 
		.medium-green .s1 { fill: #260029 } `}
      </style>
      <g id="&lt;Group&gt;" className="medium-green">
        <path
          id="&lt;Path&gt;"
          className="s0"
          d="m16.3 65.5c-2.9-3-5-6.7-5.9-11-1.3-6.1-2-12.3-1.4-18.5 0.6-6.2 2.6-12.4 6.4-17.3 6.7-8.5 17.8-12.3 28.5-13.8 3.6-0.5 7.1 0.7 10.6 1.6 4.2 1.1 8.7 4.7 12 7.5 4.1 3.5 7.3 5.1 10.3 9.6 3 4.5 5 9.8 5.1 15.2 0.1 2.5-0.3 5.1-1 7.5-3.5 13.8-15 25.2-28.9 28.6-11.6 2.8-27.1-0.3-35.7-9.4z"
        />
        <g id="&lt;Group&gt;">
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m33.3 7c-29.3 4.5-35.4 52.1-10.7 66.4 27.5 16 69.4-11.2 58.8-43.7-5.8-17.6-35-33.9-51.1-21.8-0.8 0.6 0.1 1.9 0.9 1.4 20-10.8 51.4 10.3 48.7 33.3-2 16.7-17 31-33.5 33.1-18.7 2.4-34.2-8.8-36.7-27.5-2.2-17.2 5.4-36.1 23.8-39.8 0.9-0.2 0.7-1.5-0.2-1.4z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m18.5 30.3c-2.3 2.9-2.7 7.2-1.9 10.8 0.5 2.5 1.9 6.1 4.9 6.1 3.5 0.1 6.4-4.6 7.1-7.5 1.2-5.1-2.2-10.1-6.5-12.5-0.4-0.2-0.8-0.2-1.2 0.1-1.4 0.9-1.2 1.6-1.8 3-0.5 0.9 0.8 1.4 1.4 0.7 0.7-0.7 0.8-1.6 1.7-2.2q-0.6 0-1.2 0c3.6 2 6.5 5.8 6.1 10.1-0.2 2.3-3.1 7.9-6.3 6.8-2.2-0.8-2.8-4.2-3.1-6.2-0.3-2.9 0.2-6 1.7-8.6 0.4-0.6-0.4-1.2-0.9-0.6z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m21.2 30.8c-3.8 2.2-2.4 10.2-1.4 13.5 0.2 0.6 0.9 1 1.5 0.5 4.3-3.7 5.6-9.6 2.9-14.7-0.3-0.6-1.1-0.8-1.7-0.4-4.4 3.9-4.7 9.9-2 14.9 0.4 0.7 1.4 0.9 2 0.2 3.5-4.8 3.5-10.2-0.1-15-0.3-0.5-1.2-0.6-1.6-0.1-3.4 3.5-5.5 10-0.5 13.3 4.9 3.1 6.4-3.3 5.6-6.9-0.8-3.8-4.5-5.4-7.2-2.2-3.2 3.7-0.9 8.3 2.9 10.4 0.6 0.3 1.5 0.4 1.8-0.3 2.6-4.5 2.8-8.7-0.9-12.6-0.4-0.5-1.3-0.7-1.8-0.1-1.9 1.9-3.8 4.4-3.3 7.2 0.5 3.1 3.5 4.4 6.2 5.2 1 0.3 2-0.4 1.8-1.5-0.6-3.3-0.8-5.5-2.8-8.3-0.7-0.9-2.4-0.4-2.4 0.8 0 2.6 0.1 4.9 0.9 7.5 0.4 1.1 2.3 1 2.6-0.1 0.7-2.8 0.7-4.7 0-7.5-0.3-1.4-2.7-1.6-2.7 0.1q0 2.9 0 5.9c0 1.5 2.1 2.2 2.7 0.6 0.9-2.7 2-5.2 2.6-8 0.4-1.6-2.1-1.9-2.7-0.6-1.5 3.4-1.8 6.9-1.8 10.5 0 1.7 2 2.1 2.7 0.7 1.5-2.9 2.6-4.7 2.7-8 0-1.8-2.6-2.1-2.8-0.3-0.3 1.7-0.3 3.7-1.2 5.1-0.7 1.4-2.2 2.3-3.4 3.3-1.1 0.8-0.2 2.8 1.1 2.5 4-1 5.2-3.6 7.5-6.7 0.7-1-0.7-2.3-1.7-1.5-2.2 1.9-3.2 4.6-6.3 5.4q0.6 1.2 1.2 2.4c1.5-1.2 3.2-2.4 4.1-4.1 1-1.8 1.2-4.1 1.5-6.1q-1.4-0.2-2.8-0.3c-0.1 3-1.2 4.7-2.5 7.3q1.4 0.3 2.7 0.6c0-3.4 0.2-6.6 1.6-9.8q-1.3-0.3-2.7-0.6c-0.5 2.5-1.6 4.8-2.4 7.2q1.3 0.4 2.7 0.7 0-3 0-6-1.4 0.1-2.8 0.1c0.6 2.3 0.7 3.8 0.1 6.1q1.3-0.1 2.5-0.1c-0.6-2-0.7-4-0.7-6.1q-1.2 0.4-2.4 0.8c1.7 2.3 1.7 4.2 2.2 7q0.9-0.8 1.8-1.6c-1.6-0.4-4.1-1.1-4.5-3-0.3-1.8 1.3-3.7 2.4-4.8q-0.9-0.1-1.9-0.2c2.8 3 2.8 5.9 0.8 9.4q0.9-0.1 1.8-0.3c-2.2-1.2-4.3-3.2-3-5.9 0.8-1.6 2.3-2.4 3.1-0.5 0.7 1.6 1 7.1-1.8 4.9-3.2-2.4-1.2-6.9 0.9-9.2q-0.8-0.1-1.7-0.2c2.9 4 2.9 8.2 0 12.2q1 0 2 0.1c-2.3-4.1-2.4-8.9 1.3-12.2q-0.8-0.2-1.6-0.4c2.3 4.3 1.4 9.2-2.2 12.4q0.7 0.3 1.5 0.6c-0.7-2.3-1-4.6-0.9-6.9 0.1-1.5 0-4.1 1.3-5.2 0.5-0.4-0.1-1.5-0.8-1.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m33.9 18.9c-1.6 0.6-3.7 2.1-3.8 4.1 0 1.1 0.6 2.1 1.3 2.9 0.7 0.7 1.5 1.7 2.5 1.8 1.8 0.1 3.4-1.6 4.5-2.7q1.5-1.4 2.7-3.1c0.4-0.4 0.2-1.3-0.3-1.6-2-1.2-5.1-2.9-7.5-1.8-2.5 1.2-2 4.9-1 6.9 1.3 2.5 3.4-1.3 3.9-2.3 0.4-0.8 1-1.7 1.1-2.5 0.1-1.2-1.2-2-2.2-1.1q0.8-0.1 1.5-0.1c-2-1.5-4.3 1.6-4.5 3.4-0.1 1.1 1.3 1.8 2.1 1.1 1.5-1.3 3.4-1.8 4.4-3.6 0.7-1.2-0.6-2.6-1.8-1.7-1.2 1-3.3 2.2-3.8 3.7-0.5 1.3 0.8 2.2 1.9 1.7 0.7-0.3 1.3-0.9 1.9-1.2 0.1 0 0.6-0.1 0.1-0.1 0.1 0 0.5 0.1 0.6 0.1 0.5 0 0.8-0.4 0.8-0.8-0.1-0.9-0.6-1.6-1.5-1.7-1.2-0.1-2.5 1.1-3.4 1.7q0.5-0.2 0.9-0.3 0.3 0.1 0.5 0.2 0.3 0.4 0.6 0.8c0.1 0.7-0.3 0.8 0.3 0.2q0.6-0.6 1.2-1.1 0.7-0.6 1.5-1.3-0.9-0.8-1.8-1.7c-0.9 1.6-2.7 2.1-4 3.2q1 0.5 2 1.1c0-0.3 0.2-0.6 0.4-0.9 0.1-0.1 0.3-0.3 0.3-0.4 0.3-0.5 0.5 0-0.1-0.4 0.4 0.3 1.1 0.3 1.5 0q-0.4 0.1-0.8 0.2-0.5-0.4-1-0.7c-0.2-0.5 0.2-1-0.1-0.4-0.2 0.2-0.2 0.4-0.4 0.7q-0.3 0.7-0.7 1.4c-0.2 0.3-0.8 1-0.8 1.3 0-0.6 1.6 1 1.7 0.5 0.1-0.4-0.5-1.3-0.5-1.7-0.3-1.1-0.4-2.1 1-2.1 1.5 0 3.1 0.9 4.4 1.6q-0.2-0.8-0.3-1.6c-1.2 1.6-2.6 3.5-4.4 4.6-0.2 0.1-0.4 0.3-0.6 0.3-0.3 0.1-0.1 0.1-0.2 0-0.6-0.2-1.8-1.5-1.9-2.3-0.2-1.3 1.8-2.2 2.6-3.1 0.6-0.6 0-1.5-0.8-1.2z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m22.4 19.1q-1.3 0-2.6 0c-0.5 0.1-0.5 0.9 0 0.9 0.8 0 1.7 0 2.5 0 0.6 0 0.7-0.8 0.1-0.9z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m21.3 20c0.8-0.9 1.3-2 2-2.9 1-1.3 2.3-1.9 3.7-2.5q-0.6-0.7-1.3-1.3c-1.6 3.1-3.3 5.2-6.3 7q0.7 0.7 1.4 1.3c0.7-1.7 1.7-3.1 3.2-4.2 1.1-0.9 2.2-1.5 3.1-2.6 0.3-0.4-0.1-1.1-0.6-0.9-3.6 0.9-6.2 3.7-7.6 7-0.4 0.8 0.6 1.8 1.4 1.3 1.7-1 3.3-2.2 4.6-3.7 1.1-1.4 1.9-2.9 2.7-4.5 0.4-0.9-0.7-1.6-1.4-1.3-1.6 0.7-3.1 1.5-4.2 2.9-0.9 1.1-1.4 2.5-2 3.7-0.4 0.8 0.8 1.3 1.3 0.7z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m53.5 18.5c3.5 0.8 6.9 2.2 9.4 4.8 1.6 1.7 3.7 4.3 3.9 6.7 0.1 0.9 0.2 0.6-0.3 0.7-0.8 0.1-2-0.8-2.6-1.1-4.8-2.7-9-6.7-12.2-11.1-0.5-0.6-0.5-0.6 0.2-0.5 1.7 0.4 3.4 1.3 5.1 1.4 0.8 0.1 1-0.8 0.5-1.2-1.3-1.2-7.3-3.9-7.9-0.7-0.5 2.5 3 5.5 4.5 6.9 1.4 1.4 14 12.8 14.8 6.4 0.3-2.5-1.8-5.6-3.3-7.4-2.9-3.6-7.2-5.7-11.8-6.2-0.7 0-1 1.1-0.3 1.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m52.6 21.7c0.5-0.8 0.3-2.2 0.6-2.7 0.3-0.4 2.6 3.6 3 4.4q0.9-0.4 1.8-0.9c-1-1.8-2.4-3.3-3.4-5.1q-0.7 0.7-1.5 1.3 5.1 4 9.1 9.2 0.7-0.8 1.4-1.6c-2.3-1.6-4.4-3.5-6.7-5.1-1-0.7-2.4 0.7-1.5 1.6 2.6 2.7 5.3 5.2 8.6 7 1.2 0.7 2.3-0.6 1.6-1.7-1.9-2.8-4-5.6-5.9-8.5q-0.9 0.8-1.8 1.6c2.3 2.4 4.4 5.2 6.7 7.6q0.9-0.8 1.9-1.6-2.6-2.5-5.1-5c-1.1-1.1-2.9 0.4-1.9 1.5 1.8 1.9 3.3 4.1 5.1 6q0.8-0.9 1.6-1.8c-4.6-3.8-9.3-7.5-14.6-10.3q-0.4 1.1-0.9 2.3c5 1.7 8.8 4.9 11.2 9.5 0.3 0.6 1 0.8 1.6 0.6 1.6-0.7 3.1-0.7 4.8-0.9 1.2-0.1 1.1-2.1-0.1-2.2-2.1-0.1-3.8 0.1-5.7 0.9q0.8 0.3 1.6 0.6c-2.8-5.2-7-8.8-12.5-10.8-1.5-0.6-2.2 1.6-0.9 2.3 5.2 2.6 9.7 6.4 14.2 10 1 0.8 2.5-0.8 1.6-1.8-1.8-1.9-3.3-4-5.1-5.9q-0.9 0.8-1.9 1.5 2.6 2.6 5.1 5.1c1.1 1.1 3-0.4 1.9-1.6-2.4-2.4-4.5-5.1-6.8-7.6-1.1-1.1-2.7 0.3-1.8 1.6 1.9 2.8 4 5.6 5.9 8.4q0.8-0.8 1.6-1.7c-3.2-1.6-5.8-4-8.3-6.5q-0.8 0.8-1.5 1.6c2.3 1.6 4.5 3.5 6.8 5.1 1 0.7 2.2-0.7 1.4-1.6q-4.1-5.4-9.5-9.5c-0.8-0.6-2.1 0.4-1.5 1.3 1 1.8 2.3 3.3 3.4 5.1 0.6 1.1 2.4 0.3 1.8-0.9-1.2-2.2-2.5-5.7-5.3-5.5-0.3 0-0.6 0.3-0.7 0.6-0.6 1.1-0.1 2.3-0.7 3.4-0.4 0.8 0.9 1.4 1.3 0.7z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m47.3 48.7c-0.5 0.4-1.3 0.4-2 0.8-0.9 0.7-1.3 1.7-1.6 2.8-0.2 0.4 0 0.8 0.4 1 1.8 0.9 4.1 2 6.1 1.3 1.9-0.7 2.8-2.5 3.6-4.2 0.2-0.3 0.1-0.8-0.1-1-0.3-0.3-1.4-0.9-1.4-1.2-0.2-0.8-1-1.1-1.6-0.9-1.9 0.7-3.3 2.2-3.8 4.1-0.2 0.8 0.5 1.5 1.3 1.2 0.6-0.3 0.9-0.8 1.2-1.4 0.6-0.9 1.2-1.4 2.2-1.8q-0.8-0.4-1.6-0.9c0.3 1.3 1.3 1.7 2.2 2.4q-0.2-0.6-0.3-1.2c-0.5 1.2-1 3-2.4 3.4-1.5 0.5-3.5-0.6-4.8-1.2q0.2 0.5 0.4 0.9c0.3-1.1 0.6-1.9 1.7-2.4 0.5-0.2 1-0.3 1.4-0.7 0.6-0.6-0.2-1.5-0.9-1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m42.6 34.2c-3 0.8-5.6 2.4-8.1 4.1-0.6 0.4-0.4 1.2 0 1.5 5.1 4.6 19.2 3.6 20.4-4.4 0.5-3.3-1.4-10.6-6-9.3-4 1-6.9 7.4-8 10.9-0.4 1.3 1.3 1.8 1.9 0.7 1.5-2.9 2.7-6.5 5.3-8.6 4-3.5 5.9 5.6 3.7 8.3-3 3.9-12.6 4.1-16.2 0.9q0 0.7 0.1 1.5c2.3-1.6 4.7-3.1 7.3-4.4 0.6-0.3 0.3-1.4-0.4-1.2z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m42.4 35.1c-1.4 0.7-2.5 1.3-4.1 1.3q0.3 0.9 0.6 1.8c2.2-1 4.6-1.5 6.8-2.5q-0.6-0.8-1.1-1.7c-1.3 1.2-2.5 2.4-4.1 3.2-1.2 0.7-0.3 2.4 1 1.9 3.1-1 6-2.3 8.7-4.3q-0.8-0.7-1.7-1.5c-1.2 1.5-1.3 3.6-2.5 5.1-0.6 0.7 0.2 2 1.1 1.8 2.6-0.8 3.1-1.8 4.8-3.7q-0.8-0.7-1.7-1.5c-0.6 1.1-0.8 2.1 0.1 3.1 0.6 0.7 2 0.4 2-0.6 0-3.6-0.3-5.9-2.8-8.5-0.7-0.8-1.8-0.4-2.1 0.6-0.1 0.7-0.5 3.1-1 3.3q0.8 0.9 1.5 1.7c1.3-1.5 2.4-3.7 2.7-5.6 0.3-1.5-2.1-1.7-2.3-0.2-0.2 1.5-1.3 3.3-2.3 4.5q1 0.5 2 1.1c0.7-1.7 1.6-3.6 1.8-5.4q-1.2 0-2.3 0.1c0 2.3 0.7 4.5 0.8 6.8 0 1.2 1.9 1.1 2.3 0.2 0.7-1.7 1-3.5 1.7-5.1q-1.2-0.3-2.3-0.5c-0.8 3.9-2.6 6.8-6.9 4.9q0.2 1 0.4 2 2.5-2.5 5-5.1-0.9-0.6-1.9-1.3c-0.4 1.4-2.1 2-2.5 3.4-0.3 1 0.7 1.8 1.6 1.5 1.7-0.6 2.9-1.8 3.3-3.5 0.1-0.7-0.7-1.5-1.4-1.3-3.2 0.9-5.6 2.6-8.2 4.5-0.8 0.5-0.5 1.8 0.3 2 2.8 0.8 4.6 1.6 7.4 0.9q-0.2-1.2-0.4-2.3c-2.7 0.8-5.6 1-8.5 1.6q0.4 1.2 0.8 2.3c1.9-0.8 4.1-0.7 6.1-0.7q0.1-1.2 0.2-2.4c-2.4 0-4.7 0.1-7.1 0.8-1.2 0.4-1.3 2.3 0.1 2.4 6.6 0.7 12.8-1.6 14.1-8.7q-1.1 0.4-2.2 0.7c0.7 1 0.5 3.1 0.6 4.3 0 1.5 2.4 1.8 2.4 0.2 0-1-0.6-1.5-1.4-1.4-3.6 0.2-7.4 1.9-10.5 3.5-1.3 0.6-0.6 2.4 0.8 2.3 2-0.1 3.9-0.7 5.9-0.8 1.5-0.1 1.2-2.3-0.1-2.5-1-0.2-3-0.2-3.7-0.6q-0.3 1.1-0.5 2.2c-0.4 0.1 0.9 0.7 1.2 0.7q0.8 0.3 1.6 0.3c1.2 0.1 2.4-0.2 3.5-0.8 2.4-1.3 3.6-3.8 4.1-6.4 0.3-1.5-2.1-1.7-2.5-0.2-0.5 2.2-1.7 4.6-4.2 4.9-1.6 0.2-2.7-1.1-4.2-0.9-1 0.1-1.4 1.7-0.5 2.2 1.4 0.8 3.4 0.8 5 1.1q-0.1-1.3-0.1-2.5c-2 0.1-4 0.7-6 0.9q0.4 1.1 0.8 2.3c3-1.4 6.4-3.1 9.8-3.3q-0.7-0.7-1.4-1.3c0.8 0.2 1.6 0.2 2.4 0.3 0-2 0.1-4.4-1.1-6.1-0.7-0.9-2-0.2-2.2 0.7-1 5.7-6.2 7.1-11.3 6.5q0 1.2 0.1 2.4c2.1-0.6 4.2-0.8 6.4-0.8 1.6 0 1.8-2.4 0.2-2.4-2.5 0-5 0-7.4 0.9-1.2 0.5-0.6 2.6 0.8 2.3 2.8-0.6 5.7-0.8 8.4-1.7 1.5-0.4 1.2-2.7-0.4-2.3-2.3 0.5-3.9-0.2-6.1-0.8q0.2 1 0.3 2c2.3-1.5 4.4-3.2 7.1-4q-0.7-0.6-1.4-1.2c-0.2 0.8-1.1 1.2-1.9 1.5q0.8 0.8 1.7 1.5c0.4-1.3 2.1-1.9 2.5-3.4 0.3-1-1-2.2-1.9-1.3q-2.5 2.5-5.1 5.1c-0.6 0.6-0.5 1.6 0.4 2 5.8 2.6 9-1.5 10-6.9 0.3-1.4-1.8-1.7-2.3-0.5-0.6 1.6-1 3.4-1.7 5q1.2 0.1 2.3 0.2c-0.1-2.2-0.7-4.4-0.8-6.7-0.1-1.4-2.2-1.2-2.4 0.1-0.2 1.6-1 3.2-1.6 4.7-0.5 1.4 1.3 2.1 2.1 1.1 1.3-1.5 2.5-3.7 2.7-5.6 0.3-1.5-2.1-1.7-2.3-0.2-0.2 1.5-1.3 3.3-2.3 4.5-0.9 0.9 0.4 2.1 1.4 1.7 1.7-0.7 2.1-3.6 2.4-5.2q-1 0.4-2.1 0.7c2.1 2.1 2.3 3.8 2.3 6.7q1-0.3 2.1-0.6 0-0.1 0-0.3c0.8-1.3-0.9-2.4-1.9-1.3-1.3 1.4-1.5 2.3-3.5 2.9q0.6 0.9 1.2 1.8c1.2-1.5 1.3-3.6 2.5-5.1 0.8-1.1-0.7-2.2-1.7-1.5-2.5 1.9-5.2 3.1-8.2 4.1q0.5 1 1 1.9c1.6-0.9 3-2.1 4.4-3.5 0.8-0.8 0-2.2-1.1-1.7-2.2 1-4.6 1.6-6.7 2.6-1 0.5-0.5 1.9 0.5 1.7 1.7-0.2 2.9-1.1 4.4-2 0.6-0.4 0.1-1.5-0.6-1.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m25.2 67.5c3.9 4.1 10.6 5.4 16 3.9 0.8-0.2 1.1-1 0.6-1.7-3-4.6-9.2-4.7-14-6.3-1.3-0.5-2 1.5-0.7 2.1 4.3 1.7 10.2 1.4 13.1 5.5q0.3-0.8 0.6-1.7c-5.1 1.6-10.4 0.4-14.6-3-0.7-0.5-1.6 0.5-1 1.2z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m26.9 66.9c2.8 1.6 5.7 2.7 8.9 2.9 1.3 0.1 1.7-1.7 0.5-2.2-2.1-0.9-4.5-1.1-6.7-1.7-1.5-0.5-2.2 1.5-0.9 2.2 4.7 2.2 10.1 3.8 14.7 0.5 1-0.7-0.1-2.2-1.2-1.7-4.6 1.8-8.2 1.1-12.6-1q-0.5 1.1-0.9 2.2c2.3 0.6 4.7 0.8 6.8 1.6q0.3-1.1 0.5-2.2c-2.9-0.1-5.5-1.1-8.2-2.2-1-0.4-1.8 1-0.9 1.6z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m28.4 52.1c0.8 2.1 2.5 5.3 5.3 4.8 2.9-0.4 3.3-4.5 3.3-6.8 0-0.5-0.4-1.1-1-1.2q-0.5 0-1 0-0.2 0-0.4-0.1-0.5-0.2-0.1 0.2c-0.2-0.9-1.5-1.3-2.1-0.5-0.6 1.1-1.1 2.2-0.8 3.5 0.2 0.9 0.9 1.7 1.2 2.6 0.2 0.6 1.1 0.3 1.2-0.3 0.4-1.6-0.7-2.8 0.3-4.5q-1-0.2-2-0.4c0.3 1.7 2.1 1.8 3.5 1.7q-0.5-0.6-1-1.2c0 1.1 0.2 4.8-1.5 5.1-1.5 0.2-2.9-2.6-3.4-3.6-0.5-0.9-1.8-0.3-1.5 0.7z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m32.4 52c0.3-1.2 0.5-3.3-1.4-3-0.6 0.2-0.9 0.6-1.3 0.9-0.4 0.2-0.8 0.4-1 0.9-0.3 0.9 0 2 0.3 2.8 0.1 0.4 0.4 0.8 0.9 0.8 1.2 0 7.2 0.1 5.1-2.5q0.2 0.4 0.3 0.8 0-1.7 0-3.4c0.1-1-1-1.6-1.8-1q0.5 0.3 1.1 0.5 0-0.1-0.1-0.3c0.1-0.1 0 0 0 0 0-0.7-0.5-1.5-1.3-1.3-1.1 0.3-3 0.4-3.6 1.6-0.3 0.6 0.2 1.2 0.7 1.4q0.2 0.1 0.4 0.1c1.2 0.1 1.7-1.3 0.8-2.1-1.5-1.1-2.4 0.8-2.4 2-0.1 1.4 0.1 3.2 1.6 3.5q-0.3-1-0.6-2c-0.7 0.7-1.1 1.9 0.1 2.4 0.6 0.2 1.4-0.2 1.9-0.5 1.1-0.7 3.5-1.8 3.6-3.3 0.2-2.6-4.7-1.1-5.5 0.2-1.1 1.7 1.1 3.4 1.7 4.9 0.2 0.5 1.1 0.5 1.3 0 0.3-1.1-0.1-2.1-0.5-3-0.2-0.3-0.5-0.7-0.5-0.9 0 0.5 0.6 0 1-0.1q0.4-0.1 0.8-0.1-0.1-2.3-0.6-1.6c0 0 0 0.2-0.2 0.3-0.3 0.2-0.7 0.5-1 0.8q-0.5 0.3-1.1 0.7c-0.1 0.1-0.4 0.1-0.5 0.3-0.5 0.3-0.5-0.3 0.4 0.1q0.4 0.4 0.7 0.9c0.3 0.7-0.2 0.7-0.1 0.7 0.7-0.8 0.4-1.9-0.6-2.1 1.4 0.3 0.3 0.6 0.5 0.1 0-0.2-0.1-0.5-0.1-0.7 0-0.3 0-0.5 0-0.7q0-0.1 0-0.3 0.4-0.6-1.2 0.3 0.4-1 0.8-2.1 0 0.1 0.1 0.1 0.3 0.7 0.7 1.5-0.3 0.3-0.6 0.6c0.7-0.4 1.6-0.5 2.4-0.7q-0.7-0.6-1.4-1.3c0.1 1.6 1.2 3.2 2.8 1.8q-1-0.4-1.9-0.9c0 0.3-0.1 4.2 0.3 4.2q0.1-0.6 0.2-1.3 0 0.1-0.1 0.1c-0.1 0-0.4 0.1-0.4 0.1q-0.7 0.1-1.5 0.1-0.7 0.1-1.5 0.1 0.4 0.3 0.8 0.6c-0.1-0.2-0.1-0.9-0.2-1.1q-0.1-0.3-0.1-0.5-0.8 0.6-0.3 0.4c0.3 0 0.8-0.4 0.9-0.7 0.3-0.5 0.3 0 0-0.2-0.4-0.4-0.1-0.2-0.2 0.1 0 0.2 0 0.5 0 0.7-0.2 0.8 1.1 1.1 1.4 0.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m27.8 65.6q0.1 0.3 0 0 0-0.1-0.2-0.3c-0.1-0.1-0.3-0.2-0.4-0.3-0.1-0.1-0.3-0.3-0.4-0.3-0.3-0.1 0-0.6-0.1 0.4q-0.1 0.3-0.3 0.6c-0.1 0.1-0.6 0-0.3 0.1 0.1 0.1 0.4 0.1 0.5 0.1 0.5 0.1 0.7 0.1 1.1-0.1 0.4-0.1 0.4-0.6 0.2-0.9-0.5-0.8-2.8-1.5-2.9 0-0.1 1.1 1.7 2 2.5 1.7q-0.3 0-0.5 0 0.1 0.1 0.2 0.1c0.7 0.3 1.2-0.7 0.6-1.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m14.7 52.7c0.6 2.9 1.4 5.2 3.4 7.4 0.7 0.7 1.8 0.3 2-0.6 0.3-1.7 0.4-3.4-0.3-4.9-0.6-1.3-1.7-2.4-2.5-3.6-0.8-1.2-2.5 0.3-1.7 1.5 0.6 0.9 1.4 1.8 2 2.8 0.7 1.2 0.5 2.6 0.3 3.9q1-0.3 2-0.6c-1.9-1.9-2.4-4-3.4-6.4-0.4-1-2.1-0.5-1.8 0.5z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m34.2 67.6c3.9-0.1 7.1-0.5 10.5 1.9q0.2-0.9 0.4-1.8c-1.5 0.4-3 0.6-4.5 0.7-1.2 0.1-2.2-0.1-3.3 0.5-0.4 0.2-0.5 0.9-0.1 1.2 2.2 1.2 5.9 0.3 8.2-0.4 0.8-0.3 1.2-1.3 0.4-1.9-3.5-2.4-7.8-2.9-11.8-1.4-0.6 0.2-0.4 1.2 0.2 1.2z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m40.9 68.7c0-0.1 0.5-0.1 0.7-0.1 0.3-0.1 0.4-0.1 0.6-0.3 0.4-0.3 0.3-0.7 0-1-1-0.9-2.7 0-2.8 1.3-0.1 1 1.3 1.1 1.5 0.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m28.5 63.7c0.1 0.3 0.2 0.6 0.4 0.8 0.2 0.3 0.5 0.5 0.6 0.9 0.1 0.6 1 0.4 1-0.2 0-0.7-0.7-1.1-0.7-1.7-0.1-0.8-1.4-0.6-1.3 0.2z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m56.2 63c1.1-4.3 3.6-7.5 8.4-6.9q-0.4-0.6-0.9-1.3c-1.9 5.1-6.5 8.5-11.9 9.4q0.6 0.7 1.2 1.4c1.9-4.4 6-7.1 10.5-8.7q-0.8-0.6-1.5-1.3c-1.7 3.6-3.7 5.7-7.1 7.8q0.7 0.8 1.4 1.7c2.1-3.9 5.3-6.9 8.3-9.9q-0.8-0.8-1.7-1.6c-2.2 2.9-4.6 5.6-6.8 8.4q1.1 0.6 2.1 1.2c0.8-1.9 2.7-2.6 3.9-4.1 0.6-0.8-0.4-2-1.2-1.5-2.1 1.3-4 2.3-5 4.7-0.5 1.3 1.4 2.2 2.2 1.1 2.1-2.9 4.5-5.6 6.7-8.5 0.8-1-0.8-2.5-1.7-1.5-3.2 3.2-6.5 6.4-8.6 10.4-0.5 0.8 0.3 2.3 1.4 1.7 3.7-2.3 6.6-4.9 8.1-9.2 0.4-0.9-0.6-1.6-1.5-1.3-4.9 1.8-9.4 5-11.5 9.9-0.3 0.8 0.4 1.6 1.2 1.4 6-1 11.4-5 13.5-10.8 0.2-0.7-0.2-1.3-0.9-1.4-5.6-0.7-9.5 3.1-10.3 8.6-0.1 0.9 1.5 1.3 1.7 0.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m70.2 40.9c-0.4-0.3-0.9-0.6-1.5-0.3-0.6 0.3-0.7 0.9-0.7 1.5 0.1 0.9 0.4 1.7 0.8 2.5 0.4 0.8 1.7 0.8 2-0.1 0.3-1.1 0.8-2.3 0.7-3.4 0-0.4-0.1-0.8-0.3-1.2 0-0.3-0.1-0.6-0.2-0.8-0.3-0.5-0.1-0.1-0.1 0 0-1.5-2.2-1.7-2.2-0.2q-0.1 2.7-0.1 5.4c0 1.4 2.3 1.7 2.3 0.2q0-0.2 0-0.3-1.1-0.1-2.3-0.2c0 0.6 0.1 1.2 0.6 1.5 0.6 0.5 1.3 0.2 1.7-0.3 0.6-0.6 0.8-1.6 1-2.4 0.3-0.9 0.6-2.1 0.5-3-0.3-1.3-1.6-1.7-2.5-0.8q0.7 0.9 1.5 1.8c0.7-0.8 0.7-2.2-0.6-2.3-0.7 0-1.5 0.5-2.1 0.8-1.2 0.8-3.4 2.9-1.3 4.1q0.4-1.1 0.8-2.2c-0.2 0-0.5 0-0.7 0.1-0.9 0.5-0.9 1.5-0.2 2.1 0.5 0.5 1.9 0.5 2.5 0.6q0.8 0.1 1.6 0.2c0.2 0 0.4 0.1 0.7 0.1q0.3 0.2-0.4-0.3-0.1-0.6-0.3-1.2 0.4-0.3 0.7-0.7c0 0 0.5 0 0.3 0q0.5 0.3 1 0.6c-0.3-0.6-0.5-1.5-0.9-2.1-0.4-0.4-1-0.6-1.5-0.3-0.4 0.2-0.7 0.5-0.7 1 0 0.4 0.1 0.7 0.2 1.1 0.1 0.2 0.1 0.3 0.1 0.4 0 0.1 0 0.2 0.1 0.2 0.2 0.4-0.7 0.2 0.2-0.4-0.5 0.4-0.3 1.3 0.3 1.5 0.8 0.2 1.4-0.4 1.6-1.1q0.1-0.5 0-1c0-0.2 0-1.1 0-0.5q-0.4 0.5-0.7 1-0.8-0.2-1.5-0.3c-0.3-0.4 0 0 0.1 0.2q0.2 0.7 0.5 1.4c0.2 0.3 0.6 0.7 1 0.7 0.6 0 1.3-0.1 1.5-0.8 0.2-0.4 0.1-1-0.2-1.3-0.7-0.6-1.8-0.6-2.7-0.7-0.6-0.1-2-0.3-2.2-0.4-0.6-0.1-0.2-0.1 0.1 0.1q-0.1 1.1-0.2 2.1-0.2 0.1-0.5 0.1c1 0 1.9-1.5 0.8-2.2-0.4-0.2 0.6 0.9 0 0.9 0 0 0.3-0.3 0.2-0.2 0.2-0.2 0.5-0.4 0.7-0.6q0.4-0.3 0.8-0.4c0.1-0.1 0.2-0.1 0.3-0.2q0.2-0.1 0 0 0.4-0.1-0.8-0.2-0.2-0.4-0.5-0.8 0.2-0.4 0.4-0.9c-1 1.1 0.4 2.9 1.5 1.8 0.2-0.2 0-0.1 0 0q-1.1 0.1-1.3-0.6-0.1-0.2-0.1 0c0 0.1 0-0.1 0 0q0 0.2 0 0.4c-0.1 0.5-0.2 0.9-0.3 1.4q-0.2 0.7-0.5 1.5 0 0.1-0.1 0.3c0 0.1 0-0.1 0 0-0.1-0.3 1 0.2 1 0.2q1 0.7 0.8 0.2 0-0.2 0 0c0-1.5-2.3-1.7-2.3-0.2q0 0.1 0 0.3c0 1.4 2.3 1.7 2.3 0.2q0-2.7 0-5.4c0-1.5-2.3-1.7-2.2-0.2 0 0.8 0.5 1.4 0.6 2.2 0.1 0.6-0.3 1.9-0.5 2.6q1 0 2 0-0.3-0.5-0.5-1-0.1-0.3-0.2-0.6c0-0.1 0-0.3 0-0.3 0.2 0.2-0.8 0.4-0.6 0.5 0.8 0.2 1.5-0.9 0.7-1.4z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m55.6 81.9c5.6-2.6 11.6-6.4 15.5-11.2 0.4-0.5-0.4-1.1-0.8-0.8-5 3.8-9.7 7.8-15.1 11-0.7 0.3-0.2 1.3 0.4 1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m3.4 28.2c4-10.5 10.4-20.6 21.6-24.2 0.7-0.2 0.5-1.1-0.2-1-10.8 1.1-20.3 15.2-22.4 25-0.2 0.6 0.8 0.8 1 0.2z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m35 1.4c2 0 4.1 0.2 6.1 0 0.5-0.1 0.4-0.8-0.1-0.9-1.9-0.3-3.9 0-5.9 0-0.6 0-0.7 0.9-0.1 0.9z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m52.7 1.4c4.1 1.5 8.2 2.9 12.1 4.8 4.7 2.3 8.3 5.4 12.3 8.7 0.5 0.5 1.1-0.3 0.7-0.8-5.5-7.7-15.9-11.4-24.8-13.6-0.6-0.2-1 0.7-0.3 0.9z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m0.7 38.1c-0.1 3.4 0.8 6.7 2.6 9.6 0.3 0.6 1.2 0.2 0.9-0.4-1.1-3.1-2.2-5.9-2.4-9.2-0.1-0.6-1.1-0.6-1.1 0z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m70.1 79.2c7.7-6.1 15.8-14.1 18-24 0.1-0.7-0.9-0.8-1.1-0.3-3.6 9.6-9.6 17.1-17.5 23.5-0.5 0.4 0.1 1.2 0.6 0.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m77.8 64c2.7-2.8 5.2-5.9 6.8-9.6 0.2-0.4-0.5-0.8-0.8-0.4-1.9 3.3-4.1 6.4-6.8 9.2-0.5 0.5 0.2 1.3 0.8 0.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m45.1 51.5c0.5 2.8 4.5 2.4 5.2-0.1 0.1-0.4 0-1-0.4-1.3-1.1-0.6-2.2-0.6-3.2 0.2-1.1 0.8 0.4 2.7 1.5 1.7q0.1-0.1 0.2-0.2c0.4-0.4 0.5-1 0.1-1.5-0.4-0.4-0.7-0.4-1.2-0.3q0.4 1 0.9 2 0.2-0.2 0.4-0.1-0.2-0.6-0.4-1.3c-0.2 1.1-1.1 0.9-1.8 0.2-0.5-0.5-1.4-0.1-1.3 0.7z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m44.9 52.3c1.2-1.4 2.8-2.3 4.5-3 1-0.4 3.5-1.1 2.5 0.6-0.4 0.7-2.4 1.4-3.2 1.4q0.5 0.3 0.9 0.6 0.8-0.2 1.5-0.6-0.4-0.7-0.9-1.5c-0.4 0.9-0.9 1.6-1.7 2.3q0.9 0.6 1.9 1.3c0.3-1 0.7-1.8 1.1-2.7 0.5-1.2-1.1-1.8-1.9-1-0.7 0.8-1.1 1.8-1.4 2.9-0.3 1 1 2.1 1.8 1.2 1-0.9 1.7-1.9 2.3-3.2 0.2-0.6-0.3-1.5-1-1.5-1.6 0-4.5 1.7-3.6 3.7 0.1 0.3 0.5 0.6 0.8 0.6 1.8-0.1 3.9-0.9 5-2.2 1.3-1.3 1.2-3.2-0.4-4.2-1.9-1-4.3 0.2-6 1.1-1.6 0.9-2.8 2-3.2 3.8-0.2 0.6 0.7 0.8 1 0.4z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m36.7 39.7c2.4 0.3 5.9-1.1 6.7-3.5 0.2-0.5-0.4-1.1-0.9-0.8-1 0.4-1.7 1.2-2.7 1.7-1 0.5-2 0.7-3.1 0.9-1 0.3-1 1.7 0 1.7z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m50.4 30.3c0.1-0.4 0.3-0.5 0.6-0.6q-0.7-0.5-1.4-1c0 0.2 0 0.8-0.2 1 0.1-0.1-0.1-0.3-0.3-0.5-0.3-0.3-0.8-0.5-1.3-0.5-0.5 0.1-1 0.3-1.3 0.6-0.4 0.4-0.7 0.9-1.2 1.1q0.6 0.9 1.2 1.8c0.9-0.7 2.2-1.4 2.8-2.4 0.5-0.9-0.3-1.8-1.3-1.5-1.1 0.3-2.1 1.5-2.9 2.2-1 0.9 0 2.2 1.1 1.8 0.8-0.3 1-0.9 1.6-1.4q-0.2-0.3 0 0.1 0.2 0.2 0.4 0.4c0.3 0.2 0.6 0.3 0.9 0.4 1.7 0.2 2.4-1.5 2.5-2.9 0-0.8-0.7-1.4-1.4-1-1 0.5-1.4 1.4-1.2 2.4 0.1 0.8 1.3 0.8 1.4 0z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m34.4 22.9c-0.7 1 0.1 2.2 1.3 2 1.1-0.1 2.9-1.6 3-2.7 0-0.6-0.4-1-1-0.9-0.6 0-0.9 0.3-1.3 0.7q-0.2 0.3-0.5 0.5c-0.3 0.3-0.5 0.3-0.4 0.7q0 0.3 0.1 0.6 0-0.1 0-0.2c0.3-0.7-0.8-1.4-1.2-0.7z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m33.9 24.5c-1.8-1.1-1.1-3.3 0.4-4.2 0.7-0.4 1.6-0.6 2.4-0.7 1.5 0 1.9 0.6 2.8 1.5 0.6 0.6 1.9 0.4 1.9-0.6-0.2-4.3-6.5-3.7-9-1.8-2.5 2-2.7 6.5 1 7.2 0.7 0.1 1.2-1.1 0.5-1.4z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m20.4 43.8c-2.1-2-1.6-7.8-1.3-10.4q0.2-0.9 0.4-1.7 1.1-0.5 2.2-1c0.4 0.1 0.9 1.2 1.2 1.5 1 1.4 1.8 2.9 2.4 4.6 0.3 0.8 1.4 0.4 1.5-0.3 0.7-3.8-4.5-12.7-8.6-7.9-2.1 2.4-1.9 6.3-1.8 9.2 0.2 2.8 0.3 5.7 2.9 7.3 0.7 0.5 1.9-0.6 1.1-1.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m24.7 34.5c0.3 1.2 0.1 2.3 0.3 3.5 0 0.6 0.9 0.8 1.2 0.3 0.7-1.3 0.6-2.8 0.2-4.1-0.2-1.1-2-0.8-1.7 0.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m16.6 53.6c0-0.5 0-1 0-1.4q0-0.3 0-0.5 0.1-0.6 0-0.3-0.3 0.2-0.6 0.5c-0.3 0 0.3 0.6 0.4 0.7 0.3 0.2 0.5 0.3 0.9 0.3 0.2 0.1 0.5-0.1 0.7-0.3 0.7-1.3-0.9-3.1-2.3-2.8-1.9 0.3-0.9 3.1-0.3 4.1 0.4 0.7 1.3 0.4 1.2-0.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m45.8 68c-1.5-3.1-4.9-3.2-7.9-3.9-3.3-0.7-7.6-3.5-11.1-2.4-1.8 0.6-3.1 2.3-2.6 4.3 0.7 2.7 4.6 3.1 6.9 3.5 0.7 0.1 1.2-0.9 0.7-1.4-0.8-1-1.7-0.9-2.5-1.6q-0.7-0.1-0.2-1.2-0.7-1.8 0.9-0.9c1-0.1 2.5 0.7 3.4 1 3.8 1.2 8.3 0.9 11.4 3.4 0.5 0.4 1.2-0.3 1-0.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m26.9 66c1.2 1 2.5 2.1 4.1 2.4 0.5 0.1 0.9-0.7 0.5-1.1-1-1.1-2.4-1.8-3.6-2.7-0.9-0.7-1.9 0.7-1 1.4z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m54 64.6q1.3-0.6 2.4-1.5c0.8-0.6 1.5-1 1.9-1.9 0.2-0.5-0.3-1-0.8-1-0.9 0.2-1.5 0.7-2.2 1.2-0.8 0.6-1.5 1.2-2.2 1.8-0.7 0.7 0 1.9 0.9 1.4z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m52.3 65.2c1.9-2.1 3.4-4.4 5.5-6.3q1.3-1.2 2.8-2.2c0.8-0.7 2.1-2 2.5-0.7 0.1 0.5 0.5 0.8 1 0.7q0.1 0 0.3 0c0.4 0 0.8-0.4 0.9-0.8 0.5-1.2 0-2.7-1.2-3.2-1.6-0.7-3.3 0.8-4.5 1.6-3.2 2.3-8 6.4-8.4 10.5-0.1 0.7 0.7 0.9 1.1 0.4z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m71.1 38.7c-0.1-0.8-0.9-1.3-1.7-1.1-1.1 0.3-2.1 1.7-2.5 2.7-1 2.4-0.1 5.5 2.6 6.3 2.4 0.7 4.7-1.3 4.9-3.7 0.1-1.3-0.4-2.6-1.3-3.6-0.7-0.9-1.9-2.2-3-2.4-0.5-0.1-0.9 0.2-1.1 0.6q0 0.2-0.1 0.3c-0.2 0.5 0 1 0.2 1.4 0.9 1.1 3.7 2.7 2.2 4.5-0.9 0.9-2.1 0.1-2.4-0.9-0.1-0.5 0.5-3.6 1-3.3 0.6 0.3 1.3-0.1 1.2-0.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m63.7 29.1c-0.2 1.4 1 2.9 2.6 2.6 1.5-0.3 2.1-2.2 1.2-3.4-0.6-0.9-2.2-0.1-2 1 0.2 0.5-0.2 0.3-0.2-0.1 0-1-1.4-1.1-1.6-0.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m66.8 31.9c1.7 0.1 2.7-1.3 2.9-2.9 0.2-2.3-1.4-4.4-3-5.8-2.5-2.2-5.2-4.3-8-6.2-2.1-1.4-4.1-2-6.5-1.1-0.5 0.2-0.9 0.7-0.9 1.2 0 5.2 4.9 9.3 9.4 11 0.8 0.3 1.4-0.5 1.1-1.1-1.7-3.8-7.5-4.9-7.5-9.6q-0.4 0.6-0.8 1.2c2.6-0.9 5.9 2.6 7.8 4 1.4 1.1 8.7 5.7 5.1 8-0.5 0.4-0.1 1.2 0.4 1.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m32.3 53.9c0.9 1.6 3.2 0.7 3.6-0.7 0.3-1-1.1-1.9-1.7-0.9-0.3 0.6-0.7 0.5-1.4 0.6-0.4 0.1-0.7 0.6-0.5 1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m29.9 52.3c0.2-0.8-0.1-1.6 0.3-2.4 0.5-1 2-1.1 3-1.1 0.4 0 1 0 1.3 0.3 0.4 0.3 0.1 1.2 0 1.7-0.2 0.9-0.4 1.7 0.2 2.5 0.2 0.3 0.5 0.3 0.8 0.2 1.6-0.5 2-3.6 1.6-5-0.6-1.8-2.4-2.2-4.1-2.1-1.9 0.1-3.8 0.6-4.7 2.4-0.6 1.1-0.7 3.3 0.8 3.9 0.3 0.1 0.7-0.1 0.8-0.4z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m28.7 51.2c0.4 1 1.1 1.8 2.1 2.3 0.4 0.2 1-0.3 0.9-0.8-0.3-1-1-1.9-1.9-2.4-0.6-0.4-1.4 0.2-1.1 0.9z"
          />
        </g>
      </g>
    </motion.svg>
  )
}

export default GreenPlanet
