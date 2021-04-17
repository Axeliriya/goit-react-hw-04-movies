import { NavLink } from 'react-router-dom';
import Container from '../Container';
import { routes } from '../../routes';

const Navigation = () => {
  const home = routes.find(route => route.label === 'Home');
  const movies = routes.find(route => route.label === 'Movies');
  return (
    <nav className="Navigation">
      <Container>
        <ul className="NavList">
          <li className="NavItem">
            <NavLink
              className="NavLink"
              activeClassName="NavLink--active"
              exact
              to={`${home.path}`}
            >
              Home
            </NavLink>
          </li>
          <li className="NavItem">
            <NavLink
              className="NavLink"
              activeClassName="NavLink--active"
              to={`${movies.path}`}
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
