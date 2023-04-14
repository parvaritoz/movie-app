import { useRouter } from "next/router";
import { Movie } from "../../utils/Type";

/**
 * This function handles detail page for each movie
 * @returns Detail page for each move
 */
export default function MovieDetails() {
  const router = useRouter();
  const data = router.query;
  console.log(data);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col mt-8">
      <h1 className="flex text-white text-2xl mb-4 justify-center">
        {data.original_title}
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-center items-center">
          <img
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face${
              data.backdrop_path ? data.backdrop_path : data.poster_path
            }`}
            alt={"IMG ADRESS: " + data.poster_path}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col md:ml-4 justify-center">
          <div className="flex flex-row justify-between items-center mt-5 md:mt-0">
            <p className="text-white text-lg flex justify-end">
              Releasse Date: {data.release_date}
            </p>
            <p className="text-white text-lg flex justify-end">
              Rating: {data.vote_average} ⭐️
            </p>
          </div>

          <div className="flex flex-row items-center justify-between mt-3 mb-3">
            <h2 className="text-white text-xl">Description:</h2>
          </div>
          <p className="mb-2 text-white text-lg">{data.overview}</p>
        </div>
      </div>
    </div>
  );
}
