import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '../redux/reservations/reservationSlice';

function AddReservation() {
  const dispatch = useDispatch();
  const packages = useSelector((state) => state.packages.allPackages);

  const [cityName, setCityName] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [packageName, setPackageName] = useState('');
  const [packageType, setPackageType] = useState('');

  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return <div>Please log in to add a reservation.</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      addReservation({
        cityName,
        reservationDate,
        packageName,
        packageType,
      }),
    );
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

        <h2>Package Name:</h2>
        <select
          value={packageName}
          onChange={(e) => setPackageName(e.target.value)}
        >
          <option value="">Select a Package</option>
          {packages.map((packageItem) => (
            <option key={packageItem.id} value={packageItem.name}>
              {packageItem.name}
            </option>
          ))}
        </select>

        <div>
          <p>Package Type:</p>
          <label htmlFor="packageType">
            <input
              type="radio"
              value="Golden"
              checked={packageType === 'Golden'}
              onChange={(e) => setPackageType(e.target.value)}
            />
            Golden
          </label>

          <label htmlFor="packageType">
            <input
              type="radio"
              value="Silver"
              checked={packageType === 'Silver'}
              onChange={(e) => setPackageType(e.target.value)}
            />
            Silver
          </label>

          <label htmlFor="packageType">
            <input
              type="radio"
              value="Platinum"
              checked={packageType === 'Platinum'}
              onChange={(e) => setPackageType(e.target.value)}
            />
            Platinum
          </label>
        </div>

        <button type="submit">Add Reservation</button>
      </form>
    </div>
  );
}
export default AddReservation;
