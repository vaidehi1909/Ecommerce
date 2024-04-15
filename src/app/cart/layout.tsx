import React, { Suspense } from "react";
import AppBar from "@/components/AppBar";
import { getUser } from "@/lib";

const CartLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppBar user={user} showCategory={false} />
      {children}
    </Suspense>
  );
};

export default CartLayout;
