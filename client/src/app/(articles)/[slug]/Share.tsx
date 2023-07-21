'use client'
import { IconShareAnimations } from '@/utils/animations'
import { Avatar, Box, Tooltip, Typography } from '@mui/material'
import Image from 'next/legacy/image'
const Share = () => {
  const animations = IconShareAnimations()

  return (
    <Box ml={3} display='flex' flexDirection='row'>
      <Typography
        variant='overline'
        fontSize={11.7}
        fontWeight={800}
        display='flex'
        alignSelf='center'
        color='text.secondary'
        mr={2}
        sx={{
          letterSpacing: { xs: 0.4, lg: 0.9 },
        }}
      >
        ¿Quieres compartir?
      </Typography>
      <Tooltip title='Twitter'>
        <Avatar
          variant='square'
          sx={{
            width: 32,
            height: 32,
            mx: 0.7,
            background: 'none',
            '&:hover': animations,
          }}
        >
          <Image
            width={32}
            height={32}
            src='/icon-twitter.png'
            alt=''
            priority
          />
        </Avatar>
      </Tooltip>
      <Tooltip title='Instagram'>
        <Avatar
          variant='square'
          sx={{
            width: 32,
            height: 32,
            mx: 0.7,
            background: 'none',
            '&:hover': animations,
          }}
        >
          <Image
            width={32}
            height={32}
            src='/icon-instagram.png'
            alt=''
            priority
          />
        </Avatar>
      </Tooltip>
      <Tooltip title='Facebook'>
        <Avatar
          variant='square'
          sx={{
            width: 32,
            height: 32,
            mx: 0.7,
            background: 'none',
            '&:hover': animations,
          }}
        >
          <Image
            width={32}
            height={32}
            src='/icon-facebook.png'
            alt=''
            priority
          />
        </Avatar>
      </Tooltip>
      <Tooltip title='Copiar enlace'>
        <Avatar
          variant='square'
          sx={{
            width: 32,
            height: 32,
            mx: 0.7,
            background: 'none',
            '&:hover': animations,
          }}
        >
          <Image
            width={32}
            height={32}
            src='/icon-copy-to-clipboard.png'
            alt=''
            priority
          />
        </Avatar>
      </Tooltip>
    </Box>
  )
}

export default Share
