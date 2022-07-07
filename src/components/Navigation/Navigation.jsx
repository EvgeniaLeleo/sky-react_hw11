import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink className="navigation__link" to="/">
        <span>Home</span>
      </NavLink>
      <NavLink className="navigation__link" to="/about">
        <span>About</span>
      </NavLink>
      <NavLink className="navigation__link" to="/login">
        <span>Login</span>
      </NavLink>
      <NavLink className="navigation__link" to="/order">
        <span>Order</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
