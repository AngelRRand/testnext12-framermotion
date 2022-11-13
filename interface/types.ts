export interface container {
    children: JSX.Element | JSX.Element[]
    title: string
    titleColor: string
}

export interface Vamo {
    articles: Article[]
}

export interface Articles {
    articles: Article[]
}

export interface Article {
    source: Source
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}

export interface Source {
    id: any
    name: string
}
