import { signIn } from "next-auth/react";
import prisma from "@/lib/prisma";

export async function authenticateUser(req, res) {
  const { googleUser, githubUser } = req.body;

  // Check if the user is logged in with Google or GitHub
  if (googleUser || githubUser) {
    // User is logged in with Google or GitHub
    // ...
  } else {
    // User is not logged in
    // Create a new guest user
    const guestUser = await prisma.user.create({
      data: {
        isGuest: true,
      },
    });

    // Log the user in
    await signIn("credentials", {
      email: guestUser.email,
      password: guestUser.password,
      callbackUrl: "/",
    });

    // Return the guest user
    return guestUser;
  }
}
