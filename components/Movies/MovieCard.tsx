import React from "react";

const getImgULR = (path: string) => {
  return `https://www.themoviedb.org/t/p/w440_and_h660_face${path}`;
};

interface movieCardProps {
  poster_path: string;
  original_title: string;
  release_date: string;
}

const MovieCard = ({
  poster_path,
  original_title,
  release_date,
}: movieCardProps) => {
  return (
    <>
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-[200px] h-[325px] md:w-[300px] md:h-[450px] relative mr-4">
          <div className="absolute z-0 hover:opacity-20">
            <img
              src={getImgULR(poster_path)}
              alt="imgPath"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center h-full">
            <div className="flex justify-center items-center">
              <h1 className="text-white text-md md:text-lg">
                {original_title}
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="items-end text-white text-md">{release_date}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
