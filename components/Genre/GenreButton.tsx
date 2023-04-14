import { Genre } from "../../utils/Type";

type GenreProps = {
  genre: Genre;
  onClick: (text: string) => void;
  pressed: boolean;
};

/**
 * This function handles the genre button in discover page
 * @param param0 genre, onclick and boolean for checking status when pressed.
 * @returns Button for each genre
 */
export default function GenreButton({ genre, onClick, pressed }: GenreProps) {
  return (
    <div className="flex flex-col hover:cursor-pointer mt-8 ">
      <button
        className={`p-2 mx-1 rounded-2xl border border-white hover:bg-white whitespace-nowrap hover:text-black ${
          pressed ? "bg-white text-black" : "bg-gray-900 text-white"
        }`}
        onClick={() => onClick(genre.id)}
        value={genre.name}
      >
        {genre.name}
      </button>
    </div>
  );
}
