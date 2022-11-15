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


export async function getServeer() {
  console.log('asdaqdas')
  const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d36b270478c045cab6b7cb6fd094c357')
  const  articles  = await response.json()
  console.log(articles, 'adasdas')
  return {
    props: articles
  }
}