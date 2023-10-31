import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getReservations } from '../redux/reservations/reservationSlice';

function Reservations() {
  const { reservations, isLoading } = useSelector((store) => store.reservations);
  // console.log(reservations);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReservations(1));
  }, []);

  if (isLoading) {
    return (
      <>
        <div>
          <h2>Loading...</h2>
        </div>
      </>
    );
  }
  return (
    <div>
      {reservations.map((reservation) => (
        <Link to="/reservation" key={reservation.id} state={{ prop_package_id: reservation.package_id, prop_reservation_id: reservation.id }}>
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