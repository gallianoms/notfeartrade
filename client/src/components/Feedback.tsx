'use client'
//
import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { z } from 'zod'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import { CleaningServices } from '@mui/icons-material'

const Feedback = () => {
  const [email, setEmail] = useState('')
  const [comments, setComments] = useState('')

  let arrErrors: string[] = []

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const zodSchema = z.object({
      email: z.string().email({ message: 'El email no es valido' }),
      comments: z
        .string()
        .min(1, { message: 'El comentario no puede estar vacio' }),
    })

    const result = zodSchema.safeParse({
      email,
      comments,
    })

    if (!result.success) {
      arrErrors = []
      result.error.issues.map(err => arrErrors.push(err.message))
      for (const err of arrErrors) {
        notifyError(err)
      }
    } else {
      //* CODE TO MANAGE EMAIL TO THE SERVER
      //* ...
      // console.log(result.data)
      // result.data

      notifySuccess('Gracias por tus comentarios... 🥳')

      setEmail('')
      setComments('')
    }
  }

  const notifyError = (err: string) =>
    toast.error(`${err}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })

  const notifySuccess = (message: string) =>
    toast.success(`${message}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })

  return (
    <Box sx={{ backgroundColor: '#0F4C75' }} pt={1} pb={14} my={6}>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <Grid container justifyContent='center' sx={{ mt: 12, px: 2 }}>
        <Grid item md={6}>
          <Typography fontSize={24} fontWeight={600}>
            ¡Hola a todos los lectores del blog de criptomonedas!
          </Typography>
          <Typography color='text.secondary' fontSize={18} mt={1.4}>
            En primer lugar, queremos agradecerles por seguirnos y leer nuestros
            artículos. Hoy queremos pedirles un favor muy importante para
            nosotros: nos encantaría recibir su feedback sobre el blog. ¿Qué
            temas les gustaría que tratáramos en el futuro? O si creen que hay
            algún aspecto en el que podemos mejorar.{' '}
            <strong>Muchas Gracias a todos</strong>.
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 4, px: 2 }}>
        <Grid item xs={12} md={4} />
        <Grid item xs={12} md={4} sx={{ px: { sm: 16, md: 0 } }}>
          <TextField
            value={email}
            onChange={e => setEmail(e.target.value)}
            fullWidth
            type='email'
            label='Email'
            required
            sx={{ my: 1 }}
            color='secondary'
            focused
          />
          <TextField
            value={comments}
            color='secondary'
            fullWidth
            onChange={e => setComments(e.target.value)}
            type='text'
            label='Comentarios'
            required
            multiline
            minRows={10}
            sx={{ my: 1 }}
            focused
          />

          <Button
            onClick={e => handleSubmit(e)}
            fullWidth
            variant='contained'
            color='info'
            size='large'
            sx={{
              color: '#fff',
              fontWeight: 700,
              letterSpacing: 0.6,
              mt: 3,
            }}
          >
            Enviar
          </Button>
        </Grid>
        <Grid item md={4} />
      </Grid>
    </Box>
  )
}

export default Feedback
