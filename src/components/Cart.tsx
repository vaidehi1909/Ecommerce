"use client";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import { useCartList } from '@/hooks/useCartList';

const Cart = () => {
  const { cartList } = useCartList()
  return (
    <Link href="/cart" style={{ textDecoration: 'none', color: 'white' }} aria-label="cart">
      <IconButton sx={{ p: 0, mr: 2 }}>
        <Badge badgeContent={cartList.length} color="error">
          <Avatar >
            <ShoppingCartIcon />
          </Avatar>
        </Badge>
      </IconButton>
    </Link>
  )
}

export default Cart
