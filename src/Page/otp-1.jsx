import React from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core'
import { Grid } from '@mui/material'
const useStyles = makeStyles((theme) => ({
  tagline: {
    display: 'flex',
    height: '40%',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
}))
const Signin = () => {
  const classes = useStyles()
  return (
    <div>
      <div className='  mainContent'>
        <div className='pageCon'>
          <div className='container'>
            <br />
            <br />
            <br />
            <br />
            <br />

            <Grid container spacing={1}>
              <Grid item md={6} lg={6} xs={12} sm={12}>
                <div className={classes.tagline}>
                  <Typography
                    variant='h2'
                    style={{
                      fontWeight: 'bold',
                      marginBottom: 15,
                      fontSize: '80px',
                    }}
                  >
                   Sign in
                  </Typography>
                
                </div>
              </Grid>
              <Grid item md={6} lg={6} xs={12} sm={12}>
                <div class='auth-form card'>
                  <div class='card-header justify-content-center'>
                    <h4 class='card-title'>Sign in</h4>
                  </div>
                  <div class='card-body'>
                    <form method='post' name='myform' class='signin_validate'>
                      <div class='form-group'>
                        <label>Email</label>
                        <input
                          type='email'
                          class='form-control'
                          placeholder='hello@example.com'
                          name='email'
                        />
                      </div>
                      <div class='form-group'>
                        <label>Password</label>
                        <input
                          type='password'
                          class='form-control'
                          placeholder='Password'
                          name='password'
                        />
                      </div>
                      <div class='form-row d-flex justify-content-between mt-4 mb-2'>
                        <div class='form-group mb-0'>
                         
                        </div>
                        <div class='form-group mb-0'>
                          <a href='/reset'>Forgot Password?</a>
                        </div>
                      </div>
                      <div class='text-center'>
                        <a class='btn btn-success btn-block' href='/otp-1'>
                          Sign in
                        </a>
                      </div>
                    </form>
                    <div class='new-account mt-3'>
                      <p>
                        Don't have an account?{' '}
                        <a class='text-primary' href='/signup'>
                          Sign up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  )
}

export default Signin