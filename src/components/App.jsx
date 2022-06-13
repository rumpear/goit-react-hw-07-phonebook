import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Section } from './ui/Section';
import { ContactsFilter } from './ContactsFilter';
import { ContactsForm } from './ContactsForm';
import { ContactsList } from './ContactsList';

import { Wrapper, TitlePhonebook, TitleContacts } from './App.styled';

export const App = () => {
  return (
    <Section>
      <Wrapper>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <ContactsForm />
        <ContactsFilter />
        <TitleContacts>Contacts</TitleContacts>
        <ContactsList />
      </Wrapper>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Section>
  );
};
