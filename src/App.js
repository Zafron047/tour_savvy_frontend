import { Route, Routes } from 'react-router-dom';
import './App.css';
import Packages from './components/Packages';
import PackageDetails from './components/Package_Details';
import SideNav from './components/Nav';

const App = () => (
  <>
    <SideNav />
    <Routes>
      <Route path="/" element={<Packages />} />
      <Route path="/details/:id" element={<PackageDetails />} />
    </Routes>
  </>
);

export default App;
