import Head from "next/head";
import { useState, useEffect } from "react";
import Movies from "@/components/Movies/Movies";

export default function IndexPage() {
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([] as any[]);
  const [topMovies, setTopMovies] = useState([] as any[]);
  /**
   * This function fetch the data from TMDB API
   * @param type poular or top_rated
   * @returns An array of objects
   */

  async function fetchMovies() {
    const response_popular = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
    );

    const response_topRated = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
    );
    const data_popular = await response_popular.json();
    const data_topRated = await response_topRated.json();
    setPopularMovies(data_popular.results);
    setTopMovies(data_topRated.results);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Movies popular_movies={popularMovies} topRated_movies={topMovies} />
    </>
  );
}
