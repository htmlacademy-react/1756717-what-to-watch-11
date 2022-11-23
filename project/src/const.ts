export const PLAYER_DELAY = 1000;

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films',
  AddReview = '/review',
  Player = '/player',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum TabValue {
  Overview = 'overview',
  Details = 'details',
  Reviews = 'reviews',
}

export enum FilmSettings {
  MaxSimilarFilmsAmount = 4,
  DefaultFilterGenre = 'All genre',
  FilmsPerStep = 8,
}

