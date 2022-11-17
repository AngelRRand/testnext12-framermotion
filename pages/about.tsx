import Link from 'next/link'
import React from 'react'
import PageLayoud from '../component/PageLayoud';
import { Articles as Props } from '../interface/types';

const about: React.FC<Props> = ({ articles }) => {
  return (
    <PageLayoud title='About' titleColor='crimson'>
      <Link href={'/'}>Vamono al home</Link>
      <section>
        {articles.length < 0 ? <p>No existen articulos</p> : articles.map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <img src={article.url}/>
          </div>
        ))}
      </section>
    </PageLayoud>
  )
}

export async function getServerSideProps() {
  const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d36b270478c045cab6b7cb6fd094c357')
  const { articles } = await response.json()
  return {
    props: {
      articles
    }
  }
}

export default about

