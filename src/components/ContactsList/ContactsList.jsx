import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOperations';
import {
  getContactsValue,
  getErrorValue,
  getFilterValue,
  // getIsLoadingValue,
} from '../../redux/contactsSelectors';
import { ContactsItem } from './ContactsItem';
// import { Loader } from '../ui/Loader';
import { ErrorMessage } from '../ui/ErrorMessage';
import { List, Text } from './ContactsList.styled';
// import { useState } from 'react';

export const ContactsList = () => {
  const contacts = useSelector(getContactsValue);
  // const isLoading = useSelector(getIsLoadingValue);
  // const [isLoading, setIsLoading] = useState(false);
  const error = useSelector(getErrorValue);
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filterValue.toLowerCase());
  });

  // if (error) return <ErrorMessage message={error} />;
  // if (isLoading) return <Loader size={50} />;

  return (
    <div>
      {error && <ErrorMessage message={error} />}
      {filteredContacts.length ? (
        <List>
          {filteredContacts.map(({ id, name, phone }) => (
            <ContactsItem key={id} id={id} name={name} number={phone} />
          ))}
        </List>
      ) : (
        <Text>Nothing to show</Text>
      )}
    </div>
  );
};
