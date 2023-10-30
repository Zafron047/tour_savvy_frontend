import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPackages = createAsyncThunk('packages-fetcher', async () => {
  const packages = await axios.get('http://127.0.0.1:3000/packages');
  return packages.data;
});

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    alert('An error occurred while saving your data. Please try again later.');
  }
};

const packagesSlice = createSlice({
  name: 'packages',
  initialState: {
    allPackages: [],
    loading: false,
    error: null,
    isPackageFetched: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPackages.pending, (state) => ({
        ...state,
        loading: true,
      }))

      .addCase(fetchPackages.fulfilled, (state, action) => {
        const newState = {
          ...state,
          loading: false,
          allPackages: action.payload,
          isPackageFetched: true,
        };
        saveStateToLocalStorage(newState);
        return newState;
      })

      .addCase(fetchPackages.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default packagesSlice.reducer;
