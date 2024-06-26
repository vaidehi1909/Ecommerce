import React from "react";
import axios from "axios";
import { getUser } from "@/lib";
import ProductDetails from "@/components/ProductDetails";

const fetchProduct = async (id: string) => {
  try {
    const res = await axios(`https://fakestoreapi.com/products/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error
  }

};

const DashboardPage = async ({ params }: { params: { id: string } }) => {
  const user = await getUser();
  const product = await fetchProduct(params.id);
  return (
    <ProductDetails product={product} user={user} />
  );
};

export default DashboardPage;
