import { changeGenre, filmsProcess, resetFilmsInListAmount, setFilmsInListAmount } from './films-process';

describe('Reducer: filmsProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmsProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({ genre: 'All genre', filmsPerStep: 8 });
  });

  it('should change genre', () => {
    const state = { genre: 'All genre', filmsPerStep: 8 };
    expect(filmsProcess.reducer(state, changeGenre('Drama')))
      .toEqual({ genre: 'Drama', filmsPerStep: 8 });
  });

  it('should increase films\' amount by step', () => {
    expect(filmsProcess.reducer({ genre: 'All genre', filmsPerStep: 8 }, setFilmsInListAmount()))
      .toEqual({ genre: 'All genre', filmsPerStep: 16 });
    expect(filmsProcess.reducer({ genre: 'All genre', filmsPerStep: 16 }, setFilmsInListAmount()))
      .toEqual({ genre: 'All genre', filmsPerStep: 24 });
  });

  it('should have reset films\' amount', () => {
    expect(filmsProcess.reducer({ genre: 'All genre', filmsPerStep: 16 }, resetFilmsInListAmount()))
      .toEqual({ genre: 'All genre', filmsPerStep: 8 });

    expect(filmsProcess.reducer({ genre: 'All genre', filmsPerStep: 24 }, resetFilmsInListAmount()))
      .toEqual({ genre: 'All genre', filmsPerStep: 8 });

    expect(filmsProcess.reducer({ genre: 'All genre', filmsPerStep: 8 }, resetFilmsInListAmount()))
      .toEqual({ genre: 'All genre', filmsPerStep: 8 });
  });
});
