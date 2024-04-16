import { Grid, Box, Skeleton } from '@mui/material';

const ProductLayoutLoading = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 1 }}>
      <Grid item alignContent={"center"} justifyContent={"center"}>
        <Skeleton variant="rectangular" width={345} height={140} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </Grid>
    </Grid>);
}
export default ProductLayoutLoading
