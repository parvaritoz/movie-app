export type Movie = {
  id: number;
  original_title?: string;
  title?: string;
  backdrop_path?: string;
  poster_path?: string;
  release_date: string;
  overview: string;
};

export type Genre = {
  id: string;
  name: string;
};
