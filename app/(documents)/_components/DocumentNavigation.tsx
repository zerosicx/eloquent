"use client";

import { SideBar } from "@/app/_components/SideBar";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { File, PlusCircle, Search, Settings } from "lucide-react";
import { toast } from "sonner";
import DocNavItem from "./DocNavItem";

export const DocumentNavigation = () => {
  const documents = useQuery(api.documents.get);
  const create = useMutation(api.documents.create);

  const handleNewPageClick = () => {
    const promise = create({
      title: "Untitled",
    });

    toast.promise(promise, {
      loading: "Creating a new document...",
      success: "New document created!",
      error: "Failed to create a new document",
    });
  };

  return (
    <>
      <SideBar>
        <DocNavItem onClick={() => {}} label="Settings" icon={Settings} />
        <DocNavItem
          onClick={() => {
            handleNewPageClick();
          }}
          label="New Page"
          icon={PlusCircle}
        />
        <DocNavItem onClick={() => {}} label="Search" icon={Search} isSearch />
        <div className="mt-4">
          {documents?.map((document) => {
            // return <p key={document._id}> {document.title}</p>;
            return (
              <DocNavItem
                documentIcon="📄"
                icon={File}
                key={document._id}
                label={document.title}
                onClick={() => {}}
              />
            );
          })}
        </div>
      </SideBar>
    </>
  );
};
