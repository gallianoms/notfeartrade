'use client'
//
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Link as LinkMaterial,
  Tooltip,
  Typography,
} from '@mui/material'
import Image from 'next/legacy/image'
import Link from 'next/link'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

import { format, register } from 'timeago.js'
import es from '@/utils/es'
import Tags from './Tags'

register('my-locale', es)

const CardArticles = ({
  id,
  slug,
  author,
  time_read,
  title,
  summary,
  content,
  published_at,
  avatar,
  avatar_alt,
  img_main,
  img_main_alt,
  img_main_caption,
  tag_1,
  tag_2,
  tag_3,
}: {
  id: number
  slug: string
  author: string
  time_read: string
  title: string
  summary: string
  content: string
  published_at: string
  avatar: string
  avatar_alt: string
  img_main: string
  img_main_alt: string
  img_main_caption: string
  tag_1: string
  tag_2: string
  tag_3: string
}) => {
  return (
    <Card
      sx={{
        display: {
          xs: 'block',
          sm: 'flex',
          md: 'flex',
        },
        borderRadius: 3,
        backgroundColor: '#1B262C',
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{
            width: { sm: 275, md: 245 },
            height: '100%',
            display: { xs: 'none', sm: 'block', md: 'block' },
            position: 'relative',
          }}
        >
          <Link href={'/' + slug}>
            <Image
              src={'http://localhost:1337' + img_main}
              alt={img_main_alt}
              layout='fill'
              objectFit='cover'
              priority
            />
          </Link>
        </CardMedia>
        <CardMedia
          sx={{
            width: { sm: 275, md: 245, xl: '100%' },
            height: '100%',
            display: { xs: 'block', sm: 'none', md: 'none' },
            position: 'relative',
          }}
        >
          <Link href={'/' + slug}>
            <Image
              src={'http://localhost:1337' + img_main}
              alt={img_main_alt}
              width={640}
              height={432}
              layout='responsive'
              objectFit='cover'
            />
          </Link>
        </CardMedia>
      </CardActionArea>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Grid container display='flex' justifyContent='space-between'>
            <Grid item display='flex' alignSelf='center'>
              <Avatar
                sx={{
                  width: 26,
                  height: 26,
                  background: '#facc15',
                }}
                variant='circular'
              >
                <Image
                  src={'http://localhost:1337' + avatar}
                  alt={avatar_alt}
                  layout='fill'
                  objectFit='cover'
                />
              </Avatar>
              <Box
                sx={{ ml: 1, textDecoration: 'none' }}
                display='flex'
                alignSelf='center'
              >
                <Link
                  href='#'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <Typography
                    variant='caption'
                    sx={{
                      fontSize: 12,
                      letterSpacing: 0.8,
                    }}
                    color='text.secondary'
                    fontWeight={700}
                  >
                    {author}
                    <Typography
                      variant='caption'
                      color='text.secondary'
                      ml={0.4}
                      sx={{
                        fontSize: 10.5,
                        textTransform: 'lowercase',
                        letterSpacing: 0.7,
                      }}
                    >
                      &middot; {format(published_at, 'my-locale')}
                    </Typography>
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <CardActions>
              <Grid item display='flex' alignSelf='center'>
                {false? (
                  <LinkMaterial
                    onClick={() => console.log('click')}
                    sx={{
                      color: '#ef4444',

                      '&:hover': {
                        cursor: 'pointer',
                      },
                    }}
                  >
                    <Tooltip title='Me gusta'>
                      <FavoriteIcon
                        sx={{
                          fontSize: 26,
                          verticalAlign: 'middle',
                          display: 'inline-flex',
                          ml: 0.4,
                        }}
                      />
                    </Tooltip>
                  </LinkMaterial>
                ) : (
                  <LinkMaterial
                    onClick={() => console.log('click')}
                    sx={{
                      color: '#ef4444',

                      '&:hover': {
                        cursor: 'pointer',
                      },
                    }}
                  >
                    <Tooltip title='No me gusta'>
                      <FavoriteBorderIcon
                        sx={{
                          fontSize: 26,
                          verticalAlign: 'middle',
                          display: 'inline-flex',
                          ml: 0.4,
                        }}
                      />
                    </Tooltip>
                  </LinkMaterial>
                )}
              </Grid>
            </CardActions>
          </Grid>
          <CardActionArea>
            <Link
              href={'/' + slug}
              style={{
                textDecoration: 'none',
              }}
            >
              <Typography
                color='text.primary'
                variant='h6'
                component='div'
                sx={{ fontWeight: 'bold', mt: 0.8 }}
              >
                {title}
              </Typography>
            </Link>
          </CardActionArea>
          <CardActionArea>
            <Link
              href={'/' + slug}
              style={{
                textDecoration: 'none',
              }}
            >
              <Box
                className='truncateText'
                color='text.secondary'
                sx={{
                  pr: 1,
                  lineHeight: 1.6,
                  letterSpacing: 0.1,
                  fontSize: 14.7,
                }}
              >
                {summary}
              </Box>
            </Link>
          </CardActionArea>
          <Divider sx={{ my: 2, mx: 3, bgcolor: '#cbd5e1' }} />
          <Tags tag_1={tag_1} tag_2={tag_2} tag_3={tag_3} />
        </CardContent>
      </Box>
    </Card>
  )
}

export default CardArticles
