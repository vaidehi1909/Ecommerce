import React, { Suspense } from "react";
import Dashboard from "@/components/Dashboard";
import Container from "@mui/material/Container";
import axios from "axios";

const fetchProducts = async () => {
  try {
    const res = await axios("https://fakestoreapi.com/products");
    return res.data;
  } catch (error) {
    console.error(error);
    throw error
  }

};

const DashboardPage = async () => {
  const products = await fetchProducts();
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard products={products} />
      </Suspense>
    </Container>
  );
};

export default DashboardPage;
