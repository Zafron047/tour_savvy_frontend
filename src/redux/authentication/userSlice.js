import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('user-login', async (user) => {
  const response = await axios.post('http://127.0.0.1:3000/login', user);
  return response.data;
});

export const logoutUser = createAsyncThunk('user-logout', async () => {
  localStorage.removeItem('user');
});

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
    })),
});

export default userSlice.reducer;
