import { Grid, Box, Skeleton } from '@mui/material';

const CartLayoutLoading = () => {
  return (
    <>
      {
        Array.from({ length: 4 }).map((_, index) => (
          <Grid key={index} container direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 1, ml: 2 }}>
            <Grid item alignContent={"center"} justifyContent={"center"}>
              <Skeleton variant="rectangular" width={345} height={140} />
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Grid>
          </Grid>
        ))
      }
    </>
  );
}
export default CartLayoutLoading
