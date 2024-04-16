import React from "react";
import AppBar from "@/components/AppBar";
import { getUser } from "@/lib";
import ProductCategory from "@/components/ProductCategory";
import Cart from "@/components/Cart";
import Setting from "@/components/Setting";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser();
  return (
    <>
      <AppBar>
        <ProductCategory />
        <Cart />
        <Setting user={user} />
      </AppBar>
      {children}
    </>
  );
};

export default DashboardLayout;
