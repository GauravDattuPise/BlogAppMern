import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <>
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} margin={5}>
        <Typography variant='h2'>Register</Typography>
        <TextField placeholder='Your Name'></TextField>
        <TextField placeholder='Your Email'></TextField>
        <TextField placeholder='Your Password'></TextField>
    </Box>
    </>
  )
}

export default Register