'use client'
import { Box } from '@mui/material'
//

import React from 'react'
import Menu from './Menu'

const MenuMobile = () => {
  return (
    <Box mt={2} sx={{ display: { xs: 'flex', sm: 'none' } }}>
      <Menu />
    </Box>
  )
}

export default MenuMobile
