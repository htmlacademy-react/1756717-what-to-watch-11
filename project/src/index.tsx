import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { filmsMock } from './mocks/films';
import { reviewsMock } from './mocks/reviews';

const PromoFilm = {
  Title: 'The Grand Budapest Hotel',
  Genre: 'Drama',
  Year: 2014,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      title={PromoFilm.Title}
      genre={PromoFilm.Genre}
      year={PromoFilm.Year}
      films={filmsMock}
      reviews={reviewsMock}
    />
  </React.StrictMode>,
);
