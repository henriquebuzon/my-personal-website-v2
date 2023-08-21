'use client'

import React, { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
  delay?: number
}

const Spin: FC<Props> = ({ children, delay }) => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ ease: 'linear', duration: 25, repeat: Infinity }}
    >
      {children}
    </motion.div>
  )
}

export default Spin
