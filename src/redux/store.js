import { configureStore } from '@reduxjs/toolkit';
import packagesSlice from './packages/packagesSlice';

const store = configureStore({
  reducer: {
    packages: packagesSlice,
  },
});

export default store;
