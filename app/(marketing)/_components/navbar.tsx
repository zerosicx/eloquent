"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import React from "react";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

type Props = {};

const Navbar = (props: Props) => {

  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 dark:bg-[#1f1f1f] bg-background fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <Button variant="zerosicx"> Login </Button>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
