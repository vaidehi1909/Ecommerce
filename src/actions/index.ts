"use server"
import { EXPIRES_IN, encrypt } from "@/lib";
import { cookies } from "next/headers";
import axios from "axios";
import { redirect } from "next/navigation";
import { User } from "@/types/user";

export async function loginAction(formData: FormData) {
  // Verify credentials && get the user
  let user = null;
  try {
    const users = await axios.get("https://fakestoreapi.com/users").then(res => res.data)
    user = users.find((user: User) => user.email === formData.get("email")
      && user.password === formData.get("password")
    );
    if (!user) return { error: "Invalid credentials" };
    // Create the session
    const expires = new Date(Date.now() + EXPIRES_IN);
    const session = await encrypt({ user, expires });

    // Save the session in a cookie
    cookies().set("session", session, { expires, httpOnly: true });
  } catch (error: any) {
    console.error(error, 'loginAction...');
    return { error: error?.message || "Something went wrong" };
  }
  if (user)
    redirect("/dashboard")

}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
  redirect("/")
}
