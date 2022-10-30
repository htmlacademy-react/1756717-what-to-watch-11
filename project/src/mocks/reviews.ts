import { Reviews } from '../types/types';

export const reviewsMock: Reviews = [
  {
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
    date: 'Fri Oct 28 2022 19:42:35 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 8.9,
    user: {
      id: 4,
      name: 'Kate Muir'
    }
  },
  {
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'Fri Oct 27 2022 19:42:35 GMT+0300 (Москва, стандартное время)',
    id: 2,
    rating: 8.1,
    user: {
      id: 5,
      name: 'Michael Smith'
    }
  },
];
