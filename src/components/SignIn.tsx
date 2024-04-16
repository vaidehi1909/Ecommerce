"use client";
import { FormEvent, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import useServerAction from '@/hooks/useServerAction';
import { loginAction } from '@/actions';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Ecommerce App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignIn() {

  const [runAction, isRunning] = useServerAction(loginAction);
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null)
    const data = new FormData(event.currentTarget);
    const response = await runAction(data)
    if (response?.error) { setError(response?.error) }
  };

  const onClose = () => {
    setError(null)
  }

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isRunning}
            >
              {isRunning ? 'Logging in...' : 'Sign In'}
            </Button>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
      {error && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open
          autoHideDuration={5000}
          onClose={onClose}
          message={error}>
          <Alert
            onClose={onClose}
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
          >
            {error}
          </Alert>
        </Snackbar>)}
    </Grid>
  );
}
