import { Movie } from "@/utils/Type";
import { useRouter } from "next/router";

const getImgULR = (path: string) => {
  return `https://www.themoviedb.org/t/p/w440_and_h660_face${path}`;
};

type MovieDetailsProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieDetailsProps) => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log("Movie ID: ", movie.id);
    console.log("Movie Title: ", movie.original_title);
    console.log("Overview: ", movie.overview);
    console.log("Date: ", movie.release_date);
    // Add your code to handle the click event here
  };

  return (
    <>
      <div className="flex flex-col md:flex-row h-full">
        <div
          className="w-[200px] h-[325px] md:w-[250px] md:h-[375px] relative mr-4"
          onClick={handleClick}
        >
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
                {movie.original_title}
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="items-end text-white text-md">
                {movie.release_date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
