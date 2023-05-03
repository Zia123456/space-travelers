import { NavLink } from 'react-router-dom';
import logo from '../logo.png';
import '../styles/navigation.css';

const Navigation = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <nav className="nav-bar">
      <a className="nav-logo-link" href="#/">
        <img src={logo} alt="logo" className="nav-logo" />
        <h1 className="nav-logo-title">Space Travelers&apos; Hub</h1>
      </a>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            end
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Missions"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Missions
          </NavLink>
        </li>
        <div className="vertical-divider" />
        <li>
          <NavLink
            to="MyProfile"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
