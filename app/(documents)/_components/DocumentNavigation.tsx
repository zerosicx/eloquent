"use client";

import { SideBar } from "@/app/_components/SideBar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { api } from "@/convex/_generated/api";
import { useSearch } from "@/hooks/use-search";
import { useMutation } from "convex/react";
import { Plus, PlusCircle, Search, Settings, Trash } from "lucide-react";
import { toast } from "sonner";
import { useMediaQuery } from "usehooks-ts";
import DocNavItem from "./DocNavItem";
import DocumentList from "./DocumentList";
import TrashBox from "./TrashBox";

export const DocumentNavigation = () => {
  const search = useSearch();
  const isMobile = useMediaQuery("(max-width: 768px)");
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
        <DocNavItem
          onClick={search.onOpen}
          label="Search"
          icon={Search}
          isSearch
        />
        <div className="mt-4">
          <DocumentList />
          <DocNavItem
            onClick={handleNewPageClick}
            label={"Add a page"}
            icon={Plus}
          />
          <Popover>
            <PopoverTrigger className="w-full mt-4">
              <DocNavItem label="Trash" icon={Trash} />
            </PopoverTrigger>
            <PopoverContent
              className="p-0 w-72"
              side={isMobile ? "bottom" : "right"}
            >
              <TrashBox />
            </PopoverContent>
          </Popover>
        </div>
      </SideBar>
    </>
  );
};
