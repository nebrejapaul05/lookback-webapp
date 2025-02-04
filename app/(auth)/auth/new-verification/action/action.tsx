"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/lib/user";

export const newVerification = async (token: string) => {
  console.log(token)
  const existingToken = await db.verificationToken.findFirst({
    where: { token },
  });

  console.log(existingToken);

  if (!existingToken) {
    return { error: "Token does not exist!" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exist!" };
  }

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email, //for changing their email
    },
  });

  await db.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Email verified!" };
};
