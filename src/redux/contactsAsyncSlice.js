import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, removeContact } from './contactsOperations';

const contactsAsyncSlice = createSlice({
  name: 'contacts',
  initialState: { entities: [], filter: '', isLoading: false, error: null },
  reducers: {
    updateFilter(state, { payload }) {
      state.filter = payload;
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
      state.isLoading = true;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        entities: [...state.entities, payload],
        isLoading: false,
      };
    },
    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
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
      state.isLoading = true;
    },
    [removeContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const { updateFilter } = contactsAsyncSlice.actions;
export default contactsAsyncSlice.reducer;
