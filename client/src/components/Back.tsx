'use client'
//
import React from 'react'
import { useRouter } from 'next/navigation'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { Button, Box } from '@mui/material'

const Back = () => {
  const router = useRouter()

  return (
    <Box mt={2} ml={2} display='flex' flexDirection='row'>
      <Button
        color='secondary'
        size='large'
        startIcon={<KeyboardBackspaceIcon />}
        sx={{
          textTransform: 'capitalize',
          fontWeight: '600',
          fontSize: 16,
          letterSpacing: 0.2,
        }}
        onClick={() => router.back()}
      >
        Volver
      </Button>
    </Box>
  )
}

export default Back
