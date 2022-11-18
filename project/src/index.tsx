import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { ToastContainer } from 'react-toastify';
import { reviewsMock } from './mock/reviews';
import { store } from './store';
import { checkAuthAction, fetchFilmAction } from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';

const PromoFilm = {
  Title: 'The Grand Budapest Hotel',
  Genre: 'Drama',
  Year: 2014,
} as const;

store.dispatch(fetchFilmAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App
        title={PromoFilm.Title}
        genre={PromoFilm.Genre}
        year={PromoFilm.Year}
        reviews={reviewsMock}
      />
    </Provider>
  </React.StrictMode>,
);
