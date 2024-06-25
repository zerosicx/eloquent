"use client";

import { api } from "@/convex/_generated/api";
import { useSearch } from "@/hooks/use-search";
import { useUser } from "@clerk/clerk-react";
import { CommandEmpty, CommandList } from "cmdk";
import { useQuery } from "convex/react";
import { File } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";

type Props = {};

const SearchCommand = (props: Props) => {
  const { user } = useUser();
  const router = useRouter();
  const documents = useQuery(api.documents.getSearch);
  const [isMounted, setIsMounted] = useState(false);

  const toggle = useSearch((store) => store.toggle);
  const isOpen = useSearch((store) => store.isOpen);
  const onClose = useSearch((store) => store.onClose);

  // This is being added to avoid hydration errors on the front end, caused by dynamic dialogs.
  // Shadcn's Command uses dialog in the bg. Even though it's marked as 'use client', nextJS will try to do SSR first.
  // Dialogs which can appear dynamically (eg. from a keyboard shortcut) can cause hydration errors if the component
  // is not mounted first (does not exist in server side, but exists in client side).
  // Workaround: prevent it from being rendered on the serverside.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // The callback function that handles a keyboard event for both mac and windows
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };

    // Event listeners are added when components are mounted.
    document.addEventListener("keydown", down);

    // On unmount, remove the event listener
    return () => document.removeEventListener("keydown", down);
  }, [toggle]);

  const onSelect = (id: string) => {
    router.push(`/documents/${id}`);
    onClose();
  };

  if (!isMounted) {
    return null;
  }

  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <CommandInput
        placeholder={`Search ${user?.fullName}'s Eloquent Documents`}
      />
      <CommandList>
        <CommandEmpty>No results found</CommandEmpty>
        <CommandGroup heading="Documents">
          {documents?.map((document) => (
            <CommandItem
              key={document._id}
              value={`${document._id}-${document.title}`}
              title={document.title}
              onSelect={onSelect} // Passes the value because it has been set in the command item!
            >
              {document.icon ? (
                <p className="mr-2 text-18px">{document.icon}</p>
              ) : (
                <File className="mr-2 h-4 w-4" />
              )}
              <span>{document.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default SearchCommand;
