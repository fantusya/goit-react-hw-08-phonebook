import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateAvatar,
} from './operations';

const handlePending = state => {
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  console.log('action.payload', action.payload);
  state.isRefreshing = false;
  state.error = action.payload.message || false;
};

const initialState = {
  user: {
    name: null,
    email: null,
    subscription: 'starter',
    avatarURL: null,
  },
  token: null,
  isLoggedIn: false,
  needToVerify: false,
  isRefreshing: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeError(state, action) {
      state.error = false;
    },
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload;

      state.needToVerify = true;
      state.isRefreshing = false;
      state.error = false;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;

      state.isLoggedIn = true;
      state.needToVerify = false;
      state.isRefreshing = false;
      state.error = false;
    },
    [logOut.fulfilled](state) {
      state.user = {
        name: null,
        email: null,
        subscription: 'starter',
        avatarURL: null,
      };
      state.token = null;

      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.error = false;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;

      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = false;
    },
    [updateAvatar.fulfilled](state, action) {
      state.user.avatarURL = action.payload.avatarURL;

      state.isRefreshing = false;
      state.error = false;
    },
    [register.pending]: handlePending,
    [logIn.pending]: handlePending,
    [logOut.pending]: handlePending,
    [refreshUser.pending]: handlePending,
    [updateAvatar.pending]: handlePending,
    [register.rejected]: handleRejected,
    [logIn.rejected]: handleRejected,
    [logOut.rejected]: handleRejected,
    [refreshUser.rejected]: handleRejected,
    [updateAvatar.rejected]: handleRejected,
  },
});

export const { changeError } = authSlice.actions;
export const authReducer = authSlice.reducer;
