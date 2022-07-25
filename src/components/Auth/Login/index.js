import * as React from 'react';
import { Box, TextField, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import { FcGlobe } from "react-icons/fc";
import { FaRegEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/dashboard')
  }

  return (
    <div className="login">
      <div className='d-flex justify-content-center align-items-center mb-3'>
        <FcGlobe size={40} />
        <div className="site_name">60eur.com</div>
      </div>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: 2,
          width: 420,
          maxWidth: '100%',
          padding: "30px 20px",
          margin: "auto",
          marginBottom: "30px"
        }}
      >
        <div className='title text-center'>Login</div>
        <div className='divider'></div>
        <div className=''>
          <div className='d-flex justify-content-start align-items-center'>
            <FaRegEnvelope size={18} color="rgb(69, 193, 151)" />
            <strong>Email</strong>
          </div>
          <TextField
            fullWidth 
            label="contact@gmail.com" 
            id="email"
            type="email"
            className='mt-2'
          />
        </div>
        <div className='mt-4 mb-3'>
          <div className='d-flex justify-content-start align-items-center'>
            <FaLock size={18} color="rgb(69, 193, 151)" />
            <strong>Password</strong>
          </div>
          <TextField 
            fullWidth 
            label="Password" 
            id="password" 
            type="password"
            className='mt-2'
          />
        </div>  
        <Divider className='mb-2' variant="fullWidth" />
        <span>
          If it is the first time in here, write only your personal email. A start email will be sent you.
        </span>
        <div className='d-flex justify-content-end'>
          <Button
            onClick={handleLogin}
            sx={{
              fontSize: "12px",
              padding: "5px 10px",
              background: "rgb(42, 144, 110)",
              boxShadow: "1px 2px 15px rgb(42, 144, 110)",
              borderRadius: "10px",
              color: "white",
              border: "none",
              "&:hover": {
                border: "rgb(42, 144, 110)",
                color: 'rgb(42, 144, 110)',
                backgroundColor: 'white'
              },
            }}
          >
            Continue
          </Button>
        </div>
      </Box>
    </div>
  )
}

export default Login