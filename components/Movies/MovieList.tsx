import MovieCard from "./MovieCard";
import { Movie } from "../../utils/Type";

interface props {
  topRated_movies: any;
  popular_movies: any;
}

const MovieLists = ({ popular_movies, topRated_movies }: props) => {
  {
    return (
      <>
        <div>
          <h1 className="text-white mt-4 mb-4 text-3xl">What is Popular</h1>
          <div className="flex flex-row overflow-scroll text-white">
            {popular_movies.map((movies: any, key: string) => (
              <MovieCard key={key} movie={movies} />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-white mt-4 mb-4 text-3xl">Top Rated</h1>
          <div className="flex flex-row overflow-scroll text-white rounded-sm">
            {topRated_movies.map((movies: any, key: string) => (
              <MovieCard key={key} movie={movies} />
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default MovieLists;
