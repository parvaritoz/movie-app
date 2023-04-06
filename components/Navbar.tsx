import Link from "next/link";
import React from "react";
import { AiOutlineHome, AiOutlineGlobal } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center">
      <div className="items-center justify-center w-64">
        <p className="text-white justify-center flex text-3xl mt-2">Movies</p>
        <div className="flex flex-row items-center justify-between mt-2">
          <div className="items-center flex flex-row">
            <AiOutlineHome size={20} style={{ color: "white" }} />
            <Link href={"/"}>
              <p className="text-white ml-1">Home</p>
            </Link>
          </div>
          <div className="items-center flex flex-row">
            <AiOutlineGlobal size={20} style={{ color: "white" }} />
            <Link href={"/discover"}>
              <p className="text-white ml-1">Discover</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
