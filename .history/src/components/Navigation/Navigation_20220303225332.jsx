import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import logo from '../../assets/img/logo.png';

const Navigation = () => {
  const home = routes.find(route => route.label === 'Home');
  const movies = routes.find(route => route.label === 'Movies');

  return (
    <nav className="Navigation">
      <ul className="NavList">
        <li className="NavItem">
          <NavLink
            className="NavLink"
            activeClassName="NavLink--active"
            exact
            to={`${home.path}`}
          >
            <img className="logo" src={logo} alt="logo" />
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
    </nav>
  );
};

export default Navigation;
