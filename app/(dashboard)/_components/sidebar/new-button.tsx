"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { Hint } from "../hint";

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint label={"Create"} side="right" align="start" sideOffset={18}>
            <button className="bg-white/25 w-full h-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition ">
              <Plus className="text-white"></Plus>
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent>
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};
