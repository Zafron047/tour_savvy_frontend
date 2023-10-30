import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Packages from './components/Packages';
import PackageDetails from './components/Package_Details';
import Nav from './components/Nav';
import store from './redux/store';

const App = () => (
  <>
    <Provider store={store}>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Packages />} />
          <Route path="/details/:id" element={<PackageDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);

export default App;
