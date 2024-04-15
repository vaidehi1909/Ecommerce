import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../reducers/userSlice";
import { User } from "@/types/user";

export const useAuth = () => {
  const user: User | null = useSelector(getUser);

  return useMemo(() => ({ user }), [user]);
};
