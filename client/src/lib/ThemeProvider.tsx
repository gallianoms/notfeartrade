'use client'
//
import { CssBaseline, ThemeProvider as TP } from '@mui/material'
import theme from '@/utils/theme'
import React from 'react'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TP theme={theme}>
      <CssBaseline />
      {children}
    </TP>
  )
}

export default ThemeProvider
