'use client'
//
import { Box, Card, CardMedia, Typography } from '@mui/material'
import MuiMarkdown from 'mui-markdown'
import Image from 'next/legacy/image'
import React from 'react'

const HeaderBody = ({
  img_main,
  img_main_alt,
  img_main_caption,
  content,
}: {
  img_main: string
  img_main_alt: string
  img_main_caption: string
  content: string
}) => {
  return (
    <>
      <Card
        sx={{
          mt: 3.4,
          maxWidth: 752,
          width: '100%',
          borderRadius: 4,
          boxShadow:
            ' 0 4px 6px -1px rgb(255 255 255 / 0.1), 0 2px 4px -2px rgb(255 255 255 / 0.1)',
        }}
      >
        <CardMedia
          sx={{
            maxWidth: 922,
          }}
        >
          <Image
            src={'http://localhost:1337' + img_main}
            width={922}
            height={622}
            layout='responsive'
            objectFit='cover'
            priority
            alt={img_main_alt}
          />
        </CardMedia>
      </Card>
      <Box
        mt={0.8}
        sx={{
          textAlign: {
            xs: 'center',
            lg: 'left',
          },
        }}
      >
        <Typography
          variant='overline'
          color='text.primary'
          sx={{
            fontSize: { xs: 10 },
            ml: { xs: 0, lg: 2 },
          }}
        >
          {img_main_caption}
        </Typography>
      </Box>
      <MuiMarkdown
        overrides={{
          h1: {
            component: 'h1',
            props: {
              style: {
                fontSize: 60,
                marginTop: 20,
                marginBottom: 20,
              },
            } as React.HTMLProps<HTMLParagraphElement>,
          },
          p: {
            props: {
              style: {},
            },
          },
        }}
      >
        {content}
      </MuiMarkdown>
    </>
  )
}

export default HeaderBody
