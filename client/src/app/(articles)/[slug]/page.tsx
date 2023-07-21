import { getArticles } from '@/api/getArticles'
import { getOneArticle } from '@/api/getOneArticle'
import Back from '@/components/Back'
import { IArticles } from '@/models/articles'
import Article from './Article'

export async function generateStaticParams() {
  const { data }: { data: IArticles[] } = await getArticles()

  return data.map(article => ({
    slug: article.attributes.slug,
  }))
}

const ArticlePage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const { data }: { data: IArticles[] } = await getOneArticle(slug)

  return (
    <>
      <Back />
      <Article article={data} />
    </>
  )
}

export default ArticlePage
