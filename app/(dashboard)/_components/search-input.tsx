"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { useEffect } from "react";
import { useDebounceValue } from "usehooks-ts";

export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useDebounceValue("", 500);

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: value,
        },
      },
      {
        skipNull: true,
        skipEmptyString: true,
      }
    );

    router.push(url);
  }, [value, router]);

  return (
    <>
      <div className="w-full relative">
        <Search className="absolute top-1/2 transform -translate-y-1/2 left-3 text-muted-foreground h-4 w-4" />
        <Input
          className="w-full max-w-[516px] pl-9"
          placeholder="Search boards"
          onChange={(event) => setValue(event.target.value)}
          defaultValue={value}
        />
      </div>
    </>
  );
};
