import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../stylesheets/reservations.css';
import '../stylesheets/common.css';

function Reservations() {
  const { reservations, isLoading } = useSelector(
    (store) => store.reservations,
  );

  const user = JSON.parse(localStorage.getItem('user'));
  const [search, setsearch] = useState('');
  const handleSearchChange = (e) => {
    setsearch(e.target.value);
  };
  if (!user) {
    return <div>Please log in to see reservations.</div>;
  }
  if (isLoading) {
    return (
      <>
        <div>
          <h2>Loading...</h2>
        </div>
      </>
    );
  }
  const res = reservations.filter((i) => i.city_name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="reservations d-flex flex-column justify-content-center align-items-center">
      <div className="background" />
      <div className="main-reservations">
        <input
          type="text"
          placeholder="Search by name"
          className="search-bar"
          value={search}
          onChange={handleSearchChange}
        />
        <div className="reservation-link">
          <div className="reservation">
            <span className="res-no">No.</span>
            <span className="res-city">Location</span>
            <span className="res-date">Date</span>
            <span className="res-type">Package</span>
          </div>
        </div>
        {res.map((reservation, i) => (
          <Link
            to="/reservation"
            key={reservation.id}
            state={{
              propReservationId: reservation.id,
              packageType: reservation.package_type,
            }}
            className="reservation-link"
          >
            <div className="reservation" key={reservation.id}>
              <span className="res-no">
                {i + 1}
                .
              </span>
              <span className="res-city">{reservation.city_name}</span>
              <span className="res-date">{reservation.reservation_date}</span>
              <span className="res-type">{reservation.package_type}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Reservations;
