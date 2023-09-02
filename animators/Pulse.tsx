'use client'

import React, { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
}

const Pulse: FC<Props> = ({ children }) => {
  return (
    <motion.div
      animate={{ scale: [1, 1.03, 1] }}
      transition={{ ease: 'linear', duration: 1.5, repeat: Infinity }}
    >
      {children}
    </motion.div>
  )
}

export default Pulse
