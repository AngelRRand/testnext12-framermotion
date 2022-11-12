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
        exit={{ y: 10000 }}
      >

      </motion.div>
      <Link href={'/'}>Vamono al home</Link>
    </PageLayoud>
  )
}

export default about