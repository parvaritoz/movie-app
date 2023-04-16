import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineHome, AiOutlineGlobal } from "react-icons/ai";
import Search from "./Search";

/**
 * This function handles the navbar component which contains home, discover and search bar
 * @returns Navbar
 */
export default function Navbar() {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center">
        <p className="text-white text-3xl mt-2">Movies</p>
      </div>
      <div className="mr-5 ml-5 flex flex-col md:flex-row md:justify-between justify-center items-center mt-4">
        <div className="flex flex-row items-center justify-between w-64 mt-2 md:mt-0">
          <div className="items-center flex flex-row">
            <AiOutlineHome size={20} style={{ color: "white" }} />
            <Link
              href={"/"}
              className={
                router.pathname == "/"
                  ? "underline decoration-slate-200"
                  : "hover:underline decoration-slate-200"
              }
            >
              <p className="text-white ml-1">Home</p>
            </Link>
          </div>
          <div className="items-center flex flex-row">
            <AiOutlineGlobal size={20} style={{ color: "white" }} />
            <Link
              href={"/discover"}
              className={
                router.pathname == "/discover"
                  ? "underline decoration-slate-200"
                  : "hover:underline decoration-slate-200"
              }
            >
              <p className="text-white ml-1">Discover</p>
            </Link>
          </div>
        </div>
        <div className="w-64 mt-2 md:mt-0">
          <Search />
        </div>
      </div>
    </>
  );
}
