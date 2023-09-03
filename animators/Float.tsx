'use client'

import React, { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
  delay?: number
}

const Float: FC<Props> = ({ children, delay }) => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      {children}
    </motion.div>
  )
}

export default Float
