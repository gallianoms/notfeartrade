'use client'
//
import { Avatar, Box, Typography } from '@mui/material'
import Image from 'next/legacy/image'
import React from 'react'
import Share from './Share'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import { format, register } from 'timeago.js'
import es from '@/utils/es'

register('my-locale', es)

const HeaderArticle = ({
  author,
  avatar,
  avatar_alt,
  date,
  time_read,
}: {
  author: string
  avatar: string
  avatar_alt: string
  date: string
  time_read: string
}) => {
  // * Transforming time_read: "min 5" to "5 min"

  const words = time_read.split(' ')
  const time_read_aux = `${words[1]} ${words[0]}`

  return (
    <Box flexDirection='row' display='flex'>
      <Avatar
        sx={{
          width: 42,
          height: 42,
          background: '#facc15',
        }}
      >
        <Image
          src={'http://localhost:1337' + avatar}
          layout='fill'
          objectFit='cover'
          alt={avatar_alt}
          priority
        />
      </Avatar>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        width='100%'
        mx={1.8}
      >
        <Box>
          <Typography fontSize={14} textTransform='lowercase' fontWeight={500}>
            {author}
          </Typography>
          <Box display='flex' flexDirection='row' alignItems='center'>
            <Typography fontSize={13} color='text.secondary'>
              {format(date, 'my-locale')} &middot;{' '}
              {`${time_read_aux} de lectura`}
            </Typography>
            {/* <AccessAlarmIcon
              sx={{
                display: 'flex',
                alignSelf: 'center',
                width: 15.5,
                color: 'text.secondary',
                ml: 0.6,
              }}
            /> */}
          </Box>
        </Box>
        {/* JUST SCREEN MD^ */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'none', md: 'flex' },
          }}
        >
          <Share />
        </Box>
      </Box>
    </Box>
  )
}

export default HeaderArticle
