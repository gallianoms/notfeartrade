'use client'
//
import { Box, Button, Grid, Typography } from '@mui/material'
import FeedIcon from '@mui/icons-material/Feed'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import { useRouter } from 'next/navigation'

const Menu = () => {
  const router = useRouter()
  return (
    <Grid
      container
      display='flex'
      sx={{
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
      }}
    >
      <Grid item>
        <Button
          onClick={() => router.push('/articulos')}
          sx={{ textTransform: 'capitalize', mx: 0.4 }}
          startIcon={<FeedIcon color='secondary' />}
          size='large'
        >
          <Typography color='text.primary' fontSize={16} fontWeight={600}>
            Artículos
          </Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button
          onClick={() => router.push('/descuentos')}
          sx={{
            textTransform: 'capitalize',
            mx: 0.4,
          }}
          startIcon={
            <FlashOnIcon
              style={{
                color: '#fff',
              }}
            />
          }
          size='large'
          variant='contained'
          color='primary'
        >
          <Typography fontSize={16} fontWeight={600}>
            Descuentos
          </Typography>
        </Button>
      </Grid>
    </Grid>
  )
}

export default Menu
