'use client'
//
import { Box, Divider, Grid, Link, Stack, Typography } from '@mui/material'

const Footer = () => {
  return (
    <>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          mt: 8,
          py: 5,
        }}
        position='relative'
      >
        <Grid
          item
          py={0.6}
          px={3}
          md={5}
          lg={4}
          display='flex'
          justifyContent='center'
        >
          <Typography
            variant='caption'
            fontSize={14}
            fontWeight={600}
            letterSpacing={0.6}
            textTransform='uppercase'
          >
            © 2022{' '}
            <Box component='span' color='#0EA5E9'>
              not.fear.trade
            </Box>{' '}
            Trading Advices
          </Typography>
        </Grid>

        <Grid
          color='text.secondary'
          item
          py={0.6}
          px={3}
          md={5}
          lg={4}
          display='flex'
          justifyContent='center'
        >
          <Typography
            variant='caption'
            fontSize={14}
            sx={{ textAlign: 'left' }}
          >
            La recomendación de productos y servicios es personal a través de mi
            experiencia como inversor. Es posible que recibamos comisiones por
            las compras realizadas desde nuestros enlaces.
          </Typography>
        </Grid>

        <Grid
          item
          py={0.6}
          md={5}
          lg={4}
          display='flex'
          justifyContent='center'
          sx={{
            mt: { md: 1 },
          }}
        >
          <div>
            <Stack
              direction='row'
              divider={<Divider orientation='vertical' flexItem />}
              spacing={2}
            >
              <Link href='#' underline='hover'>
                <Box sx={{ display: 'flex' }}>
                  <Typography
                    color='text.secondary'
                    variant='caption'
                    sx={{ fontSize: 14, mx: { xs: 0, sm: 0.3 }, py: 0.1 }}
                  >
                    Instagram
                  </Typography>
                </Box>
              </Link>
              <Link href='#' underline='hover'>
                <Box sx={{ display: 'flex' }}>
                  <Typography
                    color='text.secondary'
                    variant='caption'
                    sx={{ fontSize: 14, mx: { xs: 0, sm: 0.3 }, py: 0.1 }}
                  >
                    Twitter
                  </Typography>
                </Box>
              </Link>
              <Link href='#' underline='hover'>
                <Box sx={{ display: 'flex' }}>
                  <Typography
                    color='text.secondary'
                    variant='caption'
                    sx={{ fontSize: 14, mx: { xs: 0, sm: 0.3 }, py: 0.1 }}
                  >
                    Discord
                  </Typography>
                </Box>
              </Link>

              <Link href='/descuentos' underline='hover' color='white'>
                <Box sx={{ display: 'flex' }}>
                  <Typography
                    variant='caption'
                    sx={{
                      fontSize: 15,
                      backgroundColor: '#3282B8',
                      px: 1.2,
                      py: 0.1,
                      fontWeight: '600',
                      borderRadius: 1,
                    }}
                  >
                    Descuentos
                  </Typography>
                </Box>
              </Link>
            </Stack>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer
