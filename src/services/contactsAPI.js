import axios from 'axios';

axios.defaults.baseURL =
  'https://627cce7be5ac2c452af7102a.mockapi.io/materials/';

export const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const createContact = async values => {
  const { data } = await axios.post('/contacts', values);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
