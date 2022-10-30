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

type User = {
  id: number;
  name: string;
}

type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
};

type Reviews = Review[];

type WelcomeScreenProps = {
  title: string;
  genre: string;
  year: number;
  films: Films;
}

type FilmCardProps = {
  id: number;
  src: string;
  alt: string;
  filmTitle: string;
  isActive: boolean;
}

type FilmsListProps = {
  films: Films;
}

type AppScreenProps = {
  title: string;
  genre: string;
  year: number;
  films: Films;
}

type MyListScreenProps = {
  films: Films;
}

type PlayerScreenProps = {
  films: Films;
}

type ReviewScreenProps = {
  films: Films;
}

type MovieScreenProps = {
  films: Films;
}

type LogoProps = {
  light?: boolean;
}

type ReviewFormData = {
  rating: number;
  comment: string;
}

export type { Film, Films, WelcomeScreenProps, FilmCardProps, AppScreenProps, LogoProps, Reviews, FilmsListProps, MyListScreenProps, PlayerScreenProps, ReviewScreenProps, MovieScreenProps, ReviewFormData };
