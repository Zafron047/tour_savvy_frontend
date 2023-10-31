import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  reservations: [],
  isLoading: true,
};
export const getReservations = createAsyncThunk(
  'reservations/getReservations',
  async (thunkAPI, id) => {
    try {
      const res = await axios(`http://127.0.0.1:3000/packages/${id}/reservations`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);
const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  extraReducers: {
    [getReservations.pending]: (state) => {
      state.isLoading = true;
    },
    [getReservations.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.reservations = action.payload;
    },
    [getReservations.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default reservationsSlice.reducer;
