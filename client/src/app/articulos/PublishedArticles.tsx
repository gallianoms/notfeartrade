'use client'
//
import { Avatar, Box, Grid, Typography } from '@mui/material'
import Image from 'next/legacy/image'
import { format, register } from 'timeago.js'
import es from '@/utils/es'

register('my-locale', es)

const PublishedArticles = ({
  img,
  img_alt,
  title,
  author,
  date,
  summary,
}: {
  img: string
  img_alt: string
  title: string
  author: string
  date: string
  summary: string
}) => {
  return (
    <Grid container my={2.4} mx={2}>
      <Grid
        item
        xs={2}
        sm={2}
        lg={2}
        sx={{
          display: { xs: 'flex', sm: 'block' },
          alignSelf: { xs: 'center', sm: 'normal' },
          mr: { xs: 5.8, lg: 3 },
        }}
      >
        <Avatar
          sx={{
            width: { xs: 87.17, sm: '100%', lg: '100%' },
            height: { xs: 85.91, sm: '100%', lg: '100%' },
          }}
          variant='rounded'
        >
          <Image
            src={'http://localhost:1337' + img}
            alt={img_alt}
            layout='fill'
            objectFit='cover'
            priority
          />
        </Avatar>
      </Grid>
      <Grid item xs={8} sm={9} lg={9}>
        <Typography
          color='text.primary'
          component='h3'
          sx={{
            fontSize: { xs: 16, md: 18 },
            fontWeight: { xs: 600, md: 700 },
          }}
        >
          {title}
        </Typography>
        <Typography mt={1} fontSize={12} color='text.secondary'>
          <Box component='span' fontWeight={600}>
            {author}
          </Box>{' '}
          &middot; <Box component='span'>{format(date, 'my-locale')}</Box>
        </Typography>
        <Typography
          className='truncateText'
          mt={1}
          fontSize={14.2}
          color='text.secondary'
          sx={{
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          {summary}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default PublishedArticles
