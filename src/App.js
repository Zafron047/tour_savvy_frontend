import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Packages from './components/Packages';
import Nav from './components/Nav';

const App = () => (
  <>
    <Nav />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Packages />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
