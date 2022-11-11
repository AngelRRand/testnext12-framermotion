import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';
const about = () => {
  return (
    <div>
        <motion.h1
          initial={{ opacity: 0}}
          animate={{
              opacity:1,
              transition: { duration: 4000, type: "spring", },
          }}
        >
          ABOUT
        </motion.h1>
        <hr />
        <Link href={'/'}>Vamono al home</Link>
    </div>
  )
}

export default about