import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useDispatch } from 'react-redux'
import { authActions } from '../redux/Store'

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // state for inputs
  const [inputs, setInputs] = useState({
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
  async function handleLogin(e) {

    e.preventDefault();

    try {
      const userObj = {
        email: inputs.email,
        password: inputs.password
      }

      // sending data to backend
      const res = await axios.post("/user/login", userObj)

      // toast message
      if (res.data.status) {
        toast.success(res.data.message);

        setTimeout(()=>{
          navigate("/")
        },1500);

        // calling the login function of reducers & making login state as true
        dispatch(authActions.login());

        // setting userId in localstorage
        localStorage.setItem("userId", res?.data?.user?._id);
      }
      else{
        toast.error(res.data.message)
      }

    } catch (error) {
      toast.error("Something went wrong")
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={handleLogin} >

        <Box maxWidth={350} display={'flex'} flexDirection={'column'} alignItems='center' justifyContent={'center'} margin={'auto'} marginTop={5} >

          <Typography variant='h3'>Login</Typography>


          {/* email field */}
          <TextField
            variant='standard'
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
            variant='standard'
            label=" Passsword"
            type={'password'}
            name='password'
            margin='normal'
            value={inputs.password}
            onChange={handleInputChange}
            required
          />

          {/* login button */}
          <Button type='submit' variant='contained' sx={{ marginTop: 3, borderRadius: 3 }}>login</Button>

          {/* button for navigate to register */}
          <Button onClick={() => navigate("/register")} sx={{ marginTop: 3, textTransform: 'capitalize' }}>
            Not a user ? Please register
          </Button>

        </Box>
      </form>
    </>
  )
}

export default Login