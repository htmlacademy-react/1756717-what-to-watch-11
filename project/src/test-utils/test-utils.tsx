import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import HistoryRouter from '../components/history-route/history-route';
import browserHistory from '../browser-history';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { MockStore } from '@jedmao/redux-mock-store';

type mockStore = MockStore;

export const renderWithReduxAndHistoryRoater = (component: JSX.Element, store: mockStore, history: typeof browserHistory) => {
  render((
    <Provider store={store}>
      <HistoryRouter history={history}>
        {component}
      </HistoryRouter>
    </Provider>
  ));
};

export const renderWithReduxAndHistoryRoaterWithHelmet = (component: JSX.Element, store: mockStore, history: typeof browserHistory) => {
  render((
    <Provider store={store}>
      <HistoryRouter history={history}>
        <HelmetProvider>
          {component}
        </HelmetProvider>
      </HistoryRouter>
    </Provider>
  ));
};

export const renderWithHistoryRouter = (component: JSX.Element, history: typeof browserHistory) => {
  render((
    <HistoryRouter history={history}>
      {component}
    </HistoryRouter>
  ));
};

export const renderWithHistoryRouterAndHelmet = (component: JSX.Element, history: typeof browserHistory) => {
  render((
    <HistoryRouter history={history}>
      <HelmetProvider>
        {component}
      </HelmetProvider>
    </HistoryRouter>
  ));
};

export const renderWithHistoryRouterAndRoutes = (history: typeof browserHistory, path1: string, element1: JSX.Element, path2: string, element2: JSX.Element) => {
  render((
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path={path1}
          element={element1}
        />
        <Route
          path={path2}
          element={element2}
        />
      </Routes>
    </HistoryRouter>
  ));
};

export const renderWithHistoryRouterHelmetAndRoutes = (history: typeof browserHistory, path1: string, element1: JSX.Element, path2: string, element2: JSX.Element) => {
  render((
    <HistoryRouter history={history}>
      <HelmetProvider>
        <Routes>
          <Route
            path={path1}
            element={element1}
          />
          <Route
            path={path2}
            element={element2}
          />
        </Routes>
      </HelmetProvider>
    </HistoryRouter>
  ));
};

export const renderWithReduxHistoryRoaterAndRoutes = (store: mockStore, history: typeof browserHistory, path1: string, element1: JSX.Element, path2: string, element2: JSX.Element) => {
  render((
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route
            path={path1}
            element={element1}
          />
          <Route
            path={path2}
            element={element2}
          />
        </Routes>
      </HistoryRouter>
    </Provider>
  ));
};


export const renderWithReduxHistoryRoaterHelmetAndRoutes = (store: mockStore, history: typeof browserHistory, path1: string, element1: JSX.Element, path2: string, element2: JSX.Element) => {
  render((
    <Provider store={store}>
      <HistoryRouter history={history}>
        <HelmetProvider>
          <Routes>
            <Route
              path={path1}
              element={element1}
            />
            <Route
              path={path2}
              element={element2}
            />
          </Routes>
        </HelmetProvider>
      </HistoryRouter>
    </Provider>
  ));
};
