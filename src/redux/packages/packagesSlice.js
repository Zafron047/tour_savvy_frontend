import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPackages = createAsyncThunk('packages-fetcher', async () => {
  const packages = await axios.get('https://tour-savvy.onrender.com/packages');
  return packages.data;
});

export const createPackage = createAsyncThunk(
  'packages-create',
  async (newPackage) => {
    const user = JSON.parse(window.localStorage.getItem('user'));

    const config = {
      headers: {
        'X-User-Token': user.token,
      },
    };
    const response = await axios.post(
      'https://tour-savvy.onrender.com/packages',
      newPackage,
      config,
    );
    return response.data;
  },
);

export const deletePackage = createAsyncThunk(
  'packages-delete',
  async (packageId) => {
    const user = JSON.parse(window.localStorage.getItem('user'));

    const config = {
      headers: {
        'X-User-Token': user.token,
      },
    };
    await axios.delete(
      `https://tour-savvy.onrender.com/packages/${packageId}`,
      config,
    );
    return packageId;
  },
);

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
      }))

      .addCase(deletePackage.fulfilled, (state, action) => {
        const packageId = action.payload;
        const updatedPackages = state.allPackages.filter(
          (p) => p.id !== packageId,
        );
        return {
          ...state,
          allPackages: updatedPackages,
        };
      });
  },
});

export default packagesSlice.reducer;
