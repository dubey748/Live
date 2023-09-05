import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAuth } from './AuthAPI';

const initialState = {
  isAuthenticated: false,
  status: 'idle',
};

export const authenticateAsync = createAsyncThunk(
  'auth/fetchAuth',
  async (credentials) => {
    const response = await fetchAuth(credentials);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(authenticateAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.isAuthenticated = action.payload;
      });
  },
});

export const { setAuthenticated } = authSlice.actions;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
