"use client";

import { SideBar } from "@/app/_components/SideBar";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { PlusCircle } from "lucide-react";
import DocumentActions from "./DocumentActions";

export const DocumentNavigation = () => {
  const documents = useQuery(api.documents.get);

  return (
    <>
      <SideBar>
        <DocumentActions
          onClick={() => {}}
          label="New Page"
          icon={PlusCircle}
        />
        <div className="mt-4">
          {documents?.map((document) => {
            return <p key={document._id}> {document.title}</p>;
          })}
        </div>
      </SideBar>
    </>
  );
};
