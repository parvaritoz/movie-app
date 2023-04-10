import { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

export default function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (query.trim() === "") {
      return;
    }

    await router.push(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <div className="rounded-2xl bg-white mt-4 md:mt-0">
      <form className="flex flex-row items-center" onSubmit={handleSubmit}>
        <Link href="/search">
          <AiOutlineSearch size={27} className="ml-2" type={"submit"} />
        </Link>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="rounded-2xl p-1 outline-none w-[82%]"
          placeholder="Search for a movie..."
        />
      </form>
    </div>
  );
}
