import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';

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
      <main style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 className="page-title" style={{ marginBottom: '50px' }}>404. Page not found</h1>
        <Link to="/" style={{ textAlign: 'center', color: '#dfcf77' }}>Back to the main page</Link>
      </main>
    </div>
  );
}

export default NotFoundScreen;
