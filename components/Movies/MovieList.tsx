import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

{
  /** interface movieProps {
  data: {
    imgpath: string;
    name: string;
    date: string;
  }[];
}

export const getStaticProps: GetServerSideProps = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=d4b6eeaeee2a60922acbc3a48871ca17&language=en-US&page=1"
  );
  const data = await response.json();
  console.log(data.results);

  return {
    props: {
      data,
    },
  };
};*/
}

const API_REQUEST =
  "https://api.themoviedb.org/3/movie/popular?api_key=d4b6eeaeee2a60922acbc3a48871ca17&language=en-US&page=1";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const getingMovies = async () => {
    fetch(API_REQUEST)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getingMovies();
  }, []);

  {
    return (
      <div>
        <h1 className="text-white mt-4 mb-4 text-3xl">What is Popular</h1>
        <div className="flex flex-row overflow-scroll text-white">
          {movies.map((movie, dataKey) => (
            <MovieCard key={dataKey} {...movie} />
          ))}
        </div>
      </div>
    );
  }
};
export default MovieList;
