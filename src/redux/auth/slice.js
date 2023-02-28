import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, updateAvatar } from './operations';

const handlePending = state => {
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const initialState = {
  user: {
    // name: null,
    email: null,
    subscription: "starter",
    verificationToken: null,
    verify: false,
    avatarURL: null
  },
  token: null,
  isLoggedIn: false,
  isVerified: false,
  needToVerify: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload;

      state.needToVerify = true;
      state.isRefreshing = false;
    },
    // [verifyEmail.fulfilled](state, action) {
    //   state.needToVerify = false;
    //   state.isVerified = true;
    // },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;

      state.isLoggedIn = true;
      state.needToVerify = false;
      state.isRefreshing = false;
      console.log("logIn.fulfilled state.user", state.user);
    },
    [logOut.fulfilled](state) {
      state.user = {
        email: null,
        subscription: "starter",
        verificationToken: null,
        verify: false,
        avatarURL: null
      };
      state.token = null;
      
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;

      state.isLoggedIn = true;
      state.isRefreshing = false;
      console.log("logIn.fulfilled state.user", state.user);
    },
    [updateAvatar.fulfilled](state, action) {
      state.user.avatarURL = action.payload.avatarURL;
      state.isRefreshing = false;
      console.log("state.user.avatarURL", state.user.avatarURL);
      console.log("action.payload.avatarURL", action.payload.avatarURL);
    },
    [register.pending]: handlePending,
    [logIn.pending]: handlePending,
    [logOut.pending]: handlePending,
    [refreshUser.pending]: handlePending,
    [updateAvatar.pending]: handlePending,
    [refreshUser.rejected]: handleRejected,
    [updateAvatar.rejected]: handleRejected,
  },
});

export const authReducer = authSlice.reducer;
