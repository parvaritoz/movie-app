import MovieCard from "../Movies/MovieCard";

interface GenreProps {
  genre: any;
}

export default function MovieList({ genre }: GenreProps) {
  return (
    <>
      <div>
        <div className="grid grid-cols-2 gap-2 flex-row md:flex overflow-scroll mt-4">
          {genre.map((movies: any, index: number) => (
            <MovieCard key={index} movie={movies} />
          ))}
        </div>
      </div>
    </>
  );
}
