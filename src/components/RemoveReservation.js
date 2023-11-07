import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeReservation } from '../redux/reservations/reservationSlice';
import '../stylesheets/delReservation.css';
import '../stylesheets/common.css';

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
    <div className="delReservation">
      <div className="background" />
      <div className="main-delReservation">
        <h2 className="cancel-heading">Cancel a reservation</h2>
        <div className="cancel-card-container">
          {reservations.map((reservation) => (
            <div className="cancel-card" key={reservation.id}>
              <div className="cancel-details">
                <h2>
                  Location:&nbsp;
                  {reservation.city_name}
                </h2>
                <h3>
                  Date:&nbsp;
                  {reservation.reservation_date}
                </h3>
                <h3>
                  Package:&nbsp;
                  {reservation.package_type}
                </h3>
              </div>
              <button
                type="button"
                className="form-btns cancel-btn"
                onClick={(e) => handleRemove(e, reservation.id)}
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RemoveReservation;
