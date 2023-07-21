'use client'
//
import { IArticles } from '@/models/articles'
import { Container, Grid, Typography } from '@mui/material'
import HeaderArticle from './HeaderArticle'
import BodyArticle from './BodyArticle'

const Article = ({ article }: { article: IArticles[] }) => {
  const author = article[0].attributes.author
  const avatar = article[0].attributes.avatar.data.attributes.formats.small.url
  const avatar_alt =
    article[0].attributes.avatar.data.attributes.alternativeText
  const date = article[0].attributes.publishedAt
  const time_read = article[0].attributes.time_read
  const content = article[0].attributes.content
  const img_main =
    article[0].attributes.img_main.data.attributes.formats.medium.url
  const img_main_alt =
    article[0].attributes.img_main.data.attributes.alternativeText
  const img_main_caption =
    article[0].attributes.img_main.data.attributes.caption

  if (!article) return <Typography>Loading...</Typography>
  return (
    <Grid container mt={8}>
      <Grid item lg={1} sx={{ display: { xs: 'none', lg: 'flex' } }} />
      <Grid item xs={12} lg={8}>
        <Container>
          {/* HEADER CONTENT */}
          <HeaderArticle
            author={author}
            avatar={avatar}
            avatar_alt={avatar_alt}
            date={date}
            time_read={time_read}
          />
          {/* BODY CONTENT */}
          <BodyArticle
            img_main={img_main}
            img_main_alt={img_main_alt}
            img_main_caption={img_main_caption}
            content={content}
          />
        </Container>
      </Grid>
      {/* FOOTER CONTENT */}
      {/* <FooterArticlePage
        // DEVELOP
        url={`http://localhost:3000/${slug}`}
        // PRODUCTION
        // url={`https://tradingphobia.com/${slug}`}
        identifier={article.sys.id}
        title={titleH1}
        related={related}
      /> */}
    </Grid>
  )
}

export default Article
