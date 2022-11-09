import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TabValue } from '../../const';
import { FilmTabsProps } from '../../types/types';
import FilmTabDetails from '../film-tab-details/film-tab-details';
import FilmTabOverView from '../film-tab-overview/film-tab-overview';
import FilmTabReviews from '../film-tab-reviews/film-tab-reviews';

function FilmTabs({film, reviews}: FilmTabsProps): JSX.Element {
  const [isActiveTab, setActiveTab] = useState<string>(TabValue.Overview);

  const renderTab = () => {
    switch (isActiveTab) {
      case TabValue.Overview:
        return <FilmTabOverView film={film} />;
      case TabValue.Details:
        return <FilmTabDetails film={film} />;
      case TabValue.Reviews:
        return <FilmTabReviews reviews={reviews} />;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${isActiveTab === TabValue.Overview ? 'film-nav__item--active' : ''}`} onClick={() => setActiveTab(TabValue.Overview)}>
            <Link to='#' className="film-nav__link">Overview</Link>
          </li>
          <li className={`film-nav__item ${isActiveTab === TabValue.Details ? 'film-nav__item--active' : ''}`} onClick={() => setActiveTab(TabValue.Details)}>
            <Link to='#' className="film-nav__link">Details</Link>
          </li>
          <li className={`film-nav__item ${isActiveTab === TabValue.Reviews ? 'film-nav__item--active' : ''}`} onClick={() => setActiveTab(TabValue.Reviews)}>
            <Link to='#' className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>

      {renderTab()}
    </div >
  );
}

export default FilmTabs;
