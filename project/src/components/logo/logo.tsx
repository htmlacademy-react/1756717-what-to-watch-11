import { Link } from 'react-router-dom';
import { LogoProps } from '../../types/types';

function Logo({light}: LogoProps): JSX.Element {
  return light ? (
    <Link className="logo__link logo__link--light" to="/">
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  ) : (
    <Link className="logo__link" to="/">
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  );
}

export default Logo;
