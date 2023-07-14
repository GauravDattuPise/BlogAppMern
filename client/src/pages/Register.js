import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-hot-toast"

const Register = () => {

  const navigate = useNavigate();

  // state for inputs
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  });

  // handling input 
  function handleInputChange(e) {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  // user registration
  async function handleRegister(e) {

    e.preventDefault();

    try {
      const userObj = {
        userName: inputs.name,
        email: inputs.email,
        password: inputs.password
      }

      // sending data to backend
      const res = await axios.post("/user/register", userObj)

      // toast message
      if (res.data.status) {
        toast.success(res.data.message);

        setTimeout(() => {
          navigate("/login")
        }, 1500);

      }
      // if email is already exists
      else {
        toast.error(res.data.message)
      }

    } catch (error) {
      toast.error("Error in Registration")
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={handleRegister} >

        <Box sx={{ background: "rgba(250, 235, 215, 0.218)" }} display={'flex'} flexDirection={'column'} alignItems='center' justifyContent={'center'} margin={'auto'} marginTop={5} width={700} height={500} boxShadow={"10px 10px 10px 10px #ccc"} borderRadius={10}>

          <Typography variant='h2' color={'gray'}>Register</Typography>

          {/* name field */}
          <TextField
            variant='outlined'
            sx={{ width: "400px", marginTop: "30px" }}
            label="Name"
            type='text'
            name='name'
            margin='normal'
            value={inputs.name}
            onChange={handleInputChange}
            required
          />

          {/* email field */}
          <TextField
            variant='outlined'
            sx={{ width: "400px" }}
            label=" Email"
            type={"email"}
            name='email'
            margin='normal'
            value={inputs.email}
            onChange={handleInputChange}
            required
          />

          {/* password field */}
          <TextField
            variant='outlined'
            sx={{ width: "400px" }}
            label=" Passsword"
            type={'password'}
            name='password'
            margin='normal'
            value={inputs.password}
            onChange={handleInputChange}
            required
          />

          {/* register button */}
          <Button type='submit' variant='contained' sx={{ marginTop: 3, borderRadius: 3, width: "200px" }}>register</Button>

          {/* button for navigate to login */}
          <Button onClick={() => navigate("/login")} sx={{ marginTop: 3, textTransform: 'capitalize' }}>
            Already Registered ? Please Login </Button>

        </Box>
      </form>
    </>
  )
}

export default Register