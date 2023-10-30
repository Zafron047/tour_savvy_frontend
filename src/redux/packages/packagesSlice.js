import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPackages = createAsyncThunk('packages-fetcher', async () => {
  const packages = await axios.get('http://127.0.0.1:3000/packages');
  return packages.data;
});

const packagesSlice = createSlice({
  name: 'packages',
  initialState: {
    allPackages: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPackages.pending, (state) => ({
        ...state,
        loading: true,
      }))

      .addCase(fetchPackages.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        allPackages: action.payload,
      }))

      .addCase(fetchPackages.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default packagesSlice.reducer;
