'use client'
//
import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Image from 'next/legacy/image'

const Subscription = () => {
  return (
    <>
      <Grid
        container
        sx={{ my: 10, px: 2 }}
        display='flex'
        justifyContent='center'
      >
        <Grid item xs={12} md={6} sx={{}}>
          <Typography
            color='text.primary'
            sx={{ fontSize: 36, fontWeight: 800 }}
          >
            Únete a nuestra comunidad y
          </Typography>
          <Typography
            color='text.secondary'
            sx={{ fontSize: 36, fontWeight: 800 }}
          >
            Consigue los resultados que esperas
          </Typography>
        </Grid>
        <Grid item md={1} />
        <Grid item md={4} sx={{ display: 'flex' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Grid container>
              <Button
                variant='outlined'
                color='secondary'
                size='large'
                endIcon={<ArrowRightAltIcon />}
                sx={{
                  mx: 0.5,
                  my: 1,
                  color: 'success',
                  width: { xs: '100%', md: 'auto' },
                  py: 1.4,
                  //
                  textTransform: 'capitalize',
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                Aprender Mas
              </Button>
              <Button
                size='large'
                color='warning'
                variant='contained'
                sx={{
                  mx: 0.5,
                  my: 1,
                  //
                  textTransform: 'capitalize',
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                <Grid
                  container
                  sx={{ display: 'flex', justifyContent: 'center' }}
                >
                  <Grid item sx={{ mx: 0.8 }}>
                    <Typography
                      variant='body2'
                      sx={{ fontWeight: 800, textAlign: 'left', fontSize: 12 }}
                    >
                      #1 Binance Exchange
                    </Typography>
                    <Typography
                      variant='body1'
                      sx={{ fontWeight: 600, textAlign: 'left', fontSize: 16 }}
                    >
                      +350 criptomonedas
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{ mx: 0.8, display: 'flex', alignSelf: 'center' }}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>
                      <Image
                        src='/img_subscription_star.png'
                        layout='fill'
                        objectFit='cover'
                        alt=''
                        priority
                      />
                    </Avatar>
                  </Grid>
                </Grid>
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid container display='flex' justifyContent='center'>
        <Grid item md={8} px={2} mt={2}>
          <Typography
            color='text.secondary'
            sx={{ textAlign: { xs: 'left', md: 'center' } }}
            fontSize={18}
          >
            Además, como suscriptor tendrás acceso exclusivo a contenido
            especial y promociones únicas.
          </Typography>
          <Typography
            sx={{ textAlign: { xs: 'left', md: 'center' } }}
            mt={1}
            fontSize={20}
            fontWeight={600}
            color='text.secondary'
          >
            ¡No te pierdas la oportunidad de ser un experto en criptomonedas y
            maximizar tus ganancias!
          </Typography>
          <Grid
            container
            display='flex'
            justifyContent='center'
            alignItems='center'
            mt={4}
          >
            <Grid item md={6}>
              <Grid container>
                <Grid item xs={12} md={7} component='form' px={1} py={0.8}>
                  <TextField
                    color='secondary'
                    label='Correo'
                    required
                    variant='standard'
                    fullWidth
                    focused
                  />
                </Grid>
                <Grid item xs={12} md={5} px={1} py={0.8}>
                  <Button
                    variant='contained'
                    color='warning'
                    fullWidth
                    size='large'
                    sx={{
                      textTransform: 'capitalize',
                      height: '100%',
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    Subscríbeme
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Subscription
