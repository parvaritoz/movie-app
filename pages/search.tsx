import MovieCard from "@/components/Movies/MovieCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { searchMovies } from "../utils/api";
import { Movie } from "../utils/Type";

interface Props {}

export default function SearchResultsPage(props: Props) {
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
        <p className="text-white text-2xl">No results found for "{query}"</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1 className="text-white mt-4 mb-4 text-3xl">
          Search Results for "{query}"
        </h1>
        <div className="flex flex-row overflow-scroll text-white">
          {results.map((movie, key) => (
            <MovieCard key={key} movie={movie} />
          ))}
        </div>
      </div>
      {/**{results.map((movie) => (
        <div key={movie.id}>
         <Link href={`/movie/${movie.id}`}>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                alt={movie.original_title}
                width={185}
                height={278}
              />
            )}
            <h2>{movie.original_title}</h2>
            <p>{movie.release_date}</p>
          </Link>
        </div>
      ))}*/}
    </div>
  );
}
