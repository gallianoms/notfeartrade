import { getArticles } from '@/api/getArticles'
import Back from '@/components/Back'
import { IArticles } from '@/models/articles'
import AllArticles from './AllArticles'

const ArticlesPage = async () => {
  const { data }: { data: IArticles[] } = await getArticles()
  return (
    <>
      <Back />
      <AllArticles articles={data} />
    </>
  )
}

export default ArticlesPage
