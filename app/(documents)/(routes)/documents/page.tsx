"use client";
import React from 'react'
import Image from 'next/image'
import { useUser } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { PlusCircleIcon } from 'lucide-react';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';

type Props = {}

const DocumentsPage = (props: Props) => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" });
    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Unable to create new note :("
    })
  }

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image 
        src="/empty.svg"
        height="300"
        width="300"
        alt="empty"
        // className="dark:hidden"
      />
      {/* For when I have drawn the necessary image assets
      
      <Image 
        src="/empty.svg"
        height="300"
        width="300"
        alt="empty"
        className="hidden dark:block"
      /> */}
      <h2 className="text-lg font-medium">
        Welcome to { user?.firstName }&apos;s Eloquent
      </h2>
      <Button
        onClick={onCreate}
      >
        <PlusCircleIcon className="h-4 w-4 mr-2"/>
        Create a note
      </Button>
    </div>
  )
}

export default DocumentsPage