import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContact,
  deleteContact,
  getContacts,
} from '../services/contactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getContacts();
      return res;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/createContact',
  async value => {
    const res = await createContact(value);
    return res;
  }
);

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const res = await deleteContact(id);
    return res;
  }
);
