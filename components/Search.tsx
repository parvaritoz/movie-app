import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Search() {
  return (
    <div className="rounded-2xl bg-white mt-4">
      <div className="flex flex-row items-center">
        <Link href={""}>
          <AiOutlineSearch size={30} className="ml-2" />
        </Link>
        <input
          className="w-full rounded-2xl p-2 outline-none"
          placeholder="Search movie titles..."
        />
      </div>
    </div>
  );
}
