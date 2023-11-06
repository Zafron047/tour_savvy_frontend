import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import Packages from './components/Packages';
import PackageDetails from './components/Package_Details';
import PackageForm from './components/PackageForm';
import SideNav from './components/Nav';
import DeletePackages from './components/DeletePackages';
import Reservations from './components/Reservations';
import AddReservation from './components/AddReservation';
import RemoveReservation from './components/RemoveReservation';
import Login from './components/Login';
import Logout from './components/Logout';
import Registration from './components/Registration';
import { fetchPackages } from './redux/packages/packagesSlice';
import Reservation from './components/Reservation';
import { getReservations } from './redux/reservations/reservationSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPackages());
  }, [dispatch]);
  if (localStorage.getItem('user')) {
    const allReservations = async () => {
      dispatch(getReservations());
    };
    allReservations();
  }
  const user = JSON.parse(localStorage.getItem('user')) || {};
  return (
    <div className="app d-flex">
      <SideNav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/details/:id" element={<PackageDetails />} />
        {user && user.user && user.user.admin === true && (
          <>
            <Route path="/add_package" element={<PackageForm />} />
            <Route path="/delete-packages" element={<DeletePackages />} />
          </>
        )}
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/add_reservations" element={<AddReservation />} />
        <Route path="/remove_reservations" element={<RemoveReservation />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </div>
  );
};
export default App;
