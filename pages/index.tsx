import Link from 'next/link'
import { useRouter } from 'next/router'
import PageLayoud from '../component/PageLayoud'

export default function Home() {
  const router = useRouter()
  return (
    <PageLayoud title={'Home'} titleColor ={'cyan'}>

      
        <Link href={'/about'}>Vamono al about</Link>
        <hr />
        <button onClick={() => router.push('/article/1')}>
          Vamono al article 1
        </button>

      
    </PageLayoud>
  )
}
