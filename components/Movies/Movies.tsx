import MovieList from "../Genre/MovieList";

interface MovieListProps {
  topRated_movies: any;
  popular_movies: any;
}

const Movies = ({ popular_movies, topRated_movies }: MovieListProps) => {
  {
    return (
      <>
        <div>
          <h1 className="text-white mt-4 mb-4 text-3xl">What is Popular</h1>
          <MovieList genre={popular_movies} />
        </div>

        <div>
          <h1 className="text-white mt-4 mb-4 text-3xl">Top Rated</h1>
          <MovieList genre={topRated_movies} />
        </div>
      </>
    );
  }
};

export default Movies;
