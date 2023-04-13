import Head from "next/head";
import { useEffect, useState } from "react";
import GenreList from "../components/Genre/MovieList";
import GenreCard from "../components/Genre/GenreCard";

export default function Discover() {
  const [genres, setGenres] = useState([] as any[]);
  const [filter, setFilter] = useState([] as any[]);
  const [movies, setMovies] = useState([] as any[]);
  const [clickedText, setClickedText] = useState("");

  async function fetchMovies() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
    );
    const data = await response.json();
    setMovies(data.results);
  }

  /**
   * This function fetch the genre data from TMDB API
   * @returns genres
   */
  async function fetchGenre() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    );
    const data = await response.json();

    setGenres(data.genres);
  }

  useEffect(() => {
    fetchGenre();
    fetchMovies();
  }, []);

  const handleInput = (text: string) => {
    const filter = movies.filter((movie) => movie.genre_ids.includes(text));
    setFilter(filter);
    setClickedText(text.toString());
  };

  {
    return (
      <>
        <Head>
          <title>Movie App - Discover</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex flex-row overflow-scroll text-white">
          {genres.map((genre, index: number) =>
            genre.id === parseInt(clickedText) ? (
              <GenreCard
                key={index}
                genre={genre}
                onClick={(text) => handleInput(text)}
                pressed={true}
              />
            ) : (
              <GenreCard
                key={index}
                genre={genre}
                onClick={(text) => handleInput(text)}
                pressed={false}
              />
            )
          )}
        </div>
        {!filter && <p className="text-white">finns inte</p>}
        <GenreList genre={clickedText.length > 0 ? filter : movies} />
      </>
    );
  }
}
