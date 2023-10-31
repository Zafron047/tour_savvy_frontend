import { configureStore } from '@reduxjs/toolkit';
import packagesSlice from './packages/packagesSlice';
import reservationsReducer from './reservations/reservationSlice';

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    packages: packagesSlice,
    reservations: reservationsReducer,
  },
  preloadedState: loadStateFromLocalStorage(),
  reservations: reservationsReducer,
});

export default store;
