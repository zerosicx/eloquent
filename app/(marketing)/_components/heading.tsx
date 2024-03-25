"use client"; // Prevents serverside rendering
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
// Because actions will be attached to buttons

import React from "react";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        The rest is still unwritten. Welcome to{" "}
        <span className="underline">Eloquent</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Minimal note taking for maximum productivity.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg"></Spinner>
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <>
          <Button variant="zerosicx" asChild>
            <Link href="/documents">
              Enter Eloquent
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </>
      )}
      {!isAuthenticated && !isLoading && (
        <>
          <SignInButton mode="modal">
            <Button variant="zerosicx"> Get Eloquent </Button>
          </SignInButton>
        </>
      )}
    </div>
  );
};

export default Heading;
