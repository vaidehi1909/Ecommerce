import AppBar from "@/components/AppBar";
import { getUser } from "@/lib";

const CartLayout = async ({ children }: {
  children: React.ReactNode;
}) => {
  const user = await getUser();
  return (
    <>
      <AppBar user={user} showCategory={false} />
      {children}
    </>
  );
}

export default CartLayout
