'use client'
//
import { Avatar, Box, Grid, Link, Typography } from '@mui/material'
import Image from 'next/legacy/image'

const CardFixtures = ({
  title,
  description,
  image,
  image_alt,
  bgColor,
}: {
  title: string
  description: string
  image: string
  image_alt: string
  bgColor: string
}) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      display='flex'
      justifyContent='center'
      sx={{
        my: { xs: 2, sm: 4, md: 3, lg: 3 },
      }}
    >
      <Link href='#' underline='none' color='CaptionText'>
        <Box
          sx={{
            width: 276,
            height: 104,
            borderRadius: 2,
            // backgroundColor: `#${bgColor}`,
            backgroundColor: `#3282B8`,
          }}
        >
          <Grid
            container
            display='flex'
            justifyContent='space-between'
            sx={{
              height: '100%',
              px: 2,
            }}
          >
            <Grid
              item
              xs={4}
              md={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
              }}
            >
              <Avatar sx={{ width: 70, height: 70, background: 'none' }}>
                <Image
                  src={'http://localhost:1337' + image}
                  layout='fill'
                  objectFit='cover'
                  alt={image_alt}
                  priority
                />
              </Avatar>
            </Grid>
            <Grid
              item
              xs={8}
              md={8}
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                pl: 2,
              }}
            >
              <Box>
                <Typography
                  color='text.primary'
                  variant='h6'
                  sx={{ fontWeight: '800', fontSize: 16 }}
                >
                  {/* {title} */}
                  ¿Que es Bitcoin?
                </Typography>
                <Typography variant='body2' color='text.primary'>
                  {/* {description} */}
                  Moneda digital descentralizada.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Link>
    </Grid>
  )
}

export default CardFixtures
