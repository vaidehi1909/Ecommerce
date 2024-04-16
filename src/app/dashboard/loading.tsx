import { Grid, Box, Skeleton } from '@mui/material';

const DashboardLayoutLoading = () => {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {
        Array.from({ length: 8 }).map((_, index) => (
          <Grid item xs={6} md={4} lg={3} key={index}>
            <Skeleton variant="rectangular" width={"100%"} height={140} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))
      }
    </Grid>
  );
}
export default DashboardLayoutLoading
