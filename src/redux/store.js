import { configureStore } from '@reduxjs/toolkit';
import contactsAsyncSlice from './contactsAsyncSlice';

export const store = configureStore({
  reducer: { contacts: contactsAsyncSlice },
});
