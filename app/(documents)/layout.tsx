"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import SideBar from "../_components/Navigation";
import { DocumentNavigation } from "./_components/DocumentNavigation";

// We need to use the `use client` key words when we use hooks. This allows us to hook out of server components.
// Serverside rendering is generally preferred. Working with a real-time database shines when using client components.
// Client components are not a mistake or an anti-pattern.
// Heavily realtime = lots of client components.

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  // We are doing this method of rendering as layout components should not have any complex code/interface features.
  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="h-full flex dark:bg-[#1f1f1f]">
      <SideBar />
      <DocumentNavigation />
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
