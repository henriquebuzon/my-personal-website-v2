'use client'

import { motion } from 'framer-motion'
import React, { FC } from 'react'

interface Props {
  className: string
}

const SmallerPurplePlanet: FC<Props> = ({ className }) => {
  return (
    <motion.svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 27"
      className={className}
      animate={{ y: [-3, 3, -3] }}
      transition={{
        ease: 'easeInOut',
        duration: Math.random() * 0.5 + 3,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      <title>Small purple planet</title>
      <style>
        {`.smaller-purple-planet .s0 { fill: #825585 } 
		.smaller-purple-planet .s1 { fill: #260029 } `}
      </style>
      <g id="&lt;Group&gt;" className="smaller-purple-planet">
        <path
          id="&lt;Path&gt;"
          className="s0"
          d="m3.6 14.8c-0.7-2.6-0.2-5.7 1.7-7.7 1-1.1 2.4-1.8 3.9-2.4 1.6-0.7 3.4-1.2 5.2-0.9 3.6 0.5 6.1 3.8 7.5 7.1 0.8 1.9 1.3 4.1 0.8 6.1-0.7 2.8-3.2 4.8-5.8 6.1-0.8 0.5-1.7 0.8-2.6 0.9-5 0.3-9.5-4.7-10.7-9.2z"
        />
        <path
          id="&lt;Path&gt;"
          className="s1"
          d="m10.5 4.8c-5.7-0.2-9.4 8.2-7.4 13 2.2 5.2 8.7 8.1 14 6.2 6.2-2.1 8-10.1 4.8-15.4-3.2-5-11-7.4-15-2.1-0.4 0.5 0.2 1.3 0.8 1 4.5-2.9 9.7-2.9 12.7 2.2 2.5 4.3 1.2 10.8-3.7 12.6-3.9 1.5-8.8-0.2-11.2-3.4-1.8-2.3-1.4-5.1-0.6-7.7 0.8-3.1 2.5-4.8 5.7-5.3 0.5-0.1 0.5-1-0.1-1.1z"
        />
        <path
          id="&lt;Path&gt;"
          className="s1"
          d="m5.4 14.8c0.9 2.4 3.2 5.2 6 5.3 0.5 0 0.7-0.7 0.2-0.9-1.1-0.5-2.2-1-3.2-1.8-0.9-0.9-1.5-2-2-3.1-0.3-0.6-1.3-0.2-1 0.5z"
        />
        <path
          id="&lt;Path&gt;"
          className="s1"
          d="m9.4 26.7c6.1 0.7 12-0.3 14.7-6.4 0.2-0.5-0.5-0.8-0.7-0.4-3.4 5.3-8 6.1-13.9 5.9-0.6 0-0.6 0.8-0.1 0.9z"
        />
        <path
          id="&lt;Path&gt;"
          className="s1"
          d="m1.5 8.7c3.9-4.2 9.4-9.4 15.4-6.1 0.3 0.2 0.8-0.2 0.5-0.6-5.2-5.7-13.1 2.3-16.4 6.2-0.3 0.3 0.2 0.8 0.5 0.5z"
        />
        <path
          id="&lt;Path&gt;"
          className="s1"
          d="m20.3 4.6q1.1 1.3 2.1 2.7c0.7 1 1.2 2.1 2 2.9 0.3 0.3 0.9 0.1 0.8-0.3-0.5-2.3-2.6-4.4-4.2-5.9-0.4-0.4-1.1 0.2-0.7 0.6z"
        />
      </g>
    </motion.svg>
  )
}

export default SmallerPurplePlanet
