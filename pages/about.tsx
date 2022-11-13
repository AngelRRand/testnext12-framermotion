import Link from 'next/link'
import React from 'react'
import PageLayoud from '../component/PageLayoud';
import { Root } from '../interface/types';

const about: React.FC<Root> = ({ articles }) => {
  console.log(articles)
  return (
    <PageLayoud title='About' titleColor='crimson'>
        <Link href={'/'}>Vamono al home</Link>
        {/* {articles.length > 0 && articles.map((article:any, index:any) => {
          <div key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        })} */}
    </PageLayoud>
  )
}

export async function getServer(){
  const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d36b270478c045cab6b7cb6fd094c357')
  const { articles } = await response.json()
  return {
    props: {
      articles
    }
  }
}



export default about