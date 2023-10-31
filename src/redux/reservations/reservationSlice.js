import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  reservations: [],
  isLoading: true,
};

export const getReservations = createAsyncThunk(
  'reservations/getReservations',
  async (thunkAPI) => {
    try {
      const res = await axios('http://127.0.0.1:3000/reservations');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const addReservation = createAsyncThunk(
  'reservations/addReservations',
  async (reservation, thunkAPI) => {
    const newReservation = {
      city_name: reservation.cityName,
      reservation_date: reservation.reservationDate,
      package_name: reservation.packageName,
      package_type: reservation.packageType,
    };
    try {
      const res = await axios.post(
        'http://127.0.0.1:3000/reservations/', newReservation,
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const removeReservation = createAsyncThunk(
  'reservations/removeReservations',
  async (id, thunkAPI) => {
    console.log(id);
    try {
      const res = await axios.delete(
        `http://127.0.0.1:3000/reservations/${id}`,
      );
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
    [addReservation.fulfilled]: (state, action) => {
      state.reservations.push(action.payload);
    },
    [removeReservation.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.reservations = state.reservations.filter(
        (reservation) => reservation.id !== action.payload.id,
      );
    },
  },
});

export default reservationsSlice.reducer;
