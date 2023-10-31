import { Route, Routes } from 'react-router-dom';
import './App.css';
import Packages from './components/Packages';
import PackageDetails from './components/Package_Details';
import PackageForm from './components/PackageForm'
import SideNav from './components/Nav';
import DeletePackages from './components/DeletePackages'

const App = () => (
  <>
    <SideNav />
    <Routes>
      <Route path="/" element={<Packages />} />
      <Route path="/details/:id" element={<PackageDetails />} />
      <Route path="/add_package" element={<PackageForm />} />
      <Route path="/delete-packages" element={<DeletePackages />} />
    </Routes>
  </>
);

export default App;
