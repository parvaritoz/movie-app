import { Movie } from "@/utils/Type";
import Link from "next/link";

const getImgULR = (path: string) => {
  return `https://www.themoviedb.org/t/p/w440_and_h660_face${path}`;
};

type MovieDetailsProps = {
  movie: Movie;
};

/**
 * This function handles the movie card that contain title, release date and poster for each movie.
 * @param param0 Movie
 * @returns A movie card
 */
const MovieCard = ({ movie }: MovieDetailsProps) => {
  return (
    <>
      <div className="h-full" key={movie.id}>
        <Link
          href={{
            pathname: `/movie/${movie.id}`,
            query: movie, // the data
          }}
        >
          <div className="w-[130px] h-[200px] md:w-[250px] md:h-[375px] relative mr-4">
            <div className="absolute z-0 hover:opacity-30">
              {movie.poster_path && (
                <img
                  src={getImgULR(movie.poster_path)}
                  alt="imgPath"
                  className="rounded-lg"
                />
              )}
            </div>
            <div className="flex flex-col justify-center h-full">
              <div className="flex justify-center items-center">
                <h1 className="text-white text-md md:text-lg">
                  {movie.original_title ? movie.original_title : movie.title}
                </h1>
              </div>
              <div className="flex justify-center">
                <p className="items-end text-white text-md">
                  {movie.release_date}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
