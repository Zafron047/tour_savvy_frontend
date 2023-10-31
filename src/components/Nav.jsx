import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/">Packages</NavLink>
      </li>
      <li>
        <NavLink to="/">Add Package</NavLink>
      </li>
      <li>
        <NavLink to="/">Reservations</NavLink>
      </li>
      <li>
        <NavLink to="/">Add Reservation</NavLink>
      </li>
      <li>
        <NavLink to="/">Delete Package</NavLink>
      </li>
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
    </ul>
  </div>
);

export default SideNav;
