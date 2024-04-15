"use client";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from "@mui/material/Button";
import { useAppDispatch } from "@/hooks/redux";
import { addToCart } from "@/reducers/cartSlice";
import { Product } from '@/types/product';

const AddToCartButton = ({ product }: { product: Product }) => {

  const dispatch = useAppDispatch()

  const onAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }))
  }

  return (
    <Button
      onClick={onAddToCart}
      size="small"
      color="primary"
      variant="contained"
      startIcon={<ShoppingCartIcon />}
    >
      Add to Cart
    </Button>
  )
}

export default AddToCartButton
