import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Setting from './Setting';
import ProductCategory from './ProductCategory';
import Link from 'next/link';
import { User } from '@/types/user';
import Cart from './Cart';

function ResponsiveAppBar({ user, showCategory = true }: { user: User, showCategory?: boolean }) {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/dashboard" style={{ textDecoration: 'none', color: 'white' }} aria-label="logo">LOGO</Link>
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            {showCategory && <ProductCategory />}
            <Cart />
            <Setting user={user} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
