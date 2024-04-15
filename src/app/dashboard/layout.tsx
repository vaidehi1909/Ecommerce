import AppBar from "@/components/AppBar";
import { getUser } from "@/lib";

const DashboardLayout = async ({ children }: {
  children: React.ReactNode;
}) => {
  const user = await getUser();
  return (
    <>
      <AppBar user={user} />
      {children}
    </>
  );
}

export default DashboardLayout
