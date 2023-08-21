'use client'

import React, { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
  delay?: number
}

const Pulse: FC<Props> = ({ children, delay }) => {
  return (
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ ease: 'easeInOut', duration: 1.5, repeat: Infinity }}
    >
      {children}
    </motion.div>
  )
}

export default Pulse
