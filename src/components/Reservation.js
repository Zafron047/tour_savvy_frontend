import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getReservation } from '../redux/reservations/reservationSlice';

function Reservation() {
  const location = useLocation();
  const { reservation } = useSelector((store) => store.reservations);
  const { reservationPackage } = useSelector((store) => store.reservations);
  const dispatch = useDispatch();

  const { propReservationId, packageType } = location.state;

  useEffect(() => {
    const getData = async () => {
      await dispatch(
        getReservation(propReservationId),
      );
    };
    getData();
  }, []);

  let price = 500;
  if (packageType === 'Platinum') {
    price = 2000;
  } else if (packageType === 'Golden') {
    price = 1000;
  }

  console.log(reservationPackage);
  return (
    <div>
      <h1>
        Location:
        {reservation.city_name}
      </h1>
      <h2>
        Date:
        {reservation.reservation_date}
      </h2>
      <h2>
        Package type:
        {reservation.package_type}
      </h2>
      <h2>
        Package name:
        {reservationPackage.name}
      </h2>
      <h2>
        Package details:
        {reservationPackage.description}
      </h2>
      <h2>
        {`Price: $${price}`}
      </h2>
    </div>
  );
}

export default Reservation;
