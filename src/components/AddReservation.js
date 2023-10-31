import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../redux/reservations/reservationSlice';

function AddReservation() {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [packageName, setPackageName] = useState('');
  const [packageType, setPackageType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addReservation({
      cityName, reservationDate, packageName, packageType,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="City Name"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <input
          type="date"
          placeholder="Reservation Date"
          value={reservationDate}
          onChange={(e) => setReservationDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Package Name"
          value={packageName}
          onChange={(e) => setPackageName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Package Type"
          value={packageType}
          onChange={(e) => setPackageType(e.target.value)}
        />
        <button type="submit">Add Reservation</button>
      </form>
    </div>
  );
}
export default AddReservation;
