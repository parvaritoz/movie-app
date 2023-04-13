import MovieCard from "@/components/Movies/MovieCard";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { searchMovies } from "../utils/api";
import { Movie } from "../utils/Type";

export default function SearchResultsPage() {
  const router = useRouter();
  const { query } = router.query;
  const [results, setResults] = useState<Movie[]>([]);

  useEffect(() => {
    const search = async () => {
      if (query && typeof query === "string") {
        const movies = await searchMovies(query);
        setResults(movies);
      }
    };
    search();
  }, [query]);

  if (results.length === 0) {
    return (
      <div className="flex justify-center mt-10">
        <p className="text-white text-2xl">
          No results found for `&apos;`{query}`&apos;`
        </p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Movie App - Search</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <h1 className="text-white mt-4 mb-4 text-3xl">
            Search Results for `&apos;`{query}`&apos;`
          </h1>
          <div className="flex flex-row overflow-scroll text-white">
            {results.map((movie, key) => (
              <MovieCard key={key} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
