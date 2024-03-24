"use client"; // Prevents serverside rendering
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
// Because actions will be attached to buttons

import React from "react";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        The rest is still unwritten. Welcome to{" "}
        <span className="underline">Eloquent</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Minimal note taking for maximum productivity.
      </h3>
      <Button variant="zerosicx">
        Enter Eloquent
        <ArrowRight className="h-4 w-4 ml-2"/>
      </Button>
    </div>
  );
};

export default Heading;
