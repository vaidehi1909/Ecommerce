import React from "react";
import AppBar from "@/components/AppBar";
import { getUser } from "@/lib";
import Setting from "@/components/Setting";
import Cart from "@/components/Cart";

const PageLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser();
  return (
    <>
      <AppBar>
        <Cart />
        <Setting user={user} />
      </AppBar>
      {children}
    </>
  );
};

export default PageLayout;
