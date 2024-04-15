"use client"
import { useMemo } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';


import { useCartList } from "@/hooks/useCartList"
import { CartProduct } from "@/types/product"
import { removeItem } from "@/reducers/cartSlice";
import { useAppDispatch } from "@/hooks/redux";

const CartList = () => {

  const dispatch = useAppDispatch()
  const { cartList } = useCartList()
  const totalPrice = useMemo(() => cartList.reduce((acc: number, item: CartProduct) => acc + (item.price * item.quantity), 0), [cartList])

  const onDelete = (id: number) => {
    dispatch(removeItem(id))
  }

  if (cartList.length === 0) {
    return (
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 1, ml: 2 }}>
        <Grid item>
          <Typography variant="h5" color="text.secondary" align="center">Cart is Empty</Typography>
        </Grid>
      </Grid>
    )
  }
  return (
    <>
      {cartList.map((item: CartProduct, index: number) => {
        return (
          <Grid key={item.id} container direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 1, ml: 2 }}>
            <Grid item alignContent={"center"} justifyContent={"center"}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    style={{ objectFit: "contain", height: "140px", width: "140px" }}
                    image={item.image}
                    alt={item.title}
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="h6">₹{item.price}</Typography>
              </Grid>
              <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                <Typography variant="body1">Qty:  {item.quantity}</Typography>
                <Divider orientation="vertical" variant="middle" flexItem sx={{ ml: 1 }} />
                <Button onClick={() => onDelete(item.id)}>Delete</Button>
              </Grid>
              {index === cartList.length - 1 && (<><Divider />
                <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                  <Typography variant="h6">Total:  ₹{parseFloat(String(totalPrice)).toFixed(2)}</Typography>
                </Grid>
              </>)}
            </Grid>
          </Grid >
        )
      })
      }
    </ >
  )
}

export default CartList
