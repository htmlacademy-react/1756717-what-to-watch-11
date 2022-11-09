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
  starring: string[];
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
  film: Film;
}

type FilmsListProps = {
  films: Films;
}

type AppScreenProps = {
  title: string;
  genre: string;
  year: number;
  films: Films;
  reviews: Reviews;
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
  reviews: Reviews;
}

type LogoProps = {
  light?: boolean;
}

type ReviewFormData = {
  rating: number;
  comment: string;
}

type VideoPlayerProps = {
  film: Film;
}

type FilmReviewProps = {
  review: Review;
}

type FilmTabOverViewProps = {
  film: Film;
}

type FilmTabDetailsProps = {
  film: Film;
}

type FilmTabReviewsProps = {
  reviews: Reviews;
}

type FilmTabsProps = {
  film: Film;
  reviews: Reviews;
}

export type { Film, Films, WelcomeScreenProps, FilmCardProps, AppScreenProps, LogoProps, Review, Reviews, FilmsListProps, MyListScreenProps, PlayerScreenProps, ReviewScreenProps, MovieScreenProps, ReviewFormData, VideoPlayerProps, FilmReviewProps, FilmTabOverViewProps, FilmTabDetailsProps, FilmTabReviewsProps, FilmTabsProps };
