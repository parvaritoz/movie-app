import axios from "axios";
import { Movie } from "../utils/Type";

export async function searchMovies(query: string): Promise<Movie[]> {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/search/movie`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        query,
      },
    }
  );

  return data.results.map((result: any) => ({
    id: result.id,
    title: result.title,
    poster_path: result.poster_path,
    release_date: result.release_date,
  }));
}
