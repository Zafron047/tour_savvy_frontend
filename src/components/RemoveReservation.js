import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeReservation } from '../redux/reservations/reservationSlice';

function RemoveReservation() {
  const dispatch = useDispatch();
  const { reservations, isLoading } = useSelector(
    (store) => store.reservations,
  );
  const handleRemove = async (e, id) => {
    e.preventDefault();
    dispatch(removeReservation(id));
  };

  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return <div>Please log in to delete a reservation.</div>;
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
  return (
    <div>
      {reservations.map((reservation) => (
        <div className="reservation" key={reservation.id}>
          <div>
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
          <button type="button" onClick={(e) => handleRemove(e, reservation.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default RemoveReservation;
