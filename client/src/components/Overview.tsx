'use client'
//
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Image from 'next/legacy/image'

const Overview = () => {
  return (
    <Grid container direction='row' justifyContent='center' sx={{ mt: 8 }}>
      <Grid
        item
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 2,
        }}
        md={5}
      >
        <Box sx={{ display: 'block' }}>
          <Typography
            variant='h2'
            component='h2'
            color='text.primary'
            sx={{
              fontSize: { xs: 26, md: 34 },
              fontWeight: 800,
            }}
          >
Descubre los beneficios de invertir en Bitcoin
          </Typography>
          <Typography
            color='text.secondary'
            sx={{ mt: 2, fontSize: { xs: 16, md: 18 } }}
          >
     En la actualidad, Bitcoin puede ser una excelente opción para quienes buscan generar ingresos a través del trading de criptomonedas. Algunos beneficios destacados son la alta rentabilidad, la seguridad y privacidad en las transacciones, la descentralización y la facilidad de acceso a través de diversas plataformas de intercambio.
          </Typography>
          <Button
            endIcon={<ArrowRightAltIcon />}
            variant='contained'
            color='warning'
            size='large'
            sx={{
              mt: 4,
              textTransform: 'capitalize',
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            Aprender más
          </Button>
        </Box>
      </Grid>
      <Grid item sx={{ px: 2, mt: { xs: 4 } }} md={5}>
        <Card
          className=''
          sx={{
            width: { xs: 358, md: 450 },
            borderRadius: 4,
            boxShadow:
              '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          }}
        >
          <CardActionArea>
            <CardMedia sx={{ height: { xs: 420, md: 460 } }}>
              <Image
                src='/img_overview.avif'
                width={680}
                height={798}
                layout='fill'
                objectFit='cover'
                alt=''
                priority
              />
            </CardMedia>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Overview
