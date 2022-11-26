import { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { TabValue } from '../../const';
import { Reviews } from '../../types/reviews';
import { Film } from '../../types/films';
import FilmTabDetails from '../film-tab-details/film-tab-details';
import FilmTabOverview from '../film-tab-overview/film-tab-overview';
import FilmTabReviews from '../film-tab-reviews/film-tab-reviews';

type FilmTabsProps = {
  film: Film;
  reviews: Reviews;
}

function FilmTabs({film, reviews}: FilmTabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>(TabValue.Overview);

  const renderTab = () => {
    switch (activeTab) {
      case TabValue.Overview:
        return <FilmTabOverview film={film} />;
      case TabValue.Details:
        return <FilmTabDetails film={film} />;
      case TabValue.Reviews:
        return <FilmTabReviews reviews={reviews} />;
    }
  };

  const handleLinkClick = (evt: MouseEvent) => {
    evt.preventDefault();
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === TabValue.Overview ? 'film-nav__item--active' : ''}`} onClick={() => setActiveTab(TabValue.Overview)}>
            <Link to='#' className="film-nav__link" onClick={handleLinkClick}>Overview</Link>
          </li>
          <li className={`film-nav__item ${activeTab === TabValue.Details ? 'film-nav__item--active' : ''}`} onClick={() => setActiveTab(TabValue.Details)}>
            <Link to='#' className="film-nav__link" onClick={handleLinkClick}>Details</Link>
          </li>
          <li className={`film-nav__item ${activeTab === TabValue.Reviews ? 'film-nav__item--active' : ''}`} onClick={() => setActiveTab(TabValue.Reviews)}>
            <Link to='#' className="film-nav__link" onClick={handleLinkClick}>Reviews</Link>
          </li>
        </ul>
      </nav>

      {renderTab()}
    </div >
  );
}

export default FilmTabs;
