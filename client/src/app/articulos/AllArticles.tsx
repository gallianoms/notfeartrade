'use client'
//
import { IArticles } from '@/models/articles'
import {
  Box,
  CardActionArea,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import PublishedArticles from './PublishedArticles'
import SearchIcon from '@mui/icons-material/Search'
import Fuse from 'fuse.js'

const AllArticles = ({ articles }: { articles: IArticles[] }) => {
  articles.sort(
    (a, b) =>
      new Date(b.attributes.publishedAt).getTime() -
      new Date(a.attributes.publishedAt).getTime()
  )

  //* FUSE.JS
  const [query, setQuery] = useState<any[]>([])

  console.log(query)

  const options = {
    includeScore: true,
    keys: ['attributes.title'],
  }

  return (
    <Grid
      container
      mt={8}
      sx={{
        px: { xs: 2, lg: 0 },
      }}
    >
      <Box display='flex' justifyContent='center' sx={{ width: '100%' }}>
        <Grid item lg={7}>
          <Typography fontWeight={800} fontSize={24} color='text.secondary'>
            Artículos publicados
          </Typography>
          <Typography
            mt={0.4}
            fontWeight={600}
            fontSize={18}
            color='text.primary'
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            deleniti perferendis.
          </Typography>

          <Grid display='flex' justifyContent='center'>
            <Grid item xs={10} sm={7} md={6} mt={4} mb={2}>
              <TextField
                focused
                onChange={async e => {
                  const { value } = e.currentTarget
                  // Dynamically load fuse.js
                  const Fuse = (await import('fuse.js')).default
                  const fuse = new Fuse(articles, options)
                  setQuery(fuse.search(value))
                }}
                type='search'
                label='Search a topic'
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start' sx={{ color: '#3282B8' }}>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <Container sx={{ mt: 1 }}>
            {query.length > 0
              ? query.map(article => (
                  <CardActionArea key={article.item.id}>
                    <Link
                      href={'/' + article.item.attributes.slug}
                      style={{ textDecoration: 'none' }}
                    >
                      <PublishedArticles
                        img={
                          article.item.attributes.img_main.data.attributes
                            .formats.small.url
                        }
                        img_alt={
                          article.item.attributes.img_main.data.attributes
                            .alternativeText
                        }
                        title={article.item.attributes.title}
                        author={article.item.attributes.author}
                        date={article.item.attributes.publishedAt}
                        summary={article.item.attributes.summary}
                      />
                    </Link>
                  </CardActionArea>
                ))
              : articles.map(article => (
                  <CardActionArea key={article.id}>
                    <Link
                      href={'/' + article.attributes.slug}
                      style={{ textDecoration: 'none' }}
                    >
                      <PublishedArticles
                        img={
                          article.attributes.img_main.data.attributes.formats
                            .small.url
                        }
                        img_alt={
                          article.attributes.img_main.data.attributes
                            .alternativeText
                        }
                        title={article.attributes.title}
                        author={article.attributes.author}
                        date={article.attributes.publishedAt}
                        summary={article.attributes.summary}
                      />
                    </Link>
                  </CardActionArea>
                ))}
          </Container>
        </Grid>
      </Box>
    </Grid>
  )
}

export default AllArticles
