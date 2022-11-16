import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import { reviewsMock } from './mock/reviews';
import { store } from './store';
import { fetchFilmAction } from './store/api-actions';

const PromoFilm = {
  Title: 'The Grand Budapest Hotel',
  Genre: 'Drama',
  Year: 2014,
} as const;

store.dispatch(fetchFilmAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        title={PromoFilm.Title}
        genre={PromoFilm.Genre}
        year={PromoFilm.Year}
        reviews={reviewsMock}
      />
    </Provider>
  </React.StrictMode>,
);
