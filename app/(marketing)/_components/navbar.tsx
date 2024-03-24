"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
    
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      Navbar
    </div>
  );
};

export default Navbar;
