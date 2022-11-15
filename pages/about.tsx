import Link from 'next/link'
import React from 'react'
import PageLayoud from '../component/PageLayoud';
import { Articles as Props } from '../interface/types';

const about: React.FC<Props> = ({ articles }) => {
  console.log(articles)
  return (
    <PageLayoud title='About' titleColor='crimson'>
      <Link href={'/'}>Vamono al homeeeee messi</Link>
        {/* {articles.length === 0 ? <p>asfa</p> : articles.map((a, index) => (
          <div key={index}>
            <h2>{a.title}</h2>
            <p>{a.description}</p>
          </div>
        ))} */}
    </PageLayoud>
  )
}

export default about


export async function getServeer() {
  const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d36b270478c045cab6b7cb6fd094c357')
  const  {articles}  = await response.json()
  console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
  return {
    props: articles
  }
}


