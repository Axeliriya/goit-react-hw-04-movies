import { NavLink } from 'react-router-dom';
import Container from '../Container';
import routes from '../../routes';

const Navigation = () => {
  return (
    <nav className="Navigation">
      <Container>
        <ul className="NavList">
          <li className="NavItem">
            <NavLink
              className="NavLink"
              activeClassName="NavLink--active"
              exact
              to={routes.home}
            >
              Home
            </NavLink>
          </li>
          <li className="NavItem">
            <NavLink
              className="NavLink"
              activeClassName="NavLink--active"
              to={routes.movies}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navigation;
