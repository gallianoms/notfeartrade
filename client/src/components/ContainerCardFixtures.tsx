'use client'
import { IFixtures } from '@/models/fixtures'
//
import { Grid } from '@mui/material'
import React from 'react'
import CardFixtures from './CardFixtures'

const ContainerCardFixtures = ({ fixtures }: { fixtures: IFixtures[] }) => {
  return (
    <Grid container sx={{ mt: 6, px: { sm: 4, md: 3, lg: 10 } }}>
      {fixtures.map(fixture => (
        <CardFixtures
          title={fixture.attributes.title}
          description={fixture.attributes.description}
          image={fixture.attributes.image.data.attributes.formats.small.url}
          image_alt={fixture.attributes.image.data.attributes.alternativeText}
          bgColor={fixture.attributes.bgColor}
          key={fixture.id}
        />
      ))}
    </Grid>
  )
}

export default ContainerCardFixtures
