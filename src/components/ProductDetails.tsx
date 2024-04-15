import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Container from "@mui/material/Container";


import { Product } from "@/types/product"
import { User } from "@/types/user"
import AddToCartButton from "./AddToCartButton";

const ProductDetails = (props: { product: Product, user: User }) => {
  const { product } = props

  return (
    <Container>
      <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
        <Grid item alignContent={"center"} justifyContent={"center"}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
            />
            </CardActionArea>
            <CardActions>
              <AddToCartButton product={product} />
            </CardActions>
          </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5">{product.title}</Typography>
        <span><Rating name="half-rating-read" defaultValue={product.rating.rate} precision={0.1} readOnly /> {product.rating.count} Ratings</span>
        <Typography variant="body1">{product.category}</Typography>
        <Typography variant="body1">{product.description}</Typography>
        <Typography variant="h6">₹{product.price}</Typography>
      </Grid>
    </Grid >
    </Container>
  )
}

export default ProductDetails
