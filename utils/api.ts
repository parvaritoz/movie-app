import axios from "axios";
import { Movie } from "../utils/Type";
import { API_KEY, API_URL } from "@/config/config";

export async function searchMovies(query: string): Promise<Movie[]> {
  const { data } = await axios.get(`${API_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });

  return data.results.map((result: any) => ({
    id: result.id,
    title: result.title,
    poster_path: result.poster_path,
    release_date: result.release_date,
  }));
}
