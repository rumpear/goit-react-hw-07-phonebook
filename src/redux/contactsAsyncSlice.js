import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, removeContact } from './contactsOperations';

const contactsAsyncSlice = createSlice({
  name: 'contacts',
  initialState: { entities: [], filter: '', isLoading: false, error: null },
  reducers: {
    updateFilter(state, { payload }) {
      return { ...state, filter: payload };
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        entities: [...state.entities, ...payload],
        isLoading: false,
      };
    },
    [fetchContacts.pending]: state => {
      return { ...state, isLoading: true };
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      return { ...state, error: payload, isLoading: false };
    },
    [addContact.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        entities: [...state.entities, payload],
        isLoading: false,
      };
    },
    [addContact.pending]: state => {
      return { ...state, isLoading: true };
    },
    [addContact.rejected]: (state, { payload }) => {
      return { ...state, error: payload, isLoading: false };
    },
    [removeContact.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        entities: state.entities.filter(({ id }) => {
          return id !== payload.id;
        }),
        isLoading: false,
      };
    },
    [removeContact.pending]: state => {
      return { ...state, isLoading: true };
    },
    [removeContact.rejected]: (state, { payload }) => {
      return { ...state, error: payload, isLoading: false };
    },
  },
});

export const { updateFilter } = contactsAsyncSlice.actions;
export default contactsAsyncSlice.reducer;
