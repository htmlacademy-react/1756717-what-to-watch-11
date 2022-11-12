import { FilmSettings } from './const';
import { Films } from './types/films';

export const getFormatPlayerTime = (time: number) => {
  if (time >= 60) {
    const hours = Math.floor(time / 60);
    const minutes = time - hours * 60;
    return `-${hours}:${minutes}:00`;
  } else {
    return `-${time}:00`;
  }
};

export const getFormatDetailsFilmRunTime = (time: number) => {
  if (time >= 60) {
    const hours = Math.floor(time / 60);
    const minutes = time - hours * 60;
    return `${hours}h ${minutes}m`;
  } else {
    return `${time}m`;
  }
};

export const getRatingLevel = (rating: number) => {
  if (rating > 0 && rating < 3) {
    return 'Bad';
  } else if (rating >= 3 && rating < 5) {
    return 'Normal';
  } else if (rating >= 5 && rating < 8) {
    return 'Good';
  } else if (rating >= 8 && rating < 10) {
    return 'Very good';
  } else {
    return 'Awesome';
  }
};

export const getColumnList = (arr: string[]) => arr.join(', \n');

export const getRowList = (arr: string[]) => arr.join(', ');

export const getFormatReviewDate = (date: string) => new Date(date).toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' });

export const getFilmsSelectedByGenre = (films: Films, genre: string) => {
  if (genre === FilmSettings.DefaultFilterGenre) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};

export const getGenres = (films: Films): string[] => {
  const genres = new Set(films.map((film) => film.genre));
  return [FilmSettings.DefaultFilterGenre as string, ...genres];
};
