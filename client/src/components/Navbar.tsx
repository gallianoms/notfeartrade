'use client'
//
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import Menu from './Menu'

const Navbar = () => {
  const router = useRouter()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        position='static'
        sx={{ mt: 2, px: 1 }}
        color='transparent'
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            onClick={() => router.push('/')}
            sx={{ textTransform: 'lowercase' }}
          >
            <Typography
              className='textHeader'
              variant='h6'
              noWrap
              component='div'
              color='#fff'
              sx={{
                flexGrow: 1,
                display: { sm: 'block' },
                fontWeight: 400,
                fontSize: 20,
                letterSpacing: 1.2,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              https://notfeartrade.com
            </Typography>
          </Button>
          <Box
            flexDirection='row'
            sx={{
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            <Menu />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
