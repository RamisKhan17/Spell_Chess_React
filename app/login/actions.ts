"use server";

import { z } from "zod";
import clientPromise from "@/lib/db";
import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

const loginSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username should be at least 3 characters" })
    .trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

export async function login(_prevState: unknown, formData: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    const fieldErrors = z.flattenError(result.error).fieldErrors;
    const errorMessage =
      fieldErrors.username?.[0] ||
      fieldErrors.password?.[0] ||
      "Invalid input provided";
    return { error: errorMessage };
  }

  const { username, password } = result.data;

  try {
    const client = await clientPromise;
    const db = client.db("spell-chess");
    const user = await db.collection("users").findOne({ username });

    if (!user) {
      return { error: "Invalid username or password" };
    }

    const passwordsMatch = await bcrypt.compare(password, user.password);
    if (!passwordsMatch) {
      return { error: "Invalid username or password" };
    }

    await createSession(user._id.toString(), username);
  } catch (error) {
    console.error("Database error", error);
    return { error: "An error occurred while logging in. Please try again." };
  }

  redirect("/home");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
