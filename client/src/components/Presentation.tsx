'use client'
//
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

import Image from 'next/legacy/image'
import { useRouter } from 'next/navigation'

const Presentation = () => {
  const router = useRouter()

  return (
    <Box
      sx={{
        textAlign: { md: 'center' },
        mt: { xs: 10, lg: 13 },
        px: { xs: 2, lg: 22 },
      }}
    >
      <Typography
        variant='h1'
        component='h1'
        sx={{ fontSize: { xs: 36, md: 60 }, fontWeight: 800 }}
      >
        Supera tu miedo al trading de criptomonedas: consejos útiles para
        empezar a ganar confianza.
      </Typography>
      <Typography
        color='text.secondary'
        sx={{
          fontSize: { xs: 18, md: 18 },
          mt: 3,
          px: { xs: 0, lg: 16 },
        }}
      >
        Descubre cómo vencer el temor al trading de criptomonedas con estos
        efectivos consejos para ganar seguridad en tus inversiones.{' '}
        <Box
          component='span'
          sx={{
            fontWeight: 500,
            color: '#BBE1FA',
          }}
        >
          SI SE PUEDE,
        </Box>
        {'  '}
        solo necesitas más conocimiento y estrategia.
      </Typography>

      {/* PRESENTATION TEXT */}
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Button
          color='primary'
          size='large'
          variant='contained'
          sx={{
            mx: 1,
            mt: 2,
            textTransform: 'capitalize',
            fontSize: 16,
            fontWeight: 600,
            boxShadow:
              'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
          }}
          endIcon={<ArrowRightAltIcon />}
        >
          Ir a Robinhood
        </Button>
        <Button
          color='primary'
          size='large'
          variant='outlined'
          sx={{
            mx: 1,
            mt: 2,
            textTransform: 'capitalize',
            fontSize: 16,
            fontWeight: 600,
            color: '#37bcf8',
          }}
        >
          Leer más
        </Button>
      </Grid>

      {/* PRESENTATION IMAGE */}
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        sx={{ mt: 6 }}
      >
        <Card
          sx={{
            width: 1040,
            borderRadius: 4,
            boxShadow:
              '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          }}
        >
          <CardMedia>
            <Image
              src='/img_presentation.avif'
              width={2000}
              height={1312}
              layout='responsive'
              objectFit='contain'
              priority
              alt=''
            />
          </CardMedia>
        </Card>
      </Grid>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            ml: 1,
            fontSize: 10,
            color: 'text.secondary',
          }}
          variant='overline'
        >
          Image from Freepik
          {/* Photo by Skitterphoto from Pexels */}
        </Typography>
      </Box>
    </Box>
  )
}

export default Presentation
