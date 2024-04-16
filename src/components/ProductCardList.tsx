"use client"
import { Card, CardContent, CardMedia, Typography, Grid, CardActionArea, CardActions, Rating } from '@mui/material';
import Link from 'next/link'

import { useProductList } from '@/hooks/useProductList';
import { Product } from '@/types/product';

const ProductCardList = () => {
  const { products } = useProductList();
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {products.map((product: Product) => (
        <Grid item xs={6} md={4} lg={3} key={product.id}>
          <Link href="/product/[id]" as={`/product/${product.id}`} style={{ textDecoration: 'none' }} passHref aria-label="product">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" noWrap>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Grid container justifyContent="space-between">
                  <Rating name="half-rating-read" defaultValue={product.rating.rate} precision={0.1} readOnly />
                  <Typography variant="h6">₹{product.price}</Typography>
                </Grid>
              </CardActions>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductCardList
