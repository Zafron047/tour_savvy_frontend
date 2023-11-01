import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/">Packages</NavLink>
      </li>
      <li>
        <NavLink to="/add_package">Add Package</NavLink>
      </li>
      <li>
        <NavLink to="/reservations">Reservations</NavLink>
      </li>
      <li>
        <NavLink to="/add_reservations">Add Reservation</NavLink>
      </li>
      <li>
        <NavLink to="/delete-packages">Delete Package</NavLink>
      </li>
      <li>
        <NavLink to="/remove_reservations">Remove Reservations</NavLink>
      </li>
      <li>
        <NavLink to="/logout">Logout</NavLink>
      </li>
    </ul>
  </div>
);

export default SideNav;
