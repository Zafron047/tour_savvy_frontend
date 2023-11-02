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
  const [packageId, setPackageId] = useState(0);

  let packageTypes = [];

  packages.forEach((packageItem) => {
    if (packageItem.id === packageId) {
      packageTypes = packageItem.package_type;
    }
  });

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
          onChange={(e) => {
            const selectedPackage = packages.find(
              (packageItem) => packageItem.name === e.target.value,
            );
            if (selectedPackage) {
              setPackageName(e.target.value);
              setPackageId(selectedPackage.id);
            }
          }}
        >
          <option value="">Select a Package</option>
          {packages.map((packageItem) => (
            <option key={packageItem.id} value={packageItem.name}>
              {packageItem.name}
            </option>
          ))}
        </select>

        <h2>Package Type:</h2>
        <div>
          {packageTypes.map((type) => (
            <label key={type.name} htmlFor="PackageType">
              <input
                type="radio"
                name="packageType"
                value={type.name}
                checked={packageType === type.name}
                onChange={(e) => setPackageType(e.target.value)}
              />
              {type.name}
            </label>
          ))}
        </div>

        <button type="submit">Add Reservation</button>
      </form>
    </div>
  );
}
export default AddReservation;
