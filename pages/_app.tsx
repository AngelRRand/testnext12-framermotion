import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }: AppProps) {
  console.log(router.asPath)
  return <>

    <AnimatePresence exitBeforeEnter initial={false}>
      <Component {...pageProps}  key={router.asPath}/>
    </AnimatePresence>
  </>

}
