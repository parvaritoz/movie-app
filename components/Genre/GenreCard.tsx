import { Genre } from "../../utils/Type";

type GenreProps = {
  genre: Genre;
  onClick: (text: string) => void;
  pressed: boolean;
};

export default function GenreCard({ genre, onClick, pressed }: GenreProps) {
  return (
    <div className="flex flex-col hover:cursor-pointer mt-8 ">
      <button
        className={`p-2 mx-1 rounded-2xl border border-white hover:bg-white text-white whitespace-nowrap hover:text-black ${
          pressed ? "bg-white text-black" : "bg-gray-900"
        }`}
        onClick={() => onClick(genre.id)}
        value={genre.name}
      >
        {genre.name}
      </button>
    </div>
  );
}
