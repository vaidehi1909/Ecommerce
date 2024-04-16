// "use client";
import * as React from 'react';
import { AppBar, Toolbar, Container, Box, Typography } from '@mui/material';

import Link from 'next/link';

const ResponsiveAppBar = ({ children }: { children: React.ReactNode }) => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/dashboard" style={{ textDecoration: 'none', color: 'white' }} aria-label="logo">LOGO</Link>
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            {children}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
