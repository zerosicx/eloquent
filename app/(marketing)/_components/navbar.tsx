"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import React from "react";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div
      className={cn(
        "z-50 dark:bg-[#1f1f1f] bg-background fixed top-0 flex items-center w-full px-6 py-5",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner/>}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost"> Login </Button>
            </SignInButton>
             <SignInButton mode="modal">
              <Button variant="zerosicx"> Get Eloquent </Button>
            </SignInButton>
          </>
        )}
        {
          isAuthenticated && !isLoading && <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents" >
                Enter Eloquent
              </Link>
            </Button>
            <UserButton
              afterSignOutUrl="/"
            />
          </>
        }
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
