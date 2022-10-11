import Head from 'next/head';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import Router from 'next/router';
import { login } from '../services/auth-api';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useCookies } from 'react-cookie';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup
        .string()
        .max(255)
        .required('Username is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    })
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    login(formik.values.username, formik.values.password).then((res) => {
      if(res.status === 404) {
        Router.push('/');
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Login
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Login on the library app
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.username && formik.errors.username)}
              fullWidth
              helperText={formik.touched.username && formik.errors.username}
              label="Username"
              margin="normal"
              name="username"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="username"
              value={formik.values.username}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
