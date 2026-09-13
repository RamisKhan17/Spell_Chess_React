"use client";
import { useActionState, useState } from "react";
import { login } from "./actions";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import Card from "@/components/card";
import Button from "@/components/styledButton";
import Link from "next/link";
export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, loginAction] = useActionState(login, undefined);
  return (
    <div className="flex flex-col h-screen w-full items-center justify-start bg-light-gray">
      <h1 className="font-sans text-7xl font-extrabold text-transparent bg-clip-text bg-rose-700 mt-10">
        Spell Chess
      </h1>

      <Card className="gap-4 w-80 m-10 hover:scale-100 hover:shadow-lg border-neutral-600">
        <h2 className="font-sans text-3xl font-extrabold text-transparent bg-clip-text bg-white">
          Login
        </h2>
        <form action={loginAction} className="flex flex-col gap-4 mt-3">
          {state?.error && (
            <div className="text-s text-rose-500 text-center rounded-md">
              {state.error}
            </div>
          )}

          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              className="w-full pl-10 pr-3 py-2 bg-neutral-800 border border-neutral-500 rounded-md focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500 transition-all duration-300 autofill:bg-neutral-800 "
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              className="w-full px-10 py-2 bg-neutral-800 border border-neutral-500 rounded-md focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500 transition-all duration-300"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          <Button size="md" className="w-full mt-2">
            Sign In
          </Button>
        </form>
        <Link href="/sign-up">
          <p className="w-full py-2 mt-2 text-transparent text-center bg-clip-text bg-neutral-500 hover:bg-neutral-300 underline underline-offset-1 cursor-pointer">
            Create a new account
          </p>
        </Link>
      </Card>
    </div>
  );
}
