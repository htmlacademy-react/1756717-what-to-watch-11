type Film = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: [string];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
};

type Films = Film[];

type WelcomeScreenProps = {
  title: string;
  genre: string;
  year: number;
}

type FilmCardProps = {
  src: string;
  alt: string;
  filmTitle: string;
}


export type { Film, Films, WelcomeScreenProps, FilmCardProps};
