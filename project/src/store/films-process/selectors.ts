import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getGenre = (state: State): string => state[NameSpace.Films].genre;

export const getFilmsAmount = (state: State): number => state[NameSpace.Films].filmsPerStep;
