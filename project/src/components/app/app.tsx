import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';

type AppScreenProps = {
  title: string;
  genre: string;
  year: number;
}

function App({ title, genre, year }: AppScreenProps): JSX.Element {
  return (
    <WelcomeScreen
      title={title}
      genre={genre}
      year={year}
    />
  );
}

export default App;
