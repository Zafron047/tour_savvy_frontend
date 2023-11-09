import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('user-login', async (user) => {
  const response = await axios.post(
    "https://tour-savvy.onrender.com/login",
    user
  );
  return response.data;
});

export const logoutUser = createAsyncThunk('user-logout', async () => {
  localStorage.removeItem('user');
});

export const registrationUser = createAsyncThunk(
  'user-registration',
  async (user) => {
    const response = await axios.post(
      "https://tour-savvy.onrender.com/signup",
      user
    );
    return response.data;
  },
);

const userSlice = createSlice({
  name: 'current_user',
  initialState: {
    username: '',
    loading: false,
    error: null,
  },

  extraReducers: (builder) => builder
    .addCase(loginUser.pending, (state) => ({
      ...state,
      loading: true,
    }))

    .addCase(loginUser.fulfilled, (state, action) => {
      const { payload } = action;
      if (payload) {
        localStorage.setItem('user', JSON.stringify(payload));
      }
      return {
        ...state,
        loading: false,
        username: payload,
      };
    })

    .addCase(loginUser.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }))

    .addCase(registrationUser.pending, (state) => ({
      ...state,
      loading: true,
    }))

    .addCase(registrationUser.fulfilled, (state) => ({
      ...state,
      loading: false,
    }))

    .addCase(registrationUser.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    })),
});

export default userSlice.reducer;
