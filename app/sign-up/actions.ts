"use server";

import { z } from "zod";
import clientPromise from "@/lib/db";
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

export async function createAccount(_prevState: unknown, formData: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    const fieldErrors = z.flattenError(result.error).fieldErrors;
    // Grab the first validation error to return as a flat string
    const errorMessage =
      fieldErrors.username?.[0] ||
      fieldErrors.password?.[0] ||
      "Invalid input provided";
    return { error: errorMessage };
  }

  const { username, password } = result.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const client = await clientPromise;
    const db = client.db("spell-chess");
    const existingUser = await db.collection("users").findOne({ username });

    if (existingUser) {
      return { error: "This username is already taken" };
    }

    await db
      .collection("users")
      .insertOne({
        username: username,
        password: hashedPassword,
        rating: { rapid: 1200, blitz: 1200, bullet: 1200 },
      });

    return { message: "Account created successfully" };
  } catch (error) {
    console.error("Database error", error);
    return { error: "An error occurred. Try again later." };
  }
}
