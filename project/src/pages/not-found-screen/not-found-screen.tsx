import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import './not-found-screen.css';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">
      <Helmet>
        <title>WTW. Page not found</title>
      </Helmet>
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo />
        </div>
      </header>
      <main>
        <h1 className="page-title">404. Page not found</h1>
        <Link className="link" to="/">Back to the main page</Link>
      </main>
    </div>
  );
}

export default NotFoundScreen;
