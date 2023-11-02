import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={handleSearchChange}
      />
      {res.map((reservation) => (
        <Link
          to="/reservation"
          key={reservation.id}
          state={{
            propReservationId: reservation.id,
            packageType: reservation.package_type,
          }}
        >
          <div className="reservation" key={reservation.id}>
            <h2>
              Location:
              {reservation.city_name}
            </h2>
            <h3>
              Date:
              {reservation.reservation_date}
            </h3>
            <h3>
              Package:
              {reservation.package_type}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Reservations;
