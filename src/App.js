import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import Packages from './components/Packages';
import PackageDetails from './components/Package_Details';
import PackageForm from './components/PackageForm';
import SideNav from './components/Nav';
import DeletePackages from './components/DeletePackages';
import { getReservations } from './redux/reservations/reservationSlice';
import Reservations from './components/Reservations';
import AddReservation from './components/AddReservation';
import RemoveReservation from './components/RemoveReservation';
import Login from './components/Login';
import Logout from './components/Logout';
import Registration from './components/Registration';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReservations());
  }, []);

  return (
    <>
      <SideNav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/details/:id" element={<PackageDetails />} />
        <Route path="/add_package" element={<PackageForm />} />
        <Route path="/delete-packages" element={<DeletePackages />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/add_reservations" element={<AddReservation />} />
        <Route path="/remove_reservations" element={<RemoveReservation />} />
      </Routes>
    </>
  );
};

export default App;
