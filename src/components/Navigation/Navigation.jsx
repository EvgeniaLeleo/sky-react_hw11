import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink className="navigation__link" to="/">
        Home
      </NavLink>
      <NavLink className="navigation__link" to="/about">
        About
      </NavLink>
      <NavLink className="navigation__link" to="/login">
        Login
      </NavLink>
      <NavLink className="navigation__link" to="/order">
        Order
      </NavLink>
    </nav>
  );
};

export default Navigation;
