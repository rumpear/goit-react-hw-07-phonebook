import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOperations';
import {
  getContactsValue,
  getFilterValue,
} from '../../redux/contactsSelectors';
import { ContactsItem } from './ContactsItem';
import { Loader } from '../ui/Loader';
import { List, Text } from './ContactsList.styled';
import { useState } from 'react';

export const ContactsList = () => {
  const contacts = useSelector(getContactsValue);
  const [isLoading, setIsLoading] = useState(false);
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    (async function () {
      try {
        await dispatch(fetchContacts()).unwrap();
        setIsLoading(false);
      } catch (error) {
        toast('Something went wrong. Please reload the page');
      }
    })();
  }, [dispatch]);

  //* alternative
  // useEffect(() => {
  //   dispatch(fetchContacts());
  //   setIsLoading(false);
  // }, [dispatch]);

  // useEffect(() => {
  //   if (error && isLoading) {
  //     toast('Something went wrong. Please reload the page');
  //     setIsLoading(false);
  //   }
  // }, [error, isLoading]);

  const filteredContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filterValue.toLowerCase());
  });

  if (isLoading) return <Loader size={50} />;

  return (
    <div>
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
