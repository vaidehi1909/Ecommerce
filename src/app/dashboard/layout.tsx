import React, { Suspense } from "react";
import AppBar from "@/components/AppBar";
import { getUser } from "@/lib";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppBar user={user} />
      {children}
    </Suspense>
  );
};

export default DashboardLayout;
