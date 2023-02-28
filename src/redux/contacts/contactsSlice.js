import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact, updateContact, updateFavorite } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactItems: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactItems = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactItems.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contactItems.findIndex(
        contact => contact._id === action.meta.arg
      );
      state.contactItems.splice(index, 1);
    },
    [updateContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contactItems.findIndex(
        contact => contact._id === action.payload._id
      );
      state.contactItems.splice(index, 1, action.payload);
    },
    [updateFavorite.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const contact = state.contactItems.find(
        contact => contact._id === action.payload._id
      );
      contact.favorite =  action.payload.favorite;
    },
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [updateContact.pending]: handlePending,
    [updateFavorite.pending]: handlePending ,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [updateContact.rejected]: handleRejected,
    [updateFavorite.rejected]: handleRejected,

  },
  // reducers: {
  //   // start of HTTP-request
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   // successful HTTP-request
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contactItems = action.payload;
  //   },
  //   // failed HTTP-request
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

export const contactsReducer = contactsSlice.reducer;

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//     },
//     deleteContact: {
//       reducer(state, action) {
//         const index = state.findIndex(task => task.id === action.payload);
//         state.splice(index, 1);
//       },
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
