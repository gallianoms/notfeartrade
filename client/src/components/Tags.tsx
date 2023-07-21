'use client'
//
import { Chip, Link, Stack } from '@mui/material'

const Tags = ({
  tag_1,
  tag_2,
  tag_3,
}: {
  tag_1: string
  tag_2: string
  tag_3: string
}) => {
  return (
    <Stack direction='row' spacing={1} sx={{ my: 1, justifyContent: 'center' }}>
      <Link href='#' underline='hover'>
        <Chip
          color='warning'
          label={`#${tag_1}`}
          variant='filled'
          size='small'
          sx={{
            letterSpacing: 0.3,
            fontWeight: 500,
          }}
        />
      </Link>
      <Link href='#' underline='hover'>
        <Chip
          color='secondary'
          label={`#${tag_2}`}
          variant='filled'
          size='small'
          sx={{ letterSpacing: 0.3 }}
        />
      </Link>
      <Link href='#' underline='hover'>
        <Chip
          color='secondary'
          label={`#${tag_3}`}
          variant='filled'
          size='small'
          sx={{ letterSpacing: 0.3 }}
        />
      </Link>
    </Stack>
  )
}

export default Tags
