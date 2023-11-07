import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getReservation } from '../redux/reservations/reservationSlice';
import '../stylesheets/resDetails.css';
import '../stylesheets/common.css';

function Reservation() {
  const location = useLocation();
  const { reservation, reservationPackage, price } = useSelector((store) => store.reservations);
  const dispatch = useDispatch();

  const { propReservationId, packageType } = location.state;

  useEffect(() => {
    const getData = async () => {
      await dispatch(getReservation({ id: propReservationId, type: packageType }));
    };
    getData();
  }, []);

  console.log(reservationPackage);
  return (
    <div className="resDetails">
      <div className="background" />
      <div className="main-resDetails">
        <h2>Reservation Details</h2>
        <h3>
          Location:&nbsp;
          {reservation.city_name}
        </h3>
        <h3>
          Date:&nbsp;
          {reservation.reservation_date}
        </h3>
        <h3>
          Package type:&nbsp;
          {reservation.package_type}
        </h3>
        <h3>
          Package name:&nbsp;
          {reservationPackage.name}
        </h3>
        <h3>
          Package details:&nbsp;
          {reservationPackage.description}
        </h3>
        <h3>
          Price:&nbsp;
          {price}
        </h3>
      </div>
    </div>
  );
}

export default Reservation;
