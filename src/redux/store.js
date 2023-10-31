import { configureStore } from '@reduxjs/toolkit';
import packagesSlice from './packages/packagesSlice';

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
  },
  preloadedState: loadStateFromLocalStorage(),
});

export default store;
