import Link from 'next/link'
import React from 'react'
import PageLayoud from '../component/PageLayoud';
import { motion } from 'framer-motion';

const about = () => {
  return (
    <PageLayoud title='About' titleColor='crimson'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 5, type: "spring", },
        }}
        exit={{ opacity: 0, transition: { duration: 1, type: "spring", }, }}
      >

      <Link href={'/'}>Vamono al home</Link>
      </motion.div>
    </PageLayoud>
  )
}

export default about