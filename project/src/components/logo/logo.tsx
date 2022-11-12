import { Link } from 'react-router-dom';
import cn from 'classnames';

type LogoProps = {
  light?: boolean;
}

function Logo({ light }: LogoProps): JSX.Element {
  return (
    <Link className={cn(
      'logo__link',
      { 'logo__link--light': light }
    )} to="/"
    >
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  );
}

export default Logo;
