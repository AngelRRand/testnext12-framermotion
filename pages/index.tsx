import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1>SADASDSA</h1>

        <Link href={'/about'}>Vamono al about</Link>
        <hr />
        <button onClick={() => router.push('/article/1')}>
          Vamono al article 1
        </button>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
