'use client'
import { Container, Grid, Typography } from '@mui/material'
//
import React from 'react'

const ContainerFixtures = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <Grid container display='flex' justifyContent='flex-end'>
        <Grid item md={8}>
          <Typography fontSize={30} fontWeight={600} sx={{ textAlign: 'left' }}>
            Explorando el mundo de las criptomonedas
          </Typography>
          <Typography
            color='text.secondary'
            fontSize={18}
            mt={2}
            sx={{ textAlign: 'left' }}
          >
            A diferencia de las monedas tradicionales, las criptomonedas son
            digitales y no están respaldadas por ningún gobierno o entidad
            financiera. En cambio, se basan en una tecnología conocida como
            blockchain, que es una base de datos descentralizada y segura que
            mantiene un registro de todas las transacciones.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ContainerFixtures
