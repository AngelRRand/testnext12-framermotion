import Link from 'next/link'
import React from 'react'
import PageLayoud from '../component/PageLayoud';
import { motion } from 'framer-motion';

const about = () => {
  return (
    <PageLayoud title='About' titleColor='crimson'>
        <Link href={'/'}>Vamono al home</Link>
    </PageLayoud>
  )
}

export default about