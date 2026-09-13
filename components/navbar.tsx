"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Button from "@/components/styledButton";
import profile from "@/public/images/wr.png";
import { logout } from "../app/login/actions";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type navbarProps = React.HTMLAttributes<HTMLDivElement>;

export default function Navbar({ className, ...props }: navbarProps) {
  const pathname = usePathname();
  return (
    <div
      {...props}
      className={cn(
        "flex flex-row gap-8 w-full items-center bg-rose-600 px-8 border border-neutral-800",
        className,
      )}
    >
      <h1 className="relative tracking-tight font-sans text-3xl font-extrabold m-4">
        Spell Chess
      </h1>

      {/* Navigation Buttons */}
      <Link href={"/home"} className="ml-auto">
        <Button
          size="md"
          className={`rounded-full px-5 py-2 cursor-pointer bg-rose-600 hover:bg-rose-700 transition ${
            pathname === "/home" ? "underline underline-offset-1" : ""
          }`}
        >
          Home
        </Button>
      </Link>

      <Link href={"/play"}>
        <Button
          size="md"
          className={`rounded-full px-5 py-2 cursor-pointer bg-rose-600 hover:bg-rose-700 transition ${
            pathname === "/play" ? "underline underline-offset-1" : ""
          }`}
        >
          Play
        </Button>
      </Link>
      <Link href={"/archive"}>
        <Button
          size="md"
          className={`rounded-full px-5 py-2 cursor-pointer bg-rose-600 hover:bg-rose-700 transition ${
            pathname === "/archive" ? "underline underline-offset-1" : ""
          }`}
        >
          Archive
        </Button>
      </Link>
      <Link href={"/settings"}>
        <Button
          size="md"
          className={`rounded-full px-5 py-2 cursor-pointer bg-rose-600 hover:bg-rose-700 transition ${
            pathname === "/settings" ? "underline underline-offset-1" : ""
          }`}
        >
          Settings
        </Button>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <div className="w-12 h-12 rounded-full p-0 flex items-center justify-center bg-neutral-800 border border-neutral-700 ml-4 cursor-pointer hover:border-neutral-500 transition">
            <Image
              className="h-10 w-10 object-cover rounded-full bg-neutral-800"
              src={profile}
              alt="Profile Pic"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-neutral-900 border-neutral-800 text-neutral-50 w-auto"
        >
          <DropdownMenuItem className="hover:bg-neutral-800 focus:bg-neutral-800 cursor-pointer transition-all duration-100">
            Profile Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-neutral-800 focus:bg-neutral-800 cursor-pointer transition-all duration-100">
            Home
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-neutral-800" />
          <DropdownMenuItem
            onClick={logout}
            className="text-rose-500 focus:text-rose-500 font-semibold hover:bg-neutral-800 focus:bg-neutral-800 cursor-pointer transition-all duration-100"
          >
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
