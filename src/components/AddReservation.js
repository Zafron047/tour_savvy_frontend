import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '../redux/reservations/reservationSlice';
import '../stylesheets/addReservation.css';
import '../stylesheets/common.css';

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
    <div className="addReservation">
      <div className="background" />
      <div className="main-addReservation">
        <div className="addReservation-header">
          <h2>BOOK A RESERVATION WITH US</h2>
          <p>
            Select from a wide range of locations and packages to suit your needs
            and enjoy your holidays and vacations with us, we guarantee your
            satisfaction on all reservatoins made with us.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="forms">
          <div>
            <input
              type="text"
              className="form-fields"
              placeholder="City Name"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />
          </div>

          <div>
            <input
              type="date"
              className="form-fields"
              placeholder="Reservation Date"
              value={reservationDate}
              onChange={(e) => setReservationDate(e.target.value)}
            />
          </div>
          <div>
            <select
              className="form-fields"
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
              <option value="" className="form-fields">
                Select a Package
              </option>
              {packages.map((packageItem) => (
                <option
                  key={packageItem.id}
                  value={packageItem.name}
                  className="form-fields"
                >
                  {packageItem.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            {packageTypes.map((type) => (
              <div key={type.name} className="package-types">
                <input
                  type="radio"
                  name="packageType"
                  value={type.name}
                  checked={packageType === type.name}
                  onChange={(e) => setPackageType(e.target.value)}
                />
                <label htmlFor="PackageType" className="radio">{type.name}</label>
              </div>
            ))}
          </div>

          <button type="submit" className="form-btns btn">
            Add Reservation
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddReservation;
