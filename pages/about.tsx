import Link from 'next/link'
import React from 'react'
import PageLayoud from '../component/PageLayoud';
import styles from '../styles/About.module.css'
import { Articles as Props } from '../interface/types';
import Image from 'next/image';

const about: React.FC<Props> = ({ articles }) => {
  return (
    <PageLayoud title='About' titleColor='crimson'>
      <div>
        <Link href={'/'}>Home</Link>
      </div>
      <section className={styles.containerArticles}>
        {articles.length < 0 ? <p>No existen articulos</p> : articles.map((article, index) => (
          <article className={styles.article} key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <div className={styles.containerIMG}>
              <Image
                alt={article.title}
                src={article.urlToImage}
                width={500}
                height={200}
                layout={'responsive'}
              />

            </div>
          </article>
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

